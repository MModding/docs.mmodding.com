---
title: Resource Key Attachment
---

Previously named RegistryKeyAttachment before deobfuscation, **Resource Key Attachments** (RKAs) are a way to associate
objects present in a `Registry` (not a lite one) by associating their resource keys.

Their concept is highly inspired from the old RegsitryEntryAttachment (REAs) system from the old
Quilt Standard Libraries. The main difference is that RKAs works with the object keys, while REAs worked with
just the objects.

There are two types of them, for the two sorts of Registries you can encounter in Minecraft's codebase:

- `ResourceKeyAttachment`, made for Standard/Builtin Registries.
- `DynamicResourceKeyAttachment`, made for Dynamic Registries.

# `ResourceKeyAttachment`

You can create a simple RKA with `RegistryKeyAttachment#create(Registry)`. Just provide the registry object for the
RKA; vanilla ones can be found in the `BuiltinRegistries` class.

You'll then have three methods, `put`, `contains` and `get`, and every of them either takes the object to collect the
attachment from, or the resource key of the object directly.

# `DynamicResourceKeyAttachment`

For those, you can create them with `DynamicRegistryKeyAttachment#create(ResourceKey)`. The key it is asking for is
the registry's resource key; vanilla ones can be found in the `Registries` class.

You'll then have the same three methods name than the simple RKA, but, there's a thing; to put/check presence/get the
attachments from the object, you must also provide a `RegistryAccess`. For example, if you have access to a `Level`
object, you can find the `RegistryAccess` in `Level#registryAcces`.