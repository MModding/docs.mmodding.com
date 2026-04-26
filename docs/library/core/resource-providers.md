---
title: Resource Providers
---

Since a few major updates now, Mojang started the Datafication process.
It means that more and more content types of the game can be configured through the use of Data Packs.

For modders, it meant removal of builtin registrations to these registries.
Now, it's done through the use of data generation.

Though, I, again, find that the process has a really confusing structure. As such, I made resource providers to handle
any "unnecessary" things for you, while cleaning up the codebase.

You will have to run the data generation task every time you change resources of these providers. After all, it works
by setting up all of that stuff for you.

Let's look at an example. I want to create a biome. Biomes are a Dynamic Registry. So, I need to use a
`ResourceProvider`.

But first, go to your `init` sub-package, and create a `MModdingExampleBiomes` class.
We'll create a key for the biome first.

```java
public static class MModdingExampleBiomes {

	public static final ResourceKey<Biome> EXAMPLE_BIOME = MModdingExampleMod.createKey(Registries.BIOME, "example_biome");
}
```

No need for this class to be provided as content to the manager. It's only for storing keys in a nice way, as we want
to separate them from our resource configuration.

Let's then create another sub-package, called `resource`, at the same level as `init`.
We'll store our resource configurations in there.

Let's create the `MModdingExampleBiomeResources` class:

```java
public class MModdingExampleBiomeResources {

	private static final Biome EXAMPLE_BIOME = new Biome.BiomeBuilder().build(); // Yeah that's just empty.

	public static void configure(AdvancedContainer mod, BootstrapContext<Biome> context) {
		context.register(MModdingExampleBiomes.EXAMPLE_BIOME, EXAMPLE_BIOME);
	}
}
```

Then, let's go back to our entrypoint, and put it in the manager:

```java
public class MModdingExampleMod implements ExtendedModInitializer {

	public void setupManager(ElementsManager manager) {
		// ...
		manager.resource(Registries.BIOME, MModdingExampleBiomeResources::configure);
	}

	// ...
}
```

You should now be able to run the data generation task and see the results output to `src/main/generated`.
No need to move these to the `resources` directory, Fabric Loom does that automatically for you at dev test and build.
