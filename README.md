# @fozikio/tools-social

> **Built into cortex-engine v1.0.0+**
> These tools are now included in [`@fozikio/cortex-engine`](https://github.com/Fozikio/cortex-engine) core � no separate install needed. This package remains available for use with cortex-engine **v0.x only**. If you're on v1.0.0+, just install `@fozikio/cortex-engine`.


Social cognition plugin for cortex-engine. Track interaction patterns and social signals inferred from sessions, Discord, Reddit, and other sources.

## Install

```
npm install @fozikio/tools-social
```

## Tools

| Tool | Description |
|------|-------------|
| `social_read` | Read the current social cognition model -- session energy, engagement depth, topic mode, recent observations |
| `social_update` | Log a social signal observation -- record patterns, energy shifts, or notable interactions |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-social"
```

```typescript
import socialPlugin from "@fozikio/tools-social";
import { CortexEngine } from "@fozikio/cortex-engine";

const engine = new CortexEngine({
  plugins: [socialPlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
