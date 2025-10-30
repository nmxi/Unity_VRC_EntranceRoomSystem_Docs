---
title: エントランスルームの演出作成
---

import ClickableImage from '@site/src/components/ClickableImage';

ERSのメインエリアに移動するトリガーの発火時に、Animatorのトリガー発火、メインエリアへの転送の遅延設定が可能です。これらの仕組みを活用することで、エントランスルーム内での入場演出を作成することが可能になります。

<ClickableImage src="/img/teleport-wait.png" alt="入場演出に関する設定パネルの例" />
<p style={{ textAlign: 'center' }}>Animatorのトリガー発火とメインエリア転送遅延の設定</p>

<ClickableImage src="/img/entrance-room-performance-sample.png" alt="エントランスルームの演出例" />
<p style={{ textAlign: 'center' }}>ERSEntranceRoom_Sample3.prefabはこれらの設定を活用し、パーティクル演出を行っている</p>

## インタラクト時にアニメーションのトリガーを発火する

ERSInteractAgreementAccessControllerコンポーネントは`同意時アニメーションのトリガーを発火`というパラメータがあります。これにチェックを入れることで、Animatorの設定UIが表示されます。
- 対象のAnimator : パラメータの発火を行う対象のAnimator
- トリガー名 : Animatorに予め設定されたトリガーパラメータ名

<ClickableImage src="/img/interact-event-to-invoke-animator-trigger.png" alt="アニメーションのトリガー設定" />

以下の画像は、トリガーが発火後、特定のアニメーションを再生するAnimatorのサンプルです。

<ClickableImage src="/img/sample-animator.png" alt="演出用Animatorのサンプル" />

`Invoke`という名前のトリガーを受け取ったら、アニメーションが切り替わり、演出が始まるといった実装が可能です。

この様に作成したAnimatorを対象のAnimatorに設定することで、インタラクト時にアニメーションの再生が可能になります。

## メインエリアへの転送を遅延

遅延時間を設定することでアニメーションの再生を待機し、アニメーションの再生完了と共にメインエリアへの転送が行われるようになります。

<ClickableImage src="/img/teleport-wait-setting-field.png" alt="遅延転送を設定したAnimatorの例" />
