---
title: Lite Registries
---

Do you need to have something like a registry that does not need to be as complex as vanilla ones?
(No network synchronization, no registry keys, just identifiers and objects).

Well, then the `LiteRegistry` class might interest you. Lite Registries are very simple objects: they are working
through an identifier map, but you can use them for standard use of registries.

To create a `LiteRegistry`: use `LiteRegistry#create`.

And that's all.

::: danger
You can't register two entries with same identifiers, nor you can register the same entry twice in a Lite Registry.
:::

You can now make use of `LiteRegistry#register` and registry information methods to match your needs.