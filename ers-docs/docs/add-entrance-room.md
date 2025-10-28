---
sidebar_position: 2.5
---

import ClickableImage from '@site/src/components/ClickableImage';

# エントランスルームの配置

エントランスルームは、1プレイヤーごとに1部屋が割り当てられる個別待機スペースです。イベントの注意書きを表示したり、演出を仕込んだりすることで、入場前の準備や世界観づくりに活用できます。

## サンプルPrefabからエントランスルームを配置

`Assets/mikinel/EntranceRoomSystem/Prefabs` ディレクトリには、予め用意されたエントランスルームの完成形サンプルが4種類含まれています。サンプルのエントランスルームの Prefab をシーンに配置することで、細かな設定をすることなく、EntranceRoomSystem を動作させることができるようになります。

<ClickableImage src="/img/ers-entrance-room-sample-prefabs.png" alt="ERSEntranceRoom サンプルPrefab一覧" />
<p style={{ textAlign: 'center' }}>サンプルのエントランスルームPrefab（4種）</p>

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

## エントランスルームをカスタムする場合

サンプルPrefabをベースに独自のエントランスルームを作成したい場合は、Prefabを複製してメッシュやマテリアル、UIテキスト、アニメーションなどを調整してください。詳細手順やカスタマイズ時の注意点は「[エントランスルームのカスタム](custom-entrance-room.md)」で解説しています。
