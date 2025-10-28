---
sidebar_position: 2.3
---

import ClickableImage from '@site/src/components/ClickableImage';

# スポーン位置等の調整

`EntranceRoomSystem.prefab` をシーンに配置したあとは、エントランスルームで使用する各オブジェクトの位置を調整します。

- `ERSFirstSpawnRoom` オブジェクト — ワールド入室直後にプレイヤーが転送される待機ルーム
- `ERSSpawnPointData_MainArea` オブジェクト — エントランスルームの次に転送されるメインエリアのスポーン地点

## ERSFirstSpawnRoomオブジェクトの位置の調整

`EntranceRoomSystem` オブジェクトの子階層にある `ERSFirstSpawnRoom` は、ワールド入室直後にプレイヤーが転送される待機ルームです。メインエリアから見えない位置に移動し、プレイヤーから直接視認できないようにします。

<ClickableImage src="/img/ers-first-spawn-room.png" alt="ERSFirstSpawnRoom 配置例" />

:::caution 注意
- `VRC Scene Descriptor` に設定されている `Respawn Height Y`（強制的にリスポーンされる Y 座標）以下に配置しないでください
- 原点から極端に離れた場所（例: `X=10,000`）への配置は避けることを推奨します。メインエリアの地中やカメラに映らない程度に離れた場所への配置がおすすめです（精度の限界による描画の乱れが発生します）
:::

## ERSSpawnPointData_MainAreaオブジェクトの位置の調整

2で配置した `EntranceRoomSystem` オブジェクトの子階層にある `ERSSpawnPointData_MainArea` をワールドのメインエリアのスポーン地点（エントランスルームからの転送先）に配置します。

<ClickableImage src="/img/ers-main-area-spawn-point.png" alt="ERSSpawnPointData_MainArea 配置例" />
