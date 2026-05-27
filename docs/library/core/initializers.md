---
title: Extended Mod Initializers
---

With the updates of Minecraft making the game more and more complex with a lot of new stuff, I never truly was
satisfied with the usual ways of structuring a mod's codebase.

The `ExtendedModInitializer` interface is an attempt at better mod code management.

It extends `ModInitializer`, and as such, acts like it in your `fabric.mod.json`'s entrypoints.

An empty `ExtendedModInitializer` setup looks like this:

```java
public class MModdingExampleMod implements ExtendedModInitializer {

	@Override
	public void setupManager(ElementsManager manager) {
	}

	@Override
	public void onInitialize(AdvancedContainer mod) {
	}        
}
```

Let's explain what's happening in there:

- `ExtendedModInitializer#setupManager(ElementsManager)` is the main management upgrade part. It is a sort of standard you will be
  using to make your initializations, registrations, etc...
- `ExtendedModInitializer#onInitialize(AdvancedContainer)` is an advanced version of
  `ModInitializer#onInitialize(ModContainer)`, which's last shouldn't be overridden in an extended mod initializer.
  It has the advantage of providing an `AdvancedContainer` directly, which is, as you can guess, an advanced version of
  a `ModContainer` object, providing a lot of utility methods for your mod, such as a logger and registration utils.

# Tips for your entrypoint class

Here are some utility methods you can put in your entrypoint right away, they will always match your needs:

```java
public class MModdingExampleMod implements ExtendedModInitializer {

	// ...

	public static String namespace() {
		return "mmodding_example_mod"; // Change this to match your mod's namespace/id!
	}

	public static Identifier createId(String path) {
		return Identifier.fromNamespaceAndPath(namespace(), path);
	}

	public static Identifier createTexture(String path) {
		return IdentifierUtil.texture(namespace(), path);
	}

	public static <T> ResourceKey<T> createKey(ResourceKey<? extends Registry<T>> registry, String path) {
		return ResourceKey.create(registry, createId(path));
	}
}
```

# ElementsManager

It is the object provided in `ExtendedModInitializer#ElementsManager`. Its purpose is to... manage your elements :).

An `ElementsManager` has three methods:

- `ElementsManager#content` allows you to put a `ContentProvider`. More details [here](./content-providers).
- `ElementsManager#ifMoreLoaded` allows you to put a `ContentProvider`, which would only be applied if the
  corresponding mod namespace is matched by Fabric Loader.
- `ElementsManager#resource` allows you to put a `ResourceProvider` for a specific Dynamic Registry. More details [here](../datagen/resource-providers.md).
