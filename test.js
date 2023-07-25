// @ts-check
const {cosmos} = require('./dist')
// const { LCDClient } = require('@osmonauts/lcd')
const main = async () => {
   const client = await cosmos.ClientFactory.createLCDClient({ restEndpoint: 'https://okp4-testnet.mellifera.network:1317' });
   const result = await client.cosmos.staking.v1beta1.validators({})
   console.log(result)
   const a = result.validators[0].unbonding_height
   console.log(typeof a)
};

main()
