---
title: Custom Block Properties
---

A `CustomBlockPropery` is, as the class name says, a custom block property that you can define.

It can then be set for your block through `BlockBehavior.Properties#custom`.

Let's look at an example:

```java
public class ExampleModBlockProperties {

	public static final CustomBlockProperty<String> SHOUT_MESSAGE = CustomBlockProperty.create(MModdingExampleMod.createId("shout_message"), String.class, "Archeon is delayed...");
}
```

You can then do `BlockBehavior.Properties.ofFullCopy(Blocks.STONE).custom(ExampleModBlockProperties.SHOUTH_MESSAGE, "I will eat the cupcakes!")`.

And to get back the setting, just give a `Block` instance to the `CustomBlockProperty#get` method,
alongside your property:

```java
String shouting = CustomBlockProperty.get(ExampleModBlocks.EXAMPLE_BLOCK, ExampleModBlockProperties.SHOUT_MESSAGE);
```