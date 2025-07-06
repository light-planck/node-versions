# @light-planck/node-versions

A CLI tool to check Node.js LTS and Latest versions

## Usage

```bash
# Default: Show both LTS and Latest versions
npx @light-planck/node-versions@latest
# LTS: v22.17.0
# Latest: v24.3.0

# Show only LTS version
npx @light-planck/node-versions@latest --lts
# v22.17.0

# Show only Latest version
npx @light-planck/node-versions@latest --latest
# v24.3.0

# JSON output
npx @light-planck/node-versions@latest --json
# {"lts":"v22.17.0","latest":"v24.3.0"}

# Show help
npx @light-planck/node-versions@latest --help
```

## Options

- `--lts` - Show only LTS version
- `--latest` - Show only Latest version
- `--json` - Output in JSON format
- `--help` - Show help
- `--version` - Show version

## Technical Specifications

- Requires Node.js 22 or higher
- Implemented in TypeScript
- Fetches version information from [Node.js official API](https://nodejs.org/dist/index.json)
- Dependencies: `commander` (CLI framework)

## Installation

```bash
# Install globally
npm install -g @light-planck/node-versions

# Or use directly with npx
npx @light-planck/node-versions@latest
```

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm run build

# Development mode (watch)
pnpm run dev

# Test locally
node dist/index.js
```

## License

MIT
