# node-versions

A CLI tool to check Node.js LTS and Latest versions

## Usage

```bash
# Default: Show both LTS and Latest versions
npx node-versions
# LTS: v22.17.0
# Latest: v24.3.0

# Show only LTS version
npx node-versions --lts
# v22.17.0

# Show only Latest version
npx node-versions --latest
# v24.3.0

# JSON output
npx node-versions --json
# {"lts":"v22.17.0","latest":"v24.3.0"}

# Show help
npx node-versions --help
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

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm run build

# Development mode (watch)
pnpm run dev

# Test locally
node bin/node-versions.js
```

## License

MIT