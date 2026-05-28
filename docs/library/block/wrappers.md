---
title: Block Wrappers
---

Making block sets is very error-prone when making the references or setting up similar properties.

As such, the library provides two wrappers for block instances, which are able to hold and configure a bunch of
similar blocks at the same time.

# The `BlockRelatives` Wrapper

This wrapper is expanding the `BlockFamily` vanilla concept, by also stacking the runtime instances, not just for
data generation.

You can create (and register) one through `BlockRelatives#register`. Let's detail what parameters it takes:
- An `Identifier`, which every block of the set will be based on. In example: `minecraft:acacia`.
- A `BlockSetType`, to inherit properties from.
- A `BlockBehavior.Properties` instance, which will be a shared properties base across every block of the set.
- An (optional) `String` which will be the suffix applied to the main block of the set.
- A `BlockFactory` instance, which would be the one used by the main block of the set.

After this initial registration, you will be able to chain uses of the non-static `BlockRelatives#register` method,
taking a block family variant and a block factory, to create other instances of the block set.

To make things even easier, the library provides `BlockRelatives#registerPlanks` and `BlockRelatives#registerStone`
static methods, which fill blocks of the respective set types automatically.

# The `BlockHeap` Wrapper

This wrapper aims to help you to create a bunch of similar block instances at the same time.

Let explain the way it works. Let's say I want to create some color variants of a block, which is an instance of
`SuperCoolBlock`. As such, we'll call **constructors** the strings `["red", "green", "blue"]`, which are
the colors we want to use to configure the held blocks by the block heap.

The block heap will use these constructors to generate the identifiers of the held block instances, and same with their
properties.

As such, in our example, it would look like this:

```java
BlockHeap.register(
	SuperCoolBlock::new,
	constructor -> constructor + "_super_cool",
	BlockHeapUtil.mapForColors(() -> BlockBehavior.Properties.ofFullCopy(Blocks.STONE)),
	MModdingExampleMod.namespace(),
	"red", "green", "blue"
);
```

As you can see, we also are using utilities from `BlockHeapUtil`. You might like some methods available in there.