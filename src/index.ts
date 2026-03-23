/**
 * @fozikio/tools-social — social cognition plugin for cortex-engine.
 *
 * Provides 4 tools:
 * - social_read: read current social cognition model
 * - social_update: log a social signal observation
 * - social_score: score a social signal for engagement potential (5-factor)
 * - social_draft: draft a reply tweet using cortex context + LLM
 */

import type { ToolPlugin } from '@fozikio/cortex-engine';
import { socialReadTool } from './tools/social-read.js';
import { socialUpdateTool } from './tools/social-update.js';
import { socialScoreTool } from './tools/social-score.js';
import { socialDraftTool } from './tools/social-draft.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-social',
  tools: [
    socialReadTool,
    socialUpdateTool,
    socialScoreTool,
    socialDraftTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { socialReadTool } from './tools/social-read.js';
export { socialUpdateTool } from './tools/social-update.js';
export { socialScoreTool } from './tools/social-score.js';
export { socialDraftTool } from './tools/social-draft.js';
