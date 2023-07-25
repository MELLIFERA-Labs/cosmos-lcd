# cosmos-lcd

<p align="center">
    LCD client for cosmos chains 
</p>


## install

```sh
npm install @mellifera/cosmos-lcd
```
## Usage 
  
```js
const {cosmos} = require('cosmos-lcd')
const main = async () => {
   const client = await cosmos.ClientFactory.createLCDClient({ restEndpoint: REST_URL });
   const result = await client.cosmos.staking.v1beta1.validators({})
   console.log(result)
};
```

## Developing

When first cloning the repo:

```
yarn
yarn build
```

### Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `cosmos-lcd`:

```
yarn codegen
```

### Publishing

Build the types and then publish:

```
yarn build
yarn publish
```
## Credits

Thanks to: [Cosmology](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code or software using the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
