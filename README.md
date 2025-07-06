# node-versions

Node.js の LTS と Latest バージョンを確認できる CLI ツール

## 使い方

```bash
# デフォルト: LTS と Latest の両方を表示
npx node-versions
# LTS: v22.17.0
# Latest: v24.3.0

# LTS バージョンのみ表示
npx node-versions --lts
# v22.17.0

# Latest バージョンのみ表示
npx node-versions --latest
# v24.3.0

# JSON 形式で出力
npx node-versions --json
# {"lts":"v22.17.0","latest":"v24.3.0"}

# ヘルプを表示
npx node-versions --help
```

## オプション

- `--lts` - LTS バージョンのみ表示
- `--latest` - Latest バージョンのみ表示  
- `--json` - JSON 形式で出力
- `--help` - ヘルプを表示
- `--version` - バージョンを表示

## 技術仕様

- Node.js 22 以上が必要
- TypeScript で実装
- [Node.js 公式 API](https://nodejs.org/dist/index.json) からバージョン情報を取得
- 依存関係: `commander` (CLI フレームワーク)

## 開発

```bash
# 依存関係をインストール
pnpm install

# ビルド
pnpm run build

# 開発モード（watch）
pnpm run dev

# ローカルでテスト
node bin/node-versions.js
```

## ライセンス

MIT