# GitHub Pages セットアップ手順

このドキュメントでは、ERSドキュメントサイトをGitHub Pagesで公開するための設定手順を説明します。

## 前提条件

1. GitHubリポジトリが作成されていること
2. リポジトリ名が `Unity_VRC_EntranceRoomSystem_Docs` であること

## 設定手順

### 1. 設定ファイルの更新

以下のファイルの `[username]` を実際のGitHubユーザー名に置き換えてください：

- `ers-docs/docusaurus.config.ts`
  - `url: 'https://[username].github.io'` → `url: 'https://nmxi.github.io'`
  - `organizationName: '[username]'` → `organizationName: 'nmxi'`
  - `href: 'https://github.com/[username]/Unity_VRC_EntranceRoomSystem'` → `href: 'https://github.com/nmxi/Unity_VRC_EntranceRoomSystem'`

※現在は `nmxi` に設定済みです。

### 2. GitHub リポジトリの設定

1. GitHubリポジトリの **Settings** タブを開く
2. 左サイドバーの **Pages** をクリック
3. **Source** セクションで以下を設定：
   - Source: **GitHub Actions** を選択

### 3. 初回デプロイ

1. すべての変更をコミット
2. mainブランチにプッシュ
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. GitHubリポジトリの **Actions** タブを開く
4. "Deploy to GitHub Pages" ワークフローが実行されることを確認
5. ワークフローが成功したら、以下のURLでサイトにアクセス可能：
   ```
   https://nmxi.github.io/Unity_VRC_EntranceRoomSystem_Docs/
   ```

## トラブルシューティング

### ビルドエラーが発生する場合

1. Node.js v18以上がインストールされているか確認
2. `ers-docs` ディレクトリで以下を実行：
   ```bash
   npm ci
   npm run build
   ```

### ページが404エラーになる場合

1. リポジトリ設定の Pages で GitHub Actions が有効になっているか確認
2. ワークフローが正常に完了しているか確認
3. URLのパスが正しいか確認（大文字小文字も含めて）

## カスタムドメインの設定（オプション）

カスタムドメインを使用する場合：

1. Settings → Pages → Custom domain にドメインを入力
2. `ers-docs/static` ディレクトリに `CNAME` ファイルを作成し、ドメイン名を記載
3. DNS設定でGitHub Pagesへの CNAME レコードを追加