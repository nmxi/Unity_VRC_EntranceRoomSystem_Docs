---
sidebar_position: 2
---

import ClickableImage from '@site/src/components/ClickableImage';

# はじめに

## ERSの動作フローと必要なオブジェクト

<ClickableImage src="/img/ers-behavior.png" alt="ERSの動作と必要なオブジェクト" />
<p style={{ textAlign: 'center' }}>ERSの基本的な動作フロー</p>

1. FirstSpawnRoom(暗闇の部屋)にスポーンしUdonの同期が完了するまで待機する(`ERSFirstSpawnRoomオブジェクト`)
2. Udonの同期完了後、個別の部屋(`エントランスルーム`)にテレポートする
3. オブジェクトインタラクトなどのイベント発火後メインのエリアにテレポートする(`ERSSpawnPointData_MainAreaオブジェクト`)

これらの必要なオブジェクトのセットアップを行っていきます。

## UnityプロジェクトにERSを導入

### 1. Boothからパッケージをダウンロード

1. [Booth](https://nmxi.booth.pm/)の販売ページにアクセス
2. ERS を購入または試用版をダウンロード
3. ダウンロードしたZIPファイルを解凍

### 2. UnityPackageのインポート

1. Unityプロジェクトを開く
2. メニューから **Assets > Import Package > Custom Package** を選択
3. 展開したunitypackage を選択
4. インポートダイアログですべてのファイルにチェックが入っていることを確認
5. **Import** ボタンをクリック

<ClickableImage src="/img/getting-started--package-import.png" alt="UnityPackageのインポート" />

もしTMP Importerのダイアログが表示された場合は、**Import TMP Essentials** を選択します。Import TMP Essentialsを選択したら、TMP Importerを閉じます。

<ClickableImage src="/img/getting-started--tmp-importer.png" alt="TMP Importerダイアログ" />

