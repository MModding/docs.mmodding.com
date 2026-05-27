---
title: Default Data Handlers
---

::: warning
Be sure to have read [this previous page](./automation.md) properly to have the required context.
:::

I mentioned the `DefaultDataHandlers` earlier, but I never listed them. So, let's do that now.
Do you like Markdown tables? Oh, you don't? I don't care.

| Data Handler             | Kind    | Element Class    | Processor Class                    |
|:-------------------------|:--------|:-----------------|:-----------------------------------|
| `ITEM_MODELS`            | Process | `Item`           | `ItemModelProcessor`               |
| `BLOCK_MODELS`           | Process | `Block`          | `BlockModelProcessor`              |
| `BLOCK_LOOTS`            | Process | `Block`          | `BlockLootProcessor`               |
| `ENTITY_LOOTS`           | Process | `EntityType<?>`  | `EntityLootProcessor`              |
| `ITEM_LIKE_RECIPES`      | Process | `ItemLike`       | `RecipeProcessor`                  |
| `BLOCK_TAGS`             | Process | `Block`          | `ValueTagProcessor<Block>`         |
| `ITEM_TAGS`              | Process | `Item`           | `ValueTagProcessor<Item>`          |
| `FLUID_TAGS`             | Process | `Fluid`          | `ValueTagProcessor<Fluid>`         |
| `ENTITY_TYPE_TAGS`       | Process | `EntityType<?>`  | `ValueTagProcessor<EntityType<?>>` |
| `#getTagHandler`         | Process | `T`              | `KetTagProcessor<T>`               |
| `#getTranslationHandler` | Process | `T`              | `TranslationProcessor`             |
| `BLOCK_RELATIVES`        | Final   | `BlockRelatives` | X                                  |
| `WOOD_SETS`              | Final   | `WoodSet`        | X                                  |

Other ones might be added in the future.