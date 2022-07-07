const Web3 = require('web3')
const web3 = new Web3()
const RLP = require('rlp')
const nonce = 10;
const sender = '0x54f4b61043e9cc8d169bb692221b8dbf0e23ee21'

const address = '0x' + web3.utils.sha3(RLP.encode([sender,nonce])).slice(12).substring(14)

console.log(`The Smart contract address is: ${address}`)


// const main = async () => {
//   const account = web3.eth.accounts.privateKeyToAccount('' + privateKey);
//   web3.eth.accounts.wallet.add(account);
//   web3.eth.defaultAccount = account.address;

//   await web3.eth.sendTransaction({
//     from: '0x54f4b61043e9cc8d169bb692221b8dbf0e23ee21',
//     to: '0x54f4b61043e9cc8d169bb692221b8dbf0e23ee21',
//     value: 0,
//     gas: '21000',
//     gasPrice: '22000000000',
//     data: '',
//     nonce: 11
//   })
// }

// main()
//   .then(() => console.log('Success'))
//   .catch(error => console.log('Error', error))
