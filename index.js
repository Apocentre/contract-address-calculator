const Web3 = require('web3')
const web3 = new Web3()
const RLP = require('rlp');  
const nonce = 0;
const sender = ''

const address = '0x' + web3.utils.sha3(RLP.encode([sender,nonce])).slice(12).substring(14)

console.log(`The Smart contract address is: ${address}`)
