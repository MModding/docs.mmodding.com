---
title: Setup
---

To import the MModding Library, you will need to add three mavens to your `build.gradle` repository block:

- The Maven Central (used by the [Yumi Commons](https://github.com/YumiProject/yumi-commons) Dependency)
- The QuiltMC Maven (used by the [Quilt Parsers](https://github.com/QuiltMC/quilt-parsers) Dependency)
- JitPack (where you can find the MModding Library modules)

You would then have a repository block which looks like this:
```groovy
repositories {
    mavenCentral()
    maven {
		name = "QuiltMC"
		url = "https://maven.quiltmc.org/repository/release"
	}
	maven {
		name = "JitPack"
		url = "https://jitpack.io"
	}
}
```

And then, alongside Fabric API, you can the library in the dependency block:
```groovy
dependencies {
    // Previous stuff. (like FAPI)
    implementation "com.mmodding:mmodding-library:${mmodding_version}"
}
```

Which would then require a `mmodding_version` property to be set in your `gradle.properties` file.
You can find version numbers [here](https://github.com/MModding/mmodding-library/tags).