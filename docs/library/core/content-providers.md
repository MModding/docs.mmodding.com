---
title: Content Providers
---

The best thing to understand what are these providers is to look at nice example.

Do you like blocks? I know you do.

Let's create a class I would name `MModdingExampleBlocks` here, but you can name it however you want.
Just don't forget to also change this reference at every place I use it in the code.

```java
public class MModdingExampleBlocks {

	public static void register(AdvancedMod mod) {
	}
}
```

That class will contain **content**. Then we must **provide**. You know what that means?
~~fish~~ Content providers!

Whereas you can name `MModdingExampleBlocks#register` (both the class and the method) however you want, the method
must be public, static, return nothing and must pass an `AdvancedMod` object as the unique argument.

Let's give it to our manager in the initializer!

```java
public class MModdingExampleMod implements ExtendedModInitializer {

	public void setupManager(ElementsManager manager) {
		manager.content(MModdingExampleBlocks::register);
	}

	// ...
}
```

You might think, where are we using `ContentProvider`? Well, actually, `MModdingExampleBlocks::register` is a
`ContentProvider` object. This is because `ContentProvider` is a [functional interface](https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html).
If you do not know what is a function interface yet, do not worry. You're coding in java. ~~They will beat your ass up.~~ You'll end up understanding them.

Let's create a very simple `Block` and its resource key.

```java
public class MModdingExampleBlocks {

	public static final ResourceKey<Block> EXAMPLE_BLOCK_KEY = MModdingExampleMod.createKey(Registries.BLOCK, "example_block");

	public static final Block EXAMPLE_BLOCK = new Block(BlockBehavior.Properties.of().setId(EXAMPLE_BLOCK_KEY));

	public static void register(AdvancedContainer mod) {
	    mod.register(BuiltinRegistries.BLOCK, "example_block", EXAMPLE_BLOCK);
	}
}
```

If you followed every step correctly, the content is provided when you launch the Development Minecraft Instance.
You should have your very archaic simple block in game!