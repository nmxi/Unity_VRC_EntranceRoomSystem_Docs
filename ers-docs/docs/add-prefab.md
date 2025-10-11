---
sidebar_position: 2
---

import ClickableImage from '@site/src/components/ClickableImage';

# Prefabの追加

VoiceGroupControl2をプロジェクトに導入する最初のステップは、Prefabの追加です。

## Prefabの場所

VGC2のメインPrefabは以下の場所にあります：

```
Assets/mikinel/VoiceGroupControl2/VoiceGroupControl2.prefab
```

<ClickableImage src="/img/add-prefab--project-folder-view.png" alt="VoiceGroupControl2フォルダ内のPrefabの場所" />

## Prefabをシーンに追加

`VoiceGroupControl2.prefab`をシーンに配置します。

配置したPrefabにはVGCManagerコンポーネントがあります。

<ClickableImage src="/img/add-prefab--scene-placement.png" alt="PrefabをHierarchyにドラッグ&ドロップ" />

:::caution 注意
- VoiceGroupControl2.prefabはシーンに1つだけ配置してください。2つ以上配置すると正常に動作しません。
- Prefab内のオブジェクトを削除したり、構造を変更したりしないでください。正常に動作しなくなる可能性があります。
:::