---
sidebar_position: 3
---

# クイックインストール

Entrance Room System（ERS）を短時間で導入するためのガイドです。ワールド入室後にプレイヤーを待機ルームへ案内し、注意事項への同意後にメインエリアへ移動させる基本フローを構築します。

## 導入手順

### 1. パッケージのインポート

1. [Booth](https://nmxi.booth.pm/)にある ERS の販売ページへアクセスします。
2. 購入またはダウンロード後、取得した `EntranceRoomSystem` の unitypackage を用意します。
3. Unity を起動し、メニューから **Assets > Import Package > Custom Package** を選択します。
4. 先ほどの unitypackage を指定し、全ての項目にチェックが入っていることを確認して **Import** を実行します。

### 2. ERS Prefab の配置

`Assets/mikinel/EntranceRoomSystem/Prefabs` フォルダに含まれる `EntranceRoomSystem.prefab`（リリースにより名称が前後する場合があります）を、Scene ビューへドラッグ＆ドロップして追加します。

:::caution 注意
シーン内に複数の ERS Prefab が存在すると転送処理が競合します。1シーンにつき 1 つだけ配置してください。
:::
