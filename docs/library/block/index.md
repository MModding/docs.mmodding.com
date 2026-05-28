---
title: Creating and Registering Blocks
---

Let's go back to our mod initializer shenanigans.

Let's create an `ExampleModBlocks` class, with, once again, static utility methods you may like to use:

```java
public class ExampleBlockItems {

	private static Block register(String path, BlockBehaviour.Properties properties) {
		return register(path, Block::new, properties);
	}

	private static <T extends Block> Block register(String path, BlockFactory<T> factory, BlockBehaviour.Properties properties) {
		return Blocks.register(MModdingExampleMod.createKey(Registries.BLOCK, path), factory::make, properties);
	}

	public static void register(AdvancedContainer mod) {}
}
```

You can (should) put `manager.content(ExampleBlockItems::register);` inside your `ElementsManager#content` method.

Now, let's make a simple block:

```java
public class ExampleModBlocks {

	public static final Block EXAMPLE_ITEM = register("example_block", BlockBehavior.Properties.ofFullCopy(Blocks.STONE)).registerItem();

	// ...
}
```

The `#registerItem` method will automatically create and register an associated block item for your block.
It can optionally take item properties, an item factory, and a runtime object tweaker.

You should once again be able to access your block (and its item) through the game dev instance, and once again
you can configure it by setting up its properties or/and changing its block factory.

Asset handling once again can be handled through data generation.