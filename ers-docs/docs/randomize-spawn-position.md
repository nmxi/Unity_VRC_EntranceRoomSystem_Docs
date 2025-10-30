---
title: スポーン位置のランダム化
---

import ClickableImage from '@site/src/components/ClickableImage';

メインエリアのテレポート先は特定の範囲でランダムの位置に転送されてくるようにすることができます。この設定を行うことで複数人同時にメインエリアへテレポートされた場合でも、アバターの重なりを抑制することができます。

<ClickableImage src="/img/spawn-position-data-settings.png" alt="メインエリアのスポーン位置設定" />

- **Spawn Mode（スポーン時の位置設定）**
  - `Single` : 特定の地点にスポーン
  - `Random` : 特定の範囲にスポーン
- **Orientation Mode（スポーン時の回転設定）**
  - `Default` : `Spawn Point Data` のオブジェクトの向きに従う
  - `Align Player` : スポーン前のプレイヤーの向いている向きに従う
  - `Random` : ランダムに回転

<ClickableImage src="/img/spawn-position-data-random-sample.png" alt="スポーン範囲のGizmo表示" />
<p style={{ textAlign: 'center' }}>Spawn Modeが`Random`に設定されている時、シーンビューのGizmoでスポーンの範囲が表示されます</p>
