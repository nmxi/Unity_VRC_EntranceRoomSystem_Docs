---
sidebar_position: 12
sidebar_label: 追加設定パネルの追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# 追加設定パネルの追加

VGC2の追加設定パネルを使用すると、より詳細な音声設定やカスタマイズが可能になります。

<ClickableImage src="/img/additional-settings-panel--hero.png" alt="追加設定パネル概要" />

## 追加設定パネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs/VGCPanels` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="追加設定パネルプレハブの場所" />

2. `VGCAdditionalSettingsPanel.prefab` を見つけます
3. シーン上に配置します

## 追加設定パネルの操作

:::caution 注意
特に理由がない場合は変更しないことを推奨します。
:::

### 音量ゲイン
通常時の音声のゲイン

### 標準最大可聴距離
通常時の声の完全減衰距離

### 拡声時最大可聴距離
拡声時の声の完全減衰距離

### 音量変化時間
音量制御時のフェード完了時間