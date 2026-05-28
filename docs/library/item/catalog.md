---
title: Item Catalog
---

The library provides multiple inheritors of the `Item` class, for various usages.
Some are abstracted, and needs you to implement them before using them. Others do not.

| Class                   | Description                                                                                                                                                            |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AdvancedBowItem`       | An extension of `BowItem` which enables the use of other arrow items than the vanilla ones.                                                                            |
| `FluidInteractableItem` | An item which takes a `FluidInteractableItem$FluidPickup` instance (which is a functionnal interface), defining how the item should act towards a fluid pickup action. |
| `ItemAcceptingStacks`   | An abstract class which allows defining behavior of your item when clicked upon on with other item stacks (those source interacting stacks can be filtered).           |
| `SimpleFishingRodItem`  | A simple variant of `SimpleFishingRodItem` to create modded ones which will not have rendering issues.                                                                 |
