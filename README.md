# CarbonXchange
Carbon Credits are used as a measure to see how much co2 emissions an organisation can emit.
Carbon Credits are alloted to the organisations by the government initially and they can be made by doing activities which reduce carbon emission.
Organisations can also trade Carbon Credits with each other
One major drawback of carbon credit is that companys who buy excess credits end up emitting co2 irresponsibly which could be avoided if there was some way to control their purchase of credits
CarbonXchange is a decentralised app throught which you can buy and sell carbon credits.
Along with this, we also have a mechanism to prevent buying of credits above a certain threshhold and to inform the authorities when this happens so that the orgnaisation can do something if it is a legitimate reason to buy the credits

## Team members
- Pranav K Thrideep
- Hridya Sivarajan
- Abhinand Nandakumar
- Vishnu T C

## Link to product walkthrough
[link to video](./demo.mp4)

## How it Works ?
Our project uses ganache to set up a local blockchain network
Then the smart contracts written in solidity is deployed to the network using truffle
Then we import the accounts generated by ganache to metamask
Then we run the frontend and we can carry out the trading operations there

## Libraries used
solidity
truffle
node
ganache-cli

## How to configure
install metamask extension on your browser
run npm i 

## How to Run
setting up local blockchain

1. run ganache-cli
2. in a different terminal run truffle migrate
3. run npm run dev
4. In MetaMask create a new netwerk with link http://localhost:8545
5. import accounts to metamask using the keys created in step 1
6. switch between accounts to use the trading interface