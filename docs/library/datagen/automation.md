---
title: "Automated Data Generation"
---

Configuring data generation for every runtime object individually is something that is very
unproductive: since we have access to code, let's make things more efficient.

That's what lead to the (mostly) Automated Data Generation system. Just configure it properly, and you'll love it.

Let's look at our subject for this documentation page: `DataManager#task`. There are multiple variants of those, but
we'll get to that later. Let us explain how this method works first.

# Configuring the Automation

Let's say I have a `ExampleModBlocks` class, that happens to contain static definition of `Block` objects.
It's something that is very likely to happen when you make a Minecraft mods.
Let there my blocks be in the blocks game!

From the point of view of data generation automation (that'll shorten to DGA for this doc page from now on),
we can call this `ExampleModBlocks` class a `source` class, as it is the source where DGA we get the block
references.

That's the first parameter of the `task` method. A `source` where to collect the objects from.

After getting these objects, you'll have to specify what you want to do with them. And here goes **Data Handlers**.

There are two types of them, that we'll explain separately.

## Final Data Handlers

Final Data Handlers are data handlers that are meant to process objects of a certain type, always in the
same exact way every time.

Two good examples of final data handlers would be inside the default `DefaultDataHandlers` class:
- `DefaultDataHandlers.BLOCK_RLEATIVES`: for generating block relative resources.
- `DefaultDataHandlers.WOOD_SETS`: for generating wood set resources.

It makes sense, since those handlers are making a lot of data providers automatically to cover everything
that needs to be generated in their each respective cases. If there is flexibility, then it comes from
the object instance instead of the data handler: that's the case for wood sets with the `WoodSetSettings` class.

## Data Process Handlers

Data Process Handlers are meant to be very more flexible. Their goal is simple: it associates `processors`
to collections of elements of the targeted type, before applying the processors to elements if the automated
data providers they are giving to the data generator.

It might not sound very obvious, so we'll make an example.

Let's come back to the `ExampleModBlocks` class, and let's assume I have dozens of `AnvilBlock` instances.
I want to apply the same model generation logic for every one of them; that's a very good case example where
DGA will save you a bunch of time and would enhance your codebase management.

Let's go back to our data generation entrypoint, inside the `#setupManager` method, and let's write this:

```
public class ExampleModDataGenerator implements ExtendedDataGeneratorEntrypoint {

	public void setupManager(DataManager manager) {
		manager.task(ExampleModBlocks.class, DefaultDataHandlers.BLOCK_MODELS, block -> block instanceof AnvilBlock, BlockModelGenerators::createAnvil);
	}

    // ...
}
```

If you now run your data generation task, every anvil in the ExampleModBlocks class will have their model generated.
Is it magical? Not really. Is it practical? Yes it is!

Let's explain what's happening:
- `ExampleModBlocks.class` is, as said a while ago, our source class to collect the elements from.
- `DefaultDataHandlers.BLOCK_MODELS` is the data process handler we are using here.
It also defines that:
  - You'll need to put a `Predicate<Block>` (or a `Set<Block>`, if you want to cherry-pick the elements) instance as the next argument.
  - You'll need to put a `BlockModelProcessor` instance as the last argument.
- `block -> block instanceof AnvilBlock` is, as said above, our predicate. It filters the collect elements to
only select the ones you actually want to process with the processor that you'll be setting.
- `BlockModelGenerators::createAnvil` is our processor. For the case of the `BLOCK_MODELS` default data handler,
the `BlockModelProcessor` is a functional interface with only a method taking a `BlockModelGenerators` instance
and a `Block` instance as parameters, and that returns nothing. The goal of it is, as you might have guessed,
to process the given `Block` instance with the help of the `BlockModelGenerators` instance. Here, in our example case,
since the `BlockModelGenerators#createAnvil` method only takes a `Block` instance as parameter, we were able to use
the Java Syntax Shortcut™ `BlockModelGenerators::createAnvil` to instantiate our block processor immediately. Convenient!

# Chaining the Automations

You might encounter cases where you'd like to handle every anvil model automatically, but then you'd want only
one or two to have their own model processing logic. Dang it! Let's just kill Mega for not thinking of this.

No I'm joking: that's where the chaining idea comes from. `DataManager` provides `DataManager#chain`, which
would only take the source class to retrieve the elements from, and the data processing handler, which would
result in giving you back a `DataManager$ChainManager`.

The chain manager then provides `DataManager$ChainManager#chain` which will ask for the remaining parameters you
didn't put before: the predicate (or selection if you like cherry-picking), and the processor.
And here it gets interesting: it gives you another chain manager. But this one, has previous processed entries
excluded for any newer filter you will apply.

So, if we come back to our example, you could first cherry-pick the super special anvil, and then chain
with the usual anvil block model processing.