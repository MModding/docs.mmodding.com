---
title: Additional Data Providers
---

The library also provides multiple data providers for convenient use cases. Let's enumerate them:

## `MModdingLanguageProvider`

This provider is a variant of `FabricLanguageProvider` with the ability to collide with other language providers.
The usual one provider from the Fabric API does not allow collision of multiple lang generators. Il you have two of
them, they'll compete and overwrite themselves. That's bad, especially when you automate lang file generation.

That's an issue which is being solved by that `MMododingLanguageProvider` extension.

## `MModdingRecipeProvider`

This provider is a variant of `FabricRecipeProvider`, that I just felt was more straightforward to manipulate.

## `BuiltinRegistryTagsProvider`

This provider (and its subclasses) are extensions/replacements of `FabricTagsProvider` and its subclasses.
Instead of taking a `ResourceKey<? extends Registry<?>>`, it just takes a `Registry<?>`, which means it is a special
case use for builtin registries. As such, you should use the usual `FabricTagsProvider` for world registry tags.

The special case of builtin registries is that, as they are linked to runtime objects, the alternative the library
provides enables using these runtime objects directly instead of their resource keys. It is way more convenient in
their case, as it helps to link the codebase together, putting more safety if you are changing references inside of
you codebase.