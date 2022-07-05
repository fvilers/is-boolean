# @fvilers/is-boolean

A TypeScript type guard that validates if the given value is a boolean

## Installation

```
npm install @fvilers/is-boolean
```

or

```
yarn add @fvilers/is-boolean
```

# ECMAScript module

Starting with version 2.0.0, this library will be published as an ECMAScript module.

## Usage

```ts
import { isBoolean } from "@fvilers/is-boolean";

const variable: any = true;

if (isBoolean(variable)) {
  // From here, variable is strongly typed as a boolean
  console.log("Variable is a boolean that returns", variable);
} else {
  console.log("Variable is not a boolean");
}
```

It will output:

```
Variable is a boolean that returns true
```
