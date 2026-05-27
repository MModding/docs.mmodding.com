---
title: Extended Data Generation Entrypoints
---

With Mojang putting more and more work into **datafication** (making stuff from the game's code registerable
and configurable from datapacks), Mojang itself is using since a few versions the **data generation** process.

This helps them (and by thus, us), to generate every JSON file we actually need through Java code. It's very
convenient as it is less error-prone, since it requires less work from humans.

As such, **Fabric API** provides a lot of stuff to setup data generation, and the **MModding Library** extends
data generation capabilities as much as possible to make it as much convenient as possible.

Let's talk about this. The library adds the `ExtendedDataGeneratorEntrypoint` class, explained below with an example:

```java
public class ExampleModDataGenerator implements ExtendedDataGeneratorEntrypoint {

	public void setupManager(DataManager manager) {}

	public void onInitializeDataGenerator(AdvancedMod mod, FabricDataGenerator generator, FabricDataGenerator.Pack pack) {}
}
```

This is our very base example implementation.

- `ExtendedDataGeneratorEntrypoint#setupManager` allows setting `ResourceProvider`s to [generate world registry
  json files](./resource-providers.md), and configuring [automated data generation](./automation.md).
- `ExtendedDataGeneratorEntrypoint#onInitializeDataGenerator` lets you provide [additional data providers](./data-providers.md) that do not
  work for automation, or that are not intended for world registry exportation.

These two are being detailed in their own respective pages.