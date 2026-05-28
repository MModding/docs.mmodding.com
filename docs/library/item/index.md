---
title: Creating and Registering Items
---

Unleash your mod initializer and you elements manager!

Let's create an `ExampleModItems` class, with two static utility methods that you'll probably like to use:

```java
public class ExampleModItems {

	private static Item register(String path, Item.Properties properties) {
		return register(path, Item::new, properties);
	}

	private static Item register(String path, Function<Item.Properties, Item> factory, Item.Properties properties) {
		ResourceKey<Item> key = MModdingExampleMod.createKey(Registries.ITEM, path);
		return Items.registerItem(key, factory, properties);
	}

	public static void register(AdvancedContainer mod) {}
}
```

You can then put `manager.content(ExampleModItems::register);` inside your `ElementsManager#content` method.

Now, we are able to create and register an item:

```java
public class ExampleModItems {

	public static final Item EXAMPLE_ITEM = register("example_item", new Item.Properties());

	// ...
}
```

And, if you load the game dev instance, you should be able to give yourself your newly created item!
You can customize it by using a special item factory, or setting up its properties.

That's all we'll cover here. Applying models and item model data can be set through data generation,
which is covered later.