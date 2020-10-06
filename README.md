# Example of module/nomodule pattern

This sample library contains ES2015 code plus a bunch of non-standard proposals.

We want to transpile and package the library and make it available in different
formats:

- UMD format for browsers
- ES modules format for node/modern packaging systems

Therefore, our Webpack configuration will output two different configuration
objects; both will output to the `dist/` folder.
