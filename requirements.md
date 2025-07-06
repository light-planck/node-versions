# Node Versions - 要件定義

## 概要

Node.js の LTS と Latest バージョンを確認できる npx コマンドを作成する

## 基本機能要件

### 1. バージョン情報の取得

- [ ] Node.js LTS バージョンの取得
- [ ] Node.js Latest バージョンの取得
- [ ] npm API を使用してバージョン情報を取得

### 2. 表示形式

- [ ] デフォルト: LTS と Latest の両方をシンプルに表示
- [ ] バージョン番号の表示
- [ ] 区別しやすい形式（例: `LTS: v20.11.0`, `Latest: v21.6.0`）

### 3. コマンドオプション

- [ ] `--lts` - LTS バージョンのみ表示
- [ ] `--latest` - Latest バージョンのみ表示
- [ ] `--json` - JSON 形式で出力
- [ ] `--help` - ヘルプ表示

## 技術要件

### パッケージ仕様

- [ ] パッケージ名: `node-versions`
- [ ] npx から実行可能（`npx node-versions`）
- [ ] Node.js 22 以上対応
- [ ] TypeScript で実装
- [ ] npm パッケージとして公開

### データソース

- [ ] https://nodejs.org/dist/index.jsonから取得
- [ ] 最新のバージョンと、LTS の値が false でないもっとも最新のバージョンの値を取得

### 依存関係

- [ ] 最小限の依存関係
- [ ] CLI ライブラリの選定（commander.js など）
- [ ] HTTP クライアント（Node.js 標準の fetch を使用）

## 実装詳細

### 出力例

```
# デフォルト実行
$ npx node-versions
LTS: v20.11.0
Latest: v21.6.0

# LTS のみ
$ npx node-versions --lts
v20.11.0

# Latest のみ
$ npx node-versions --latest
v21.6.0

# JSON 形式
$ npx node-versions --json
{
  "lts": "v20.11.0",
  "latest": "v21.6.0"
}
```

### ファイル構成

```
node-versions/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── cli.ts
│   └── api.ts
├── bin/
│   └── node-versions.js
└── README.md
```

## 配布方法

- [ ] npm パッケージとして公開
- [ ] `npx node-versions` でインストールせずに実行可能
- [ ] `bin` フィールドを package.json に設定
