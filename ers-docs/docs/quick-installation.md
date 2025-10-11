---
sidebar_position: 3
---

import ClickableImage from '@site/src/components/ClickableImage';

# クイックインストール

VGC2を最速で導入するための手順です。このガイドでは、基本的な音声グループ分け機能のみをセットアップします。

## 導入手順

### 1. パッケージのインポート

1. [Booth](https://nmxi.booth.pm/)からVGC2パッケージをダウンロード
2. UnityプロジェクトでAssets > Import Package > Custom Packageを選択
3. ダウンロードしたunitypackageを選択してインポート

<ClickableImage src="/img/getting-started--package-import.png" alt="パッケージのインポート" />

### 2. VGC2 Prefabの配置

`Assets/mikinel/VoiceGroupControl2/VoiceGroupControl2.prefab`をシーンに配置します。

<ClickableImage src="/img/add-prefab--scene-placement.png" alt="VGC2 Prefabの配置" />

:::caution 注意
VoiceGroupControl2.prefabはシーンに1つだけ配置してください。
:::

### 3. VGCGroupAreaの追加

VGCManagerコンポーネントの「VGCGroupAreaを追加」ボタンをクリックして、GroupAreaを必要な数だけ追加します。

<ClickableImage src="/img/add-vgcgrouparea--add-button.png" alt="VGCGroupAreaの追加" />

### 4. GroupAreaの設定

各GroupAreaに対して以下を設定します：

1. **位置とサイズ**: シーンビューでギズモを使って調整
2. **Group ID**: IDの設定
3. **Group Name（任意）**: RoomA、RoomBなど分かりやすい名前

<ClickableImage src="/img/add-vgcgrouparea--groupid-setting.png" alt="GroupAreaの設定" />

GroupAreaの配置が完了すると、以下のような状態になります：

<ClickableImage src="/img/add-vgcgrouparea--hero-image.png" alt="GroupAreaの配置完了" />

### 5. Configuratorで音量設定

シーンに配置したVoiceGroupControl2のオブジェクトを選択し、インスペクター上に表示される「VGC2 Configuratorを開く」ボタンをクリックしてください。

<ClickableImage src="/img/group-volume-settings--open-configurator.png" alt="Configuratorを開く" />

Configuratorが開いたら、グループ間の音量を設定します。

<ClickableImage src="/img/group-volume-settings--configurator.png" alt="VGC2 Configurator" />

設定が完了したら、必ず「設定を適用」ボタンをクリックしてください。

:::caution 重要
設定を適用しないとワールドのアップロードが失敗します。
:::

### 6. ワールドのアップロード