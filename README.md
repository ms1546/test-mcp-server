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

## 📦 セットアップ手順

### 1. クローン & インストール

```bash
git clone https://github.com/your-org/custom-mcp-server.git
cd custom-mcp-server
npm install
