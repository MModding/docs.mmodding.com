---
title: Processor Catalog
---

::: warning
Be sure to have read [this previous page](./handlers.md) properly to have the required context.
:::

As we have now listed the available data handlers, let's talk about the processors.

Before anything else, some of the processors you could create, that are not present in the defaults,
could become standardized if you wish to provide them through the library. It's something I am promoting,
as it's making the library more convenient. Contributions are open, so do not be afraid to help! We thank you
in advance.
It does not apply to all processors though, if you're making one for a very specific case, you should keep it in your
own mod codebase.

Now, let's list the available processors of the library.

## Translation Processors

The translation processor you'll spam the most is `DefaultLangProcessors.CLASSIC`. This one turns every `upper_case`
kind of naming to a translation output formatted as `Upper Case`.

This one has two variants, for two specific elements of the game (and it might get more if I catch other exceptions
to the rule inside the game):
- `DefaultLangProcessors.ORE`, which will turn `diamond_block` and `super_nuclear_block` to `Block of Diamond` and
`Block of Super Nuclear`.
- `DefaultLangProcessors.CHEST_BOAT`, which will turn `acacia_chest_boat` to `Acacia Boat with Chest`.

## Block Model Processors

That's probably the most inflating default processor class you'll find inside the library.
The class if `DefaultBlockModelProcessing`, which I highly recommend to take a look at if
it contains what you need before creating your own one. I will not detail which ones are inside,
as it would be hard to keep it up to date: check the Javadocs of the class by yourself.

## Block Loot Processors

`DefaultBlockLootProcessors` is containing the default processors for block looting, and it has `SIMPLE` and
`SILK_TOUCH`, which are pretty much self-explanatory. In a more general way, looking at the default processors class
of the data process handler you are using will most likely be always enough to understand which processors are given
through the library.

As for now, that's all. As I said earlier, it's very likely to increase, as of people using the library (including
the MModding developers) will be increasing the amount of default processors when adding more content to their mods.