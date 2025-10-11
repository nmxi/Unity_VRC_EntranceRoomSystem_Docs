---
sidebar_position: 5
---

import ClickableImage from '@site/src/components/ClickableImage';

# ワールドのアップロード

VGC2を導入したワールドをVRChatにアップロードする手順を説明します。

## アップロード前の確認事項

### 1. Configuratorの設定確認

ワールドをアップロードする前に、必ずConfiguratorで音量設定を適用しているか再度確認してください。

:::caution 重要
Configuratorで「設定を適用」をクリックしていない場合、ワールドのアップロードが失敗する、または正常にギミックが動作しない可能性があります。
:::

## 2. ワールドのアップロード

通常通りワールドのアップロードをVRChat SDKのBuildの項目から行います。

<ClickableImage src="/img/world-upload--vrchat-sdk-build.png" alt="VRChat SDKのBuild項目" />

## Build Errorが発生した場合

<ClickableImage src="/img/world-upload--build-error.png" alt="Build Error" />

もし、VGC2 Build Errorのダイアログが表示された場合はVGCの音量設定とグループエリアの設定に差がある可能性があります。再度「Configuratorを開く」ボタンからConfiguratorを開き、設定を見直し、適用し直してください。

:::tip ヒント
正しくワールドがアップロードできた場合は、ワールド内で動作確認を行ってください。  
正常に動作が確認できた場合、VGCの基本機能は正しくセットアップが完了しました。  
お疲れ様でした。
:::