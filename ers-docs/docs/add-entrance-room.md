---
sidebar_position: 5
---

import ClickableImage from '@site/src/components/ClickableImage';

# エントランスルームの配置

エントランスルームは、1プレイヤーにつき1部屋ずつ割り当てられる個別のエリアです。イベントの注意書きを表示したり、演出を仕込んだりすることで、入場前の準備や世界観づくりに活用できます。

エントランスルームをシーンに追加する手順は2通りあります。
1. サンプルのエントランスルームを使用する
2. カスタムのエントランスルームを使用する（<span style={{ color: '#d9534f' }}>自由にカスタムできるが難易度高め</span>）

まず最小限にギミックを動作させる場合は、サンプルのエントランスルームを使用することを推奨します。

## 1.サンプルのエントランスルームを使用する場合

`Assets/mikinel/EntranceRoomSystem/Prefabs` ディレクトリには、予め用意されたエントランスルームの完成形サンプルが4種類含まれています。サンプルのエントランスルームの Prefab をシーンに配置することで、細かな設定をすることなく、EntranceRoomSystem を動作させることができるようになります。

### 4種のセットアップ済みエントランスルームPrefab

<div className="row sample-room-gallery">
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/ers-room-sample-1.png" alt="ERSEntranceRoom Sample1" />
    <p className="sample-room-gallery__caption"><strong>Sample1 prefab</strong><br />必要最低限の灰色の部屋</p>
  </div>
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/ers-room-sample-2.png" alt="ERSEntranceRoom Sample2" />
    <p className="sample-room-gallery__caption"><strong>Sample2 prefab</strong><br />全体が暗闇に包まれた空間</p>
  </div>
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/ers-room-sample-3.png" alt="ERSEntranceRoom Sample3" />
    <p className="sample-room-gallery__caption"><strong>Sample3 prefab</strong><br />浮遊する同意用のキューブと<br />パーティクルで演出された部屋</p>
  </div>
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/ers-room-sample-4.png" alt="ERSEntranceRoom Sample4" />
    <p className="sample-room-gallery__caption"><strong>Sample4 prefab</strong><br />扉から進む演出の<br />ライティングが施された部屋<br />（ライトベイクが必要です）</p>
  </div>
</div>

<ClickableImage src="/img/ers-entrance-room-sample-prefabs.png" alt="ERSEntranceRoom サンプルPrefab一覧" />
<p style={{ textAlign: 'center' }}>Assets/mikinel/EntranceRoomSystem/Prefabsディレクトリ</p>
### エントランスルームPrefabの追加
<ClickableImage src="/img/sample-entrance-room-add.png" alt="Sample1のPrefabをシーンに追加する方法" />
<p style={{ textAlign: 'center' }}>サンプルで用意されたエントランスルームのPrefabをシーン上に配置する様子</p>

:::caution 注意
手順3で移動した `ERSFirstSpawnRoom` と<span style={{ color: 'red' }}>重ならない位置</span>に配置してください。重なると待機ルームとメインエリアが同じ場所に生成され、正しく機能しません。
:::

<ClickableImage src="/img/first-room-entrance-room-overlap.png" alt="ERSFirstSpawnRoom と ERSEntranceRoom が重なっている例（NG）" />
<p style={{ textAlign: 'center' }}>2つのオブジェクトが重なってしまっているダメな例</p>

### 注意書きの文面の編集

シーンに配置したサンプルのエントランスルームは、子要素に含まれる Text コンポーネント内の文字列を編集することで、文章をカスタムすることができます。

<ClickableImage src="/img/custom-sample-entrance-room-text.png" alt="サンプルエントランスルームのテキスト編集例" />

## 2.カスタムのエントランスルームを使用する場合

独自のエントランスルームを作成したい場合は、応用項目内の[エントランスルームのカスタム](custom-entrance-room.md)のページをご覧ください。
