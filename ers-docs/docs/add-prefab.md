---
sidebar_position: 2
---

import ClickableImage from '@site/src/components/ClickableImage';

# Prefabの配置

Entrance Room System（ERS）をプロジェクトに導入する最初のステップは、`EntranceRoomSystem.prefab` をシーンに配置することです。この Prefab には ERS を動作させるための根幹の機能が含まれており、必ずシーンに1つ配置する必要があります。

## EntranceRoomSystem.prefabの配置

`EntranceRoomSystem.prefab` は以下の場所にあります：

```
Assets/mikinel/EntranceRoomSystem/EntranceRoomSystem.prefab
```

<ClickableImage src="/img/ers-prefab-in-scene.png" alt="EntranceRoomSystemフォルダ内のPrefabの場所" />

:::caution 注意
シーン内に複数の `EntranceRoomSystem.prefab` は配置しないでください。
:::
