/**
 * AI Design Generator Service
 *
 * Uses Claude (via Anthropic API) to generate design concepts.
 * In production: replace generateDesignConcept with a real image gen API
 * (e.g. DALL-E, Stability AI, Replicate) for actual image output.
 *
 * The design "image" here is a generative SVG built from Claude's color/concept response.
 */

export interface DesignConcept {
  title: string;
  palette: string[];
  style: string;
  svgPattern: string;
  tag: string;
}

const EXAMPLE_CONCEPTS: Record<string, DesignConcept> = {
  default: {
    title: 'Abstract Wave',
    palette: ['#6b7cff', '#ff6b6b', '#111111'],
    style: 'geometric',
    tag: 'AI Drop',
    svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#f8f8ff"/>
      <path d="M0,100 Q50,60 100,100 Q150,140 200,100" fill="none" stroke="#6b7cff" stroke-width="3"/>
      <path d="M0,120 Q50,80 100,120 Q150,160 200,120" fill="none" stroke="#ff6b6b" stroke-width="2" opacity="0.6"/>
      <path d="M0,80 Q50,40 100,80 Q150,120 200,80" fill="none" stroke="#111111" stroke-width="1.5" opacity="0.3"/>
      <circle cx="100" cy="100" r="30" fill="none" stroke="#6b7cff" stroke-width="1.5" opacity="0.4"/>
    </svg>`,
  },
};

async function callClaudeForConcept(prompt: string): Promise<DesignConcept> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: `You are a creative director for a print-on-demand merch brand. 
Given a design prompt, respond ONLY with a JSON object (no markdown, no preamble) with this exact shape:
{
  "title": "Short punchy design name (2-3 words)",
  "palette": ["#hex1", "#hex2", "#hex3"],
  "style": "one of: geometric | botanical | typographic | abstract | illustrative",
  "tag": "one of: AI Drop 01 | Limited | Collab | New | Classic",
  "svgPattern": "a complete inline SVG string (viewBox 0 0 200 200) with a creative pattern matching the prompt — use shapes, lines, circles, paths. No images. Keep it under 800 chars."
}`,
      messages: [{ role: 'user', content: `Design prompt: "${prompt}"` }],
    }),
  });

  const data = await response.json();
  const text = data.content?.find((b: { type: string }) => b.type === 'text')?.text ?? '';

  try {
    const clean = text.replace(/```json|```/g, '').trim();
    return JSON.parse(clean) as DesignConcept;
  } catch {
    // Fallback to default concept if parsing fails
    return {
      ...EXAMPLE_CONCEPTS.default,
      title: prompt.slice(0, 30),
    };
  }
}

export async function generateDesign(prompt: string): Promise<DesignConcept> {
  return await callClaudeForConcept(prompt);
}
