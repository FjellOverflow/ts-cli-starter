# ts-cli-starter

A minimal starter for a CLI written with TypeScript.

## Development

### Requirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- [VSCode](https://code.visualstudio.com/download)

- [pnpm](https://pnpm.io/installation)

### Installation

```sh
git clone https://github.com/FjellOverflow/ts-cli-starter.git
cd ts-cli-start
pnpm i
```

In VSCode, go to ***Extensions***, type `@recommended` and install recommended extensions.

### Commands

Called with `pnpm run <command>`

| command     | effect                    |
|-------------|---------------------------|
| lint        | lints `src`               |
| typecheck   | typechecks `src`          |
| build       | compiles `src` to `lib`   |
| dev         | compiles and calls CLI    |
| update-deps | auto-updates dependencies |

### package.json

- `main`: `lib/index.js`

  entrypoint to import all exported members
- `types`: `lib/index.d.ts`

  entrypoint to import types in TypeScript projects
- `bin`: `{
    "ts-cli-starter": "lib/cli.js"
  }`

  when installed, package can be called with `ts-cli-starter` on command line

## Usage

Clone and modify this template, compile (and publish) as npm package. Replace `ts-cli-starter` with your package/binary name.

### Install and use globally
```sh
# install
pnpm i -g ts-cli-starter
# call binary
ts-cli-starter test
```

### Install in project

Add to project (`package.json` must already be present).
```sh
cd myProject
pnpm i ts-cli-starter
```

In code, import members.

```ts
import { ExampleType, exampleFunction } from 'ts-cli-starter'

// use in code
```

Add as npm scripts to call binary.
```json
{
  // ...

  "scripts": {
    "dev": "ts-cli-starter dev",
    "build": "ts-cli-starter build --prod"
  }
}
```
