---
title: Custom Item Properties
---

A `CustomItemPropery` is, as the class name says, a custom item property that you can define.

It can then be set for your item through `Item.Properties#custom`.

Let's look at an example:

```java
public class ExampleModItemProperties {

	public static final CustomItemProperty<Integer> AURA = CustomItemProperty.create(MModdingExampleMod.createId("aura"), Integer.class, 0);
}
```

You can then do `new Item.Properties().custom(ExampleModItemProperties.AURA, 10)`.

And to get back the setting, just give an `ItemLike` instance (either an `Item` instance or a `Block` instance),
to the `CustomItemProperty#get` method, alongside your property:

`int aura = CustomItemProperty.get(ExampleModItems.EXAMPLE_ITEM, ExampelModItemProperties.AURA);`