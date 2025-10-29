---
title: エントランスルームの演出作成
---

import ClickableImage from '@site/src/components/ClickableImage';

ERSのメインエリアに移動するトリガーの発火時に、アニメータのトリガー発火、メインエリアへの転送の遅延設定が可能です。これらの仕組みを活用することで、エントランスルーム内での入場演出を作成することが可能になります。

<ClickableImage src="/img/entrance-room-performance-sample.png" alt="エントランスルームの演出例" />
<p style={{ textAlign: 'center' }}>ERSEntranceRoom_Sample3.prefabのパーティクル演出の例</p>

## インタラクト時にアニメーションのトリガーを発火する

ERSInteractAgreementAccessControllerコンポーネントは`同意時アニメーションのトリガーを発火`というパラメータがあります。これにチェックを入れることで、アニメーターの設定UIが表示されます。
- 対象のAnimator : パラメータの発火を行う対象のAnimator
- トリガー名 : Animatorに予め設定されたトリガーパラメータ名

<ClickableImage src="/img/interact-event-to-invoke-animator-trigger.png" alt="アニメーションのトリガー設定" />

トリガーが発火したら、何かしらの演出を行うためのAnimatorのサンプルです。

<ClickableImage src="/img/sample-animator.png" alt="演出用アニメーターのサンプル" />

`Invoke`という名前のトリガーを受け取ったら、アニメーションが切り替わり、演出が始まるといった実装が可能です。
