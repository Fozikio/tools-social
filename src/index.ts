/**
 * @fozikio/tools-social — social cognition plugin for cortex-engine.
 *
 * Provides 2 tools: social_read, social_update.
 * Uses the generic CortexStore API (put/get/update/query) on the 'social_signals' collection.
 */

import type { ToolPlugin } from 'cortex-engine';
import { socialReadTool } from './tools/social-read.js';
import { socialUpdateTool } from './tools/social-update.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-social',
  tools: [
    socialReadTool,
    socialUpdateTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { socialReadTool } from './tools/social-read.js';
export { socialUpdateTool } from './tools/social-update.js';
