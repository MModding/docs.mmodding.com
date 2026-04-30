---
title: Configuration Element Types
---

<br>

# Default Configuration Element Types

The `ConfigSpec` object has an army of methods for default configuration element types. Let's enumerate them:

- `ConfigSpec#bool` which sets an `initial` boolean for a given `property`.
- `ConfigSpec#intValue` which sets an `initial` integer for a given `property`.
- `ConfigSpec#doubleValue` which sets an `initial` double floating point for a given `property`.
- `ConfigSpec#string` which sets an `initial` string for a given `property`.
- `ConfigSpec#identifier` which sets an `initial` identifier for a given `property`.
- `ConfigSpec#color` which sets an `initial` color for a given `property`.
- `ConfigSpec#pos` which sets an `initial` block position for a given `property`.
- `ConfigSpec#vec3` which sets an `initial` 3-dimensional vector for a given `property`.
- `ConfigSpec#intRange` which sets an `initial` integer for a range between a specified `start` (inclusive) and `end` (inclusive) for a given `property`.
- `ConfigSpec#doubleRange` which sets an `initial` double floating point for a range between a specified `start` (inclusive) and `end` (inclusive) for a given `property`.
- `ConfigSpec#enumValue` which sets an `initial` enumeration field for a given `property`.
- `ConfigSpec#list` which sets `initial` entries managed by specified `entryCodec` and `entryStreamCodec`, for a given `property`.
- `ConfigSpec#map`, which sets `initial` entries managed by specified `entryCodec`, `entryStreamCodec`, `valueCodec`, `valueStreamCodec`, for a given `property`.

# Custom Configuration Element Types

You are also able to provide your own configuration element types, thanks to the `ConfigSpec#element` method.

You will need to provide an `initial` value of your `T` type, a `Codec<T>` for file encoding and decoding purposes,
a `StreamCodec<T>` for networking purposes, and a `ConfigSchemaNode`.

Look at `ConfigSchemaNode#of` static methods to create them.

Nodes allow you to define a specified `Class<?>` value for the property, which allows to ensure type-safety for it.

You can also define a `Validation`, either `INHERITORS`, which accepts values inheriting from the type, or `STRICT`, which only allows the given type.

Lastly, you can define a `Context`, which can then be retrieved from the `ConfigSchema`, and which is immutable.
In example, it's used by int ranges and double ranges to store their boundaries. You can find example implementations
with the `IntRangeContext` and `DoubleRangeContext` classes.