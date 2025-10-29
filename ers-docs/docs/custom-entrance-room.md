---
sidebar_position: 6
title: エントランスルームのカスタム
---

## 1.空のGameObjectの作成

シーン上に新規GameObjectを追加します。Hierarchyの空白を右クリック→Create Emptyを選択します。GameObjectは適宜わかり易い名前に変えておきます。

![Hierarchyで空のGameObjectを作成している様子](/img/create-empty-gameobject.gif)

## 2.ERSEntranceRoomコンポーネントの追加

1で作成した空のGameObjectにERSEntranceRoomコンポーネントを追加します。

![ERSEntranceRoomコンポーネントを追加している様子](/img/add-entrance-room-component.gif)

## 3.ERSEntranceRoomオブジェクトの位置調整

メインエリアから見えない位置に移動しておきます。画像ではY=1100に設定しています。

![ERSEntranceRoomの位置を調整している様子](/img/move-custom-entrance-room-root.png)

:::caution
VRC Scene Descriptor に設定されている Respawn Height Y（強制的にリスポーンされる Y 座標）以下に配置しないでください。原点から極端に離れた場所（例: X=10,000）への配置は避けることを推奨します。メインエリアの地中やカメラに映らない程度に離れた場所への配置がおすすめです（精度の限界による描画の乱れが発生します）。
:::

## 4.部屋の3Dモデルデータの追加とコライダーの設置

1で作成したオブジェクトの子階層に部屋のモデルを追加します。ここにはお好みのメッシュデータを配置してください。また、床や壁が抜けないように忘れずにコライダーを設置します。(画像ではシンプルな反転した箱のメッシュを配置しています。複雑な形状のメッシュの場合、コライダーはその形に沿ってコライダー用オブジェクトなどを追加し、対応する必要があります。)

![部屋のメッシュとコライダーを追加している様子](/img/add-custom-entrance-room-mesh.png)

## 5.スポーン地点の設定

エントランスルームのスポーン地点を決めます。1で作成したオブジェクトの子階層に`Assets/mikinel/EntranceRoomSystem/Prefabs/_Internal/ERSSpawnPointData.prefab`を追加し、位置を任意の地点に設定します。

![スポーンポイントデータを配置している様子](/img/add-spawn-point-data-prefab.png)

## 6.AccessControllerの作成

1で作成したオブジェクトの子階層に空のGameObjectを作成します。名前はAccessControllerにしました。オブジェクト追加後、ERSInteractAgreementAccessControllerコンポーネントを追加します。このコンポーネントは"特定のオブジェクトへのインタラクトを、メインエリアに転送するトリガーにする"機能を持ちます。

![AccessControllerを追加している様子](/img/add-access-controller-component.png)

## 7.インタラクト用のオブジェクトの追加

インタラクト可能なオブジェクトを作成します。ここでは単純なCubeオブジェクトを追加しました。コライダーコンポーネントを追加し、Is Triggerは有効にしておきます。その後、ERSInteractToCustomEventコンポーネントを追加します。
- Interaction Text : 手を近づけると表示されるテキスト
- Proximity : 手を近づけると反応する距離（特に理由がない場合0.1m程度がおすすめです）

![インタラクト用キューブを追加している様子](/img/add-interaction-cube.png)

:::caution
必ずERSInteractToCustomEventコンポーネントはコライダーコンポーネントの追加されているオブジェクト内に追加してください。
:::

## 8.ERSInteractToCustomEventコンポーネントの参照設定

6で追加したERSInteractAgreementAccessControllerコンポーネントに、7で追加したERSInteractToCustomEventコンポーネントを設定します。

![ERSInteractAgreementAccessControllerにERSInteractToCustomEventを設定している様子](/img/set-field-interact-to-event-component.gif)

## 9.ERSEntranceRoomコンポーネントの参照設定

1で作成したオブジェクトを選択し、ERSEntranceRoomコンポーネントの以下フィールドに、4~8の手順で作成したものを全て設定します。
- Entrance Room Root : 4で作成した部屋のモデルデータのルートオブジェクト
- Spawn Point Data : 5で作成したスポーン地点の設定
- Access Controller : 6で作成したAccessController

![ERSEntranceRoomコンポーネントに各オブジェクトを設定している様子](/img/set-custom-entrance-room-fields.gif)

また、部屋同士が干渉する場合はEntrance Room Paddingの値を調整してください。

![Entrance Room Paddingを調整している様子](/img/adjust-entrance-room-padding.gif)

## 10.動作確認

完成です。動作チェックを行います。

![カスタムエントランスルームの動作を確認している様子](/img/check-custom-entrance-room.gif)
