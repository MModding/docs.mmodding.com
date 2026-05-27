---
title: Resource Providers
---

The datafication process is sometime confusing. That's at least what I sometime think of it.
A lot of configurations steps are more like "configuring an implementation" that you should actually
not have to deal with, as it should be part of the implementation.

As such, resource providers are removing the requirement of configuring middle steps. Just make your stuff and
configure it, and that's all.

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

Then, let's go back to our data generator entrypoint, and put it in the manager:

```java
public class MModdingExampleModDataGenerator implements ExtendedDataGeneratorEntrypoint {

	public void setupManager(DataManager manager) {
		// ...
		manager.resource(Registries.BIOME, MModdingExampleBiomeResources::configure);
	}

	// ...
}
```

You should now be able to run the data generation task and see the results output to `src/main/generated`.
No need to move these to the `resources` directory, Fabric Loom does that automatically for you at dev test and build.
