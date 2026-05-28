---
title: Block Catalog
---

The library provides multiple inheritors of the `Block` class, for various usages.
Some are abstracted, and needs you to implement them before using them. Others do not.

| Class                          | Description                                                                                                                                                                                                                                 |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AdvancedAnvilBlock`           | A extension of `AnvilBlock` which allows for more configuration of anvil properties.                                                                                                                                                        |
| `AdvancedLeavesBlock`          | An extension of `LeavesBlock` which allows to directly configure optional tints and that can be reimplemented to customize the max length between leaves before they get start to disappear.                                                |
| `DoubleCropBlock`              | An abstract implementation to create double crop blocks.                                                                                                                                                                                    |
| `HorizontalFacingCarpetBlock`  | A carpet with can be rotated horizontally.                                                                                                                                                                                                  |
| `LayeredBlock`                 | A block that can be layered (like snow).                                                                                                                                                                                                    |
| `LootingPropertiesEntityBlock` | An extension of `BaseEntityBlock` to preserve block entity data when breaking the block.                                                                                                                                                    |
| `SimpleBedBlock`               | An extension of `BedBlock` which inverts the horizontal facing direction of the bed, to match the standard of horizontal facing blocks, to have models in the same direction than other horizontal facing blocks.                           |
| `SimpleHorizontalFacingBlock`  | An very simple implementation of `HorizontalDirectionalBlock`.                                                                                                                                                                              |
| `SimpleSugarCaneBlock`         | A very simple extension of `SugarCaneBlock` which allows changing the accepted floors and fluids.                                                                                                                                           |
| `UpsideSensitiveBlock`         | An upside sensitive block is a block that will have an `influence` block state property depending on the detected above block. An illustrative example is that it would work in a similar way than the vanilla grass block with snow above. |
