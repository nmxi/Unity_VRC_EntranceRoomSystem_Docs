---
sidebar_position: 6
sidebar_label: コントロールパネルの追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# コントロールパネルの追加

VGC2のコントロールパネルを使用すると、プレイヤーが音声設定をリアルタイムで調整できます。

<ClickableImage src="/img/control-panel--hero.png" alt="コントロールパネル概要" />

## コントロールパネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs/VGCPanels` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="コントロールパネルプレハブの場所" />

2. `VGCControlPanel.prefab` を見つけます
3. シーン上に配置します

## コントロールパネルの操作

### パススルーモード
パススルーモードの有効、無効を切り替えます。

### デバッグモード
デバッグモードの有効、無効を切り替えます。デバッグモードを有効化することで、グループエリアの可視化、グループエリアの情報表示、プレイヤーの情報を頭の上に表示することができます。

<div style={{display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <ClickableImage src="/img/control-panel--debug-mode-disabled.png" alt="デバッグモード無効時" />
    <p style={{marginTop: '10px', fontSize: '14px', color: '#666'}}>デバッグモード無効時</p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <ClickableImage src="/img/control-panel--debug-mode-enabled.png" alt="デバッグモード有効時" />
    <p style={{marginTop: '10px', fontSize: '14px', color: '#666'}}>デバッグモード有効時</p>
  </div>
</div>

