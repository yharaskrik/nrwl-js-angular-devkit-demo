import {chain, Rule, schematic} from "@angular-devkit/schematics";

export default function (schema: any): Rule {
  return chain([
    schematic('create-util', {name: schema.name})
  ])
}
