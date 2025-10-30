---
sidebar_position: 3
---

import ClickableImage from '@site/src/components/ClickableImage';

# クイックインストール

Entrance Room System（ERS）を短時間で導入するためのガイドです。ワールド入室後にプレイヤーを待機ルームへ案内し、注意事項への同意後にメインエリアへ移動させる基本フローを構築します。

<ClickableImage src="/img/ers-quick-install-overview.png" alt="ERS クイックインストールの概要" />

<p style={{ textAlign: 'center' }}>クイックインストールで配置するエントランスルームの見た目</p>

## 導入手順

### 1. パッケージのインポート

1. [Booth](https://nmxi.booth.pm/)から `EntranceRoomSystem` の unitypackage をダウンロードします。
2. Unity プロジェクトで **Assets > Import Package > Custom Package** を選択します。
3. ダウンロードした unitypackage を指定してインポートします。

### 2. EntranceRoomSystem.prefab の配置

`Assets/mikinel/EntranceRoomSystem/EntranceRoomSystem.prefab` をシーンに配置します。

<ClickableImage src="/img/ers-prefab-in-scene.png" alt="EntranceRoomSystem Prefab 配置例" />

:::caution 注意
シーン内に複数の `EntranceRoomSystem.prefab` は配置しないでください。
:::

### 3. ERSFirstSpawnRoom オブジェクトの位置調整

2で配置した `EntranceRoomSystem` オブジェクトの子階層にある `ERSFirstSpawnRoom` をワールドのメインエリアから見えない位置に移動します。

<ClickableImage src="/img/ers-first-spawn-room.png" alt="ERSFirstSpawnRoom 配置例" />

:::caution 注意
・`VRC Scene Descriptor` に設定されている `Respawn Height Y`（強制的にリスポーンされる Y 座標）以下に配置しないでください  
・原点から極端に離れた場所（例: `X=10,000`）への配置は避けることを推奨します。メインエリアの地中やカメラに映らない程度に離れた場所への配置がおすすめです（精度の限界による描画の乱れが発生します）
:::

### 4. ERSSpawnPointData_MainArea オブジェクトの位置調整

2で配置した `EntranceRoomSystem` オブジェクトの子階層にある `ERSSpawnPointData_MainArea` をワールドのメインエリアのスポーン地点（エントランスルームからの転送先）に配置します。

<ClickableImage src="/img/ers-main-area-spawn-point.png" alt="ERSSpawnPointData_MainArea 配置例" />

### 5. ERSEntranceRoom オブジェクトの配置

シーン上にエントランスルームを配置します。このクイックインストールでは、同梱されている `ERSEntranceRoom_Sample1.prefab`（必要最低限の灰色の部屋）をシーンに追加し、手順3で移動したオブジェクトと同様にメインエリアから見えない位置へ配置します。

<ClickableImage src="/img/ers-entrance-room-sample.png" alt="ERSEntranceRoom 配置例" />

:::caution 注意
手順3で移動した `ERSFirstSpawnRoom` と<span style={{ color: 'red' }}>重ならない位置</span>に配置してください。重なると待機ルームとメインエリアが同じ場所に生成され、正しく機能しません。
:::

<ClickableImage src="/img/first-room-entrance-room-overlap.png" alt="ERSFirstSpawnRoom と ERSEntranceRoom が重なっている例（NG）" />
<p style={{ textAlign: 'center' }}>2つのオブジェクトが重なってしまっているダメな例</p>

:::caution 注意
・`VRC Scene Descriptor` に設定されている `Respawn Height Y`（強制的にリスポーンされる Y 座標）以下に配置しないでください  
・原点から極端に離れた場所（例: `X=10,000`）への配置は避けることを推奨します。メインエリアの地中やカメラに映らない程度に離れた場所への配置がおすすめです（精度の限界による描画の乱れが発生します）
:::

### 6. ワールドのアップロードと動作確認
VRChatランタイム上で動作を確認できたら、導入完了です。
