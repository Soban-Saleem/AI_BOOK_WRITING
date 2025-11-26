import { Subagent } from '@claude-code/core';

// Define the skills that this subagent will have
import { createMermaidDiagram } from './skills/create-mermaid-diagram.skill';
import { formatFrontmatter } from './skills/format-frontmatter.skill';

// Create the Docusaurus Formatter subagent
const DocusaurusFormatterAgent = new Subagent({
  name: 'Docusaurus Formatter',
  description: 'A subagent that helps with formatting Docusaurus markdown files.',
  skills: [
    createMermaidDiagram,
    formatFrontmatter,
  ],
});

export default DocusaurusFormatterAgent;