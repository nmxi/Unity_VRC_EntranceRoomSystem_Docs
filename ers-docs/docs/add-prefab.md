---
sidebar_position: 4
---

import ClickableImage from '@site/src/components/ClickableImage';

# Prefabの配置

Entrance Room System（ERS）をプロジェクトに導入する最初のステップは、`EntranceRoomSystem.prefab` をシーンに配置することです。この Prefab には ERS を動作させるための根幹の機能が含まれており、必ずシーンに1つ配置する必要があります。

## EntranceRoomSystem.prefabの配置

`EntranceRoomSystem.prefab` は以下の場所にあります：

```
Assets/mikinel/EntranceRoomSystem/EntranceRoomSystem.prefab
```

<ClickableImage src="/img/ers-prefab-in-scene.png" alt="EntranceRoomSystemフォルダ内のPrefabの場所" />

:::caution 注意
シーン内に複数の `EntranceRoomSystem.prefab` は配置しないでください。
:::

## スポーン位置等の調整

`EntranceRoomSystem.prefab` をシーンに配置したら、入室時の待機ルームやメインエリアへの転送地点となるオブジェクトの位置を合わせて調整します。

### 1. ERSFirstSpawnRoomオブジェクトの位置調整

`EntranceRoomSystem` オブジェクトの子階層にある `ERSFirstSpawnRoom` は、ワールド入室直後にプレイヤーが転送される待機ルームです。メインエリアから見えない位置に移動し、プレイヤーから直接視認できないようにします。

<ClickableImage src="/img/ers-first-spawn-room.png" alt="ERSFirstSpawnRoom 配置例" />

:::caution 注意
- `VRC Scene Descriptor` に設定されている `Respawn Height Y`（強制的にリスポーンされる Y 座標）以下に配置しないでください
- 原点から極端に離れた場所（例: `X=10,000`）への配置は避けることを推奨します。メインエリアの地中やカメラに映らない程度に離れた場所への配置がおすすめです（精度の限界による描画の乱れが発生します）
:::

### 2. ERSSpawnPointData_MainAreaオブジェクトの位置調整

同じく子階層にある `ERSSpawnPointData_MainArea` をワールドのメインエリアのスポーン地点（エントランスルームからの転送先）に配置します。プレイヤーが同意後に移動を開始させたい位置に合わせて調整してください。

<ClickableImage src="/img/ers-main-area-spawn-point.png" alt="ERSSpawnPointData_MainArea 配置例" />
