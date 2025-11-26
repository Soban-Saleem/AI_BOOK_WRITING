import { Skill } from '@claude-code/core';

// Define the createMermaidDiagram skill
const createMermaidDiagram = new Skill({
  name: 'createMermaidDiagram',
  description: 'Creates a Mermaid.js diagram from a description.',
  inputs: [
    {
      name: 'description',
      type: 'string',
      description: 'A description of the diagram to create.',
    },
  ],
  output: {
    type: 'string',
    description: 'The Mermaid.js syntax for the diagram.',
  },
  handler: async (inputs: { description: string }) => {
    // In a real-world scenario, you would use an LLM to generate the Mermaid syntax.
    // For this example, we will return a pre-defined diagram.
    return `
\`\`\`mermaid
graph TD
    A[Start] --> B{Is it the future?};
    B -->|Yes| C[Awesome!];
    B -->|No| D[Not yet...];
\`\`\`
`;
  },
});

export { createMermaidDiagram };