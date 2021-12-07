run `yarn nx workspace-schematic my-generator mylib` to get the error:

```
➜ yarn nx workspace-schematic my-generator mylib
yarn run v1.22.17
$ /nrwl-js-angular-devkit-demo/node_modules/.bin/nx workspace-schematic my-generator mylib
$ /nrwl-js-angular-devkit-demo/node_modules/.bin/tsc -p /nrwl-js-angular-devkit-demo/tools/tsconfig.generated.json
calling external schematic
NodePackageDoesNotSupportSchematics [Error]: Package "@nrwl/js" was found but does not support schematics.
    at NodeModulesEngineHost.resolve (/nrwl-js-angular-devkit-demo/node_modules/@angular-devkit/schematics/tools/node-module-engine-host.js:53:23)
    at NodeModulesEngineHost._resolveCollectionPath (/nrwl-js-angular-devkit-demo/node_modules/@angular-devkit/schematics/tools/node-module-engine-host.js:80:37)
    at NodeModulesEngineHost.createCollectionDescription (/nrwl-js-angular-devkit-demo/node_modules/@angular-devkit/schematics/tools/file-system-engine-host-base.js:118:27)
    at SchematicEngine._createCollectionDescription (/nrwl-js-angular-devkit-demo/node_modules/@angular-devkit/schematics/src/engine/engine.js:162:40)
    at SchematicEngine.createCollection (/nrwl-js-angular-devkit-demo/node_modules/@angular-devkit/schematics/src/engine/engine.js:155:43)
    at /nrwl-js-angular-devkit-demo/node_modules/@angular-devkit/schematics/src/rules/schematic.js:24:43
    at MergeMapSubscriber.project (/nrwl-js-angular-devkit-demo/node_modules/@angular-devkit/schematics/src/rules/call.js:75:24)
    at MergeMapSubscriber._tryNext (/nrwl-js-angular-devkit-demo/node_modules/rxjs/internal/operators/mergeMap.js:67:27)
    at MergeMapSubscriber._next (/nrwl-js-angular-devkit-demo/node_modules/rxjs/internal/operators/mergeMap.js:57:18)
    at MergeMapSubscriber.Subscriber.next (/nrwl-js-angular-devkit-demo/node_modules/rxjs/internal/Subscriber.js:66:18)
Package "@nrwl/js" was found but does not support schematics.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```
