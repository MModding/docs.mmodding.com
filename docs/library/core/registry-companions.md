---
title: Registry Companions
---

Well, RKAs, that we talked about in the last documentation entry, are made to attach objects to resource keys of
objects present in Registries.

Registry Companions are an extension of RKAs. Instead of attaching objects, they straight up attach Lite Registries.

As they are extensions of RKAs, there are also two types of them, `RegistryCompanions` for Simple Registries, and
`DynamicRegistryCompanions` for Dynamic Registries.

Both of them have a static `create` method which allows you to create an object of the one you want.

You will also have access to three methods: `getOrCreateCompanion`, `hasCompanion`, `getCompanion`. Just like RKAs,
they either take the object (with the registry access if dynamic), or just the object key.

- `getOrCreateCompanion` will return the companion of an object key, which is a `LiteRegistry` instance, and will create
  on the way if it does not exist yet.
- `hasCompanion` will return a boolean indicating if a companion exists for a certain object key.
- `getCompanion` will return the companion of an object key, but will not create one if it does not exist.

Registry Companions are powering Custom Item Settings and Custom Block Settings, which are covered later in this
documentation.