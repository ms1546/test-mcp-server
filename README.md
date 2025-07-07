# 🧠 Custom MCP Server for Cursor (JavaScript Code Review Edition)

このリポジトリは、[Cursor](https://www.cursor.sh/) の MCP 機能と連携するための**自作MCPサーバー**です。
JavaScript / TypeScript のコードに対して、**規約に沿ったレビューコメント**を自動で生成します。

---

## 🚀 機能概要

- `POST /v1/mcp` エンドポイントに対応
- Cursorエディタと連携して、AIによるコードレビュー支援を実現
- JS/TSのコーディング規約に基づいたレビューを実行
- OpenAI GPT-4 APIを使用（APIキーが必要）

---

## 🛠️ 今後の拡張機能・設計方針

- **レビューコメントのカスタマイズ**
  ユーザーごとにレビュー基準やコメントテンプレートを設定可能にする
- **複数コーディング規約への対応**
  ESLint, Airbnb, Google など、主要なコーディング規約を選択・切替可能
- **詳細なレポート出力**
  レビュー結果を Markdown, JSON, HTML などでエクスポート
- **APIエンドポイントの拡張**
  GET /health, GET /config など管理用APIの追加
- **認証・認可機能**
  APIキーやOAuthによるアクセス制御
- **フロントエンドUIとの連携**
  WebダッシュボードやSlack通知など外部サービス連携
- **レビュー履歴の保存・検索**
  過去のレビュー結果をDBに保存し、検索・再利用可能に

---

## 📦 セットアップ手順

### 1. クローン & インストール

```bash
git clone https://github.com/your-org/custom-mcp-server.git
cd custom-mcp-server
npm install

```
