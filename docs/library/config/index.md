---
title: Creating a Config for your Mod
---

Configurations are always useful for mods. There are many solutions to the "I want to manage a config" issue, as there
is a phenomenal amount of config libraries available.

As such, I made my own solution, with the `mmodding-config` module.

Let's create one!

# Configuration Specification

To create a configuration, you must first define how your configuration file will work.

Let's show an example:

```java
public class MModdingExampleMod {

	private static final ConfigSpec SPEC = ConfigSpec.create()
		.boolean("enable_april_fools_day", true)
		.category("launch_properties",
			spec -> spec.boolean("hello_world_message", true)
				.intValue("answer_to_the_universe", 42)
		)
		.list("mmodding_morons", Codec.STRING, ByteBufCodecs.STRING_UTF8, "mega", "aethyus", "aeramisu");
	
	// ...
}
```

The associated default config json file will then look like this:

```json
{
  "enable_april_fools_day": true,
  "launch_properties": {
    "hello_world_message": true,
    "answer_to_the_universe": 42
  },
  "mmodding_morons": [
    "mega",
    "aethyus",
    "aeramisu"
  ]
}
```

That's nice, the specification is done! But it's not yet usable, because you then need to create your configuration object.

# Full Configuration

The full configuration object will allow you to retrieve the content from the configuration and will have multiple properties.
Let's continue our example:

```java
public class MModdingExampleMod {

	// ...

	public static final Config = Config.builder("config.mmodding_example_mod", "mmodding_example_mod/common", SPEC)
		.withLevel(ConfigLevel.SCREEN_MODIFICATION)
		.withNetworkManagement(ConfigNetworkManagement.UPSTREAM_SERVER)
		.build(createId("main_config"));

	// ...
}
```

Let's debunk this code:

- `Config#builder` will allow you to create a `ConfigBuilder` object... for building configurations.
- `ConfigBuilder#withLevel` allows you to change the `ConfigLevel` setting, which indicates at which level the configuration's content is updated.
- `ConfigBuilder#withNetworkManagement` allows you to change the `ConfigNetworkManagement` setting, which indicates 
if the configuration is always managed locally, or if the server configuration takes priority on dedicated servers.
- `ConfigBuilder#build` then takes an identifier which will identify the configuration,
that you could then collect from the `Configs` class methods.