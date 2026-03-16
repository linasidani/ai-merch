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
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a creative director for a print-on-demand merch brand.
Respond ONLY with a raw JSON object, no markdown, no backticks.
Fields: title (string), palette (array of 3 hex colors), style (string), tag (string), svgPattern (SVG string viewBox 0 0 200 200).
Design prompt: "${prompt}"`
          }]
        }],
        generationConfig: { temperature: 0.9, maxOutputTokens: 1200 },
      }),
    }
  );

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  
  console.log('=== GEMINI RAW RESPONSE ===');
  console.log(text);
  console.log('===========================');

  try {
    const match = text.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : text) as DesignConcept;
    if (!parsed.svgPattern || !parsed.palette || !parsed.title) throw new Error('missing fields');
    return parsed;
  } catch (e) {
    console.log('Parse error:', e);
    const hue = Math.abs(prompt.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % 360;
    const color1 = `hsl(${hue}, 70%, 60%)`;
    const color2 = `hsl(${(hue + 120) % 360}, 70%, 60%)`;
    return {
      title: prompt.slice(0, 28),
      palette: [color1, color2, '#111111'],
      style: 'abstract',
      tag: 'AI Drop 01',
      svgPattern: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#f9f9f9"/><circle cx="100" cy="100" r="65" fill="none" stroke="${color1}" stroke-width="2.5"/><circle cx="100" cy="100" r="42" fill="none" stroke="${color2}" stroke-width="1.5" opacity="0.7"/><path d="M35,100 Q67,55 100,100 Q133,145 165,100" fill="none" stroke="${color1}" stroke-width="3"/><circle cx="100" cy="100" r="10" fill="${color1}" opacity="0.8"/></svg>`,
    };
  }
}

export async function generateDesign(prompt: string): Promise<DesignConcept> {
  return await callGeminiForConcept(prompt);
}