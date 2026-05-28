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