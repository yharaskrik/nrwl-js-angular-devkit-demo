import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import {chain, externalSchematic} from "@angular-devkit/schematics";

export default function (schema: any) {
  return (tree) => {
    console.log('calling external schematic')
    return chain([
      externalSchematic('@nrwl/js', 'lib', {compiler: 'swc', name: schema.name})
    ])
  }
}
