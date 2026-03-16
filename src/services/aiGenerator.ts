/**
 * AI Design Generator Service
 * Uses Google Gemini API for design concept generation
 */

export interface DesignConcept {
  title: string;
  palette: string[];
  style: string;
  svgPattern: string;
  tag: string;
}

async function callGeminiForConcept(prompt: string): Promise<DesignConcept> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a creative director for a print-on-demand merch brand.
Given a design prompt, respond ONLY with a JSON object (no markdown, no backticks, no preamble) with this exact shape:
{
  "title": "Short punchy design name (2-3 words)",
  "palette": ["#hex1", "#hex2", "#hex3"],
  "style": "one of: geometric | botanical | typographic | abstract | illustrative",
  "tag": "one of: AI Drop 01 | Limited | Collab | New | Classic",
  "svgPattern": "a complete inline SVG string with viewBox 0 0 200 200 containing a creative pattern matching the prompt using shapes, lines, circles, paths. No images. Keep under 800 chars."
}

Design prompt: "${prompt}"`
          }]
        }],
        generationConfig: { temperature: 0.9, maxOutputTokens: 1000 }
      }),
    }
  );

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  try {
    const clean = text.replace(/```json|```/g, '').trim();
    return JSON.parse(clean) as DesignConcept;
  } catch {
    return {
      title: prompt.slice(0, 30),
      palette: ['#6b7cff', '#ff6b6b', '#111111'],
      style: 'abstract',
      tag: 'AI Drop 01',
      svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#f8f8ff"/><circle cx="100" cy="100" r="60" fill="none" stroke="#6b7cff" stroke-width="2"/><path d="M40,100 Q70,60 100,100 Q130,140 160,100" fill="none" stroke="#ff6b6b" stroke-width="2.5"/></svg>`,
    };
  }
}

export async function generateDesign(prompt: string): Promise<DesignConcept> {
  return await callGeminiForConcept(prompt);
}