/*
+------------------------------------------------------------------------+
|                 0x Wallet Generator & Recovery Tool
|                          ERC20 & BEP20
|               Generator by Viloid ( github.com/vsec7 )
| BSC/ERC20 Account & Recovery by Interchained ( github.com/shopglobal )|
+------------------------------------------------------------------------+
*/
//
// ETH utils && integrations
const ethutils = require('ethereum-mnemonic-privatekey-utils');
const bip39 = require('bip39');
const { Account } = require('eth-lib/lib');
//
// Inject packages 
const rl = require('readline-sync');
const fs = require('fs');
// BSC utils && integrations
const Web3 = require('web3');
// mainnet BSC
const bep_web3 = new Web3('https://bsc-dataseed1.binance.org:443');
// testnet BSC
//const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
// mainnet ETH
const erc_web3 = new Web3('https://mainnet.infura.io/v3/a60a84ebf4fe4290b094b75d9c383b7f');
// const infura_secret ='8fe50d6e617f4e40868d67a44ac88844';
// testnet ETH
//const web3 = new Web3('https://rinkeby.infura.io/v3/a60a84ebf4fe4290b094b75d9c383b7f');
var bep20 = false;
var erc20 = false;
var bsc = 'BSC';
var eth = 'ETH';
var network = (erc20 == false) ? bsc : eth; 
var obj = {
	network: (network != 'ETH') ? 'BSC' : 'ETH'
};
var web3_erc20 = new Web3(erc_web3);
var web3_bep20 = new Web3(bep_web3);
var web3;
var func = '';
// var func = new Function(theFunctionString);
// func();
web3_selector = function (obj,callback){
	network = obj;
	console.log("obj: "+'\n')
	console.log(obj);
	if(network == 'BSC'){
		console.log('Networking automation detected Binance Smart Chain, loading BSC blockchain in preparation for BEP20 token interactions.');
        console.log("Blockchain Network: "+ network);
		network = 'BSC';
		bep20 = true;
		erc20 = false;
        web3 = web3_bep20;
        web3.eth.getBlockNumber().then((result) => {
        	console.log("Latest Binance Smart Chain Block is ",result);
    	});
        console.log("Closing connection to: "+ network);
    } 
    if(network != 'BSC') {
    	console.log('Networking automation detected Ethereum, loading ETH blockchain in preparation for ERC20 token interactions.');
    	console.log("Blockchain Network: "+network);
    	network = 'ETH';
    	bep20 = false;
    	erc20 = true;
    	web3 = web3_erc20;
    	web3.eth.getBlockNumber().then((result) => {
    		console.log("Latest Ethereum Block is ",result);
    	});
        console.log("Closing connection to: "+ network);
	} 
    console.log("Initate callback");
    callback(obj,"success");
}
// web3_selector = function(blockchain) {
// 	network = blockchain;
// 	if(network != 'ETH'){
// 		console.log('Networking automation detected Binance Smart Chain, loading BSC blockchain in preparation for BEP20 token interactions.');
//         console.log("Blockchain Network: "+ network);
// 		network = 'BSC';
// 		bep20 = true;
// 		erc20 = false;
//         web3 = web3_bep20;
//         console.log("Closing connection to: "+ network);
//         } else if(network != 'BSC') {
//     	console.log('Networking automation detected Ethereum, loading ETH blockchain in preparation for ERC20 token interactions.');
//     	console.log("Blockchain Network: "+network);
//     	network = 'ETH';
//     	bep20 = false;
//     	erc20 = true;
//     	web3 = web3_erc20;
//         console.log("Closing connection to: "+ network);
//     	} else {
//     	console.log("Blockchain Network: "+network);
//     	console.log('Networking automation override, networking defaulting to manual mode.');
//         console.log("Closing connection to: "+ network);
//     };
//     web3.eth.getBlockNumber().then((result) => {
//     	if(network != 'ETH'){
//     		console.log("Latest Ethereum Block is ",result);
//     	} else {
//     		console.log("Latest Binance Smart Chain Block is ",result);
//     	}
//     });
// };
// Global Variables
var entropy = 'cat';
var targets = [{ whales: [ "0x5dd4df3a1c0904d10acc20f4fd161bf68a5a4ed2","cat","whale","king","crypto","moon" ]}];
const test_address = '0xC925F19cb5f22F936524D2E8b17332a6f4338751';
const test_address_default = '0xe5d18be87c0d69112cba1fd8571733dbae788377';
var addr_ = test_address;
var address = (addr_ === test_address_default) ? test_address_default : addr_;
const test_private_key = '0x2e07d5d42b1612377f5f7242579bfaf0dec0cb347ce3a487c964c723acf5bf82';
var pk_ = '';
var privateKey = (pk_ === test_private_key) ? test_private_key : pk_;
const zero = 0;
var balance = zero;
var erc20_balance = zero;
var bep20_balance = zero;
var whale = false;
var test_seed = 'decorate photo client buzz work advice tongue record helmet weird virus panda';
var mnemonic_ = test_seed;
var seed = (mnemonic_ === test_seed) ? test_seed : mnemonic_;
var acc_ = '';
var holder = '';
var bep20_holder = '';
var erc20_holder = '';
var bep20_wallet = {
	address: Web3.utils.toChecksumAddress(addr_),
	privateKey: pk_,
	balance: bep20_balance,
	whale: whale,
	mnemonic: mnemonic_,
	seed: mnemonic_,
	account: acc_
	};
var erc20_wallet = {
	address: Web3.utils.toChecksumAddress(addr_),
	privateKey: pk_,
	balance: erc20_balance,
	whale: whale,
	mnemonic: mnemonic_,
	seed: mnemonic_,
	account: acc_
};
var bep20Wallet;
var erc20Wallet;
//
// Constructor Function Development
//
// ERC20
function ERC20Address(address,privateKey,balance,whale,mnemonic,account) {
	this.address_ = Web3.utils.toChecksumAddress(address);
	this.privateKey_ = privateKey;
	this.balance_ = JSON.stringify(balance,null,"    ");
	this.whale_ = whale;
	this.mnemonic_ = mnemonic;
	this.account_ = JSON.stringify(account);
	this.pk_ = privateKey;
	console.log(this);
}
//
// BEP20
//
function BEP20Address(address,privateKey,balance,whale,mnemonic,account){
	this.address = Web3.utils.toChecksumAddress(address);
	this.privateKey = privateKey;
	this.balance = JSON.stringify(balance,null,"    ");
	this.whale = whale;
	this.mnemonic = mnemonic;
	this.account = JSON.stringify(account);
	this.pk_ = privateKey;
	console.log(this);
};
//
// Universal TokenAddress (UNI-FORM)
//
function TokenAddress(address,privateKey,balance,whale,mnemonic,account){
	this.address = Web3.utils.toChecksumAddress(address);
	this.privateKey = privateKey;
	this.balance = JSON.stringify(balance,null,"    ");
	this.whale = whale;
	this.mnemonic = mnemonic;
	this.account = JSON.stringify(account);
	this.pk_ = privateKey;
	console.log(this);
};
//
// check ERC20 && BEP20 account
//
TokenAddress.prototype.getBalance = async function(address,privateKey,whale,mnemonic,account){
	// p2p networking BEP20/ERC20
	// ETH scan ERC20
	network = eth;
	obj = network;
	var erc20_data;
	await web3_selector(obj,function(err, res){
		web3.eth.getBalance(Web3.utils.toChecksumAddress(test_address)).then(JSON.stringify(console.log),null,"    ");
		const whale_erc20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(test_address)));
	    console.log("Response from web3_selector: ",obj);
	    erc20_wallet.balance = whale_erc20_balance;
		erc20Wallet = new ERC20Address(address,privateKey,whale_erc20_balance,whale,mnemonic,account);console.log("\n"+"ERC20 Balance: "+ erc20Wallet.balance);
		console.log("\n"+"ERC20 Balance: "+ erc20Wallet.balance);
		erc20_data = `Whale??? Status: ${erc20Wallet.whale} \nBalance: ${erc20Wallet.balance}\nAddress : ${erc20Wallet.address}\nPrivateKey: ${erc20Wallet.privateKey}\nMnemonic: ${erc20Wallet.mnemonic}\n`;
	});
	//	web3_selector(eth);
	// const whale_erc20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(test_address)));
	//
	// BSC scan BEP20
	network = bsc;
	obj = network;
	var bep20_data;
	await web3_selector(obj,function(err, res){
		web3.eth.getBalance(Web3.utils.toChecksumAddress(test_address)).then(JSON.stringify(console.log),null,"    ");
		const whale_bep20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(test_address)));
		console.log("Response from web3_selector: ",obj);
		// web3_selector(bsc);
		// const whale_bep20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(test_address)));
		bep20_wallet.balance = whale_bep20_balance;
		bep20Wallet = new BEP20Address(address,privateKey,whale_bep20_balance,whale,mnemonic,account);
		console.log("\n"+"BEP20 Balance: "+ bep20Wallet.balance);
		bep20_data = `Whale??? Status: ${bep20Wallet.whale} \nBalance: ${bep20Wallet.balance}\nAddress : ${bep20Wallet.address}\nPrivateKey: ${bep20Wallet.privateKey}\nMnemonic: ${bep20Wallet.mnemonic}\n`;
	});
	// combine data
	const bep20_erc20_data = '___________________________' + '\n' + bep20_data + '\n' + '___________________________' + '\n' + erc20_data;
	var bep20_memo;
	var erc20_memo;
	var bep20_gold = (bep20Wallet.balance > 0 && bep20Wallet.balance != undefined) ? true : false;
	var erc20_gold = (erc20Wallet.balance > 0 && erc20Wallet.balance != undefined) ? true : false;
	gold = (bep20_gold === true || erc20_gold === true) ? true : false;
	console.log("Did we find gold? Status: " + gold);	
		erc20_wallet = {
			address: Web3.utils.toChecksumAddress(addr_),
			privateKey: pk_,
			whale: whale,
			balance: erc20_balance,
			mnemonic: mnemonic_,
			account: acc_
		};
		bep20_wallet = {
			address: Web3.utils.toChecksumAddress(addr_),
			privateKey: pk_,
			balance: bep20_balance,
			whale: whale,
			mnemonic: mnemonic_,
			account: acc_
		};
		if(bep20_gold === false || erc20_gold === false){
			// keep digging ?
			bep20_memo = './'+'virgin/VIRGIN_BEP20_'+bep20Wallet.address;
			erc20_memo = './'+'virgin/VIRGIN_ERC20_'+erc20Wallet.address;
			fs.appendFile(bep20_memo, JSON.stringify(bep20_data)+'\n', (err) => { if(err) console.log(err); });
			fs.appendFile(erc20_memo, JSON.stringify(erc20_data)+'\n', (err) => { if(err) console.log(err); });
		} else {
			bep20_memo = './'+'gold/GOLD_BEP20_'+bep20Wallet.address;
			erc20_memo = './'+'gold/GOLD_ERC20_'+erc20Wallet.address;
			fs.appendFile(bep20_memo, JSON.stringify(bep20_data)+'\n', (err) => { if(err) console.log(err); });
			fs.appendFile(erc20_memo, JSON.stringify(erc20_data)+'\n', (err) => { if(err) console.log(err); });
		};
	return bep20_erc20_data;
};
//
// ERC20 Wallet Handling
//
// check ERC20 account
//
ERC20Address.prototype.getBalance = async function(addr_,pk_,whale,mnemonic_,acc_){
	privateKey = pk_;
	mnemonic = mnemonic_;
	account = acc_;
	network = eth;
	obj = network;
	var gold;
	await web3_selector(obj,function(err, res){
		web3.eth.getBalance(Web3.utils.toChecksumAddress(addr_)).then(JSON.stringify(console.log),null,"    ");
		const whale_erc20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(addr_)));
	    console.log("Response from web3_selector: ",obj);
		erc20_wallet.balance = whale_erc20_balance;
		erc20Wallet = new ERC20Address(addr_,pk_,whale_erc20_balance,whale,mnemonic_,acc_);
		console.log("\n"+"Balance: "+ erc20Wallet.balance);
		var erc20_memo;
		gold = (erc20Wallet.balance > 0 && erc20Wallet.balance != undefined) ? true : false;
		whale = gold;
		console.log("Did we find gold? Status: " + gold);
			global.erc20_wallet = {
				address: addr_,
				privateKey: pk_,
				balance: erc20_balance,
				whale: whale,
				mnemonic: mnemonic_,
				account: acc_
			}
			if(gold === false){
				// keep digging ?
				erc20_memo = './'+'virgin/VIRGIN_ERC20_'+'_'+erc20_wallet.address;
				fs.appendFile(erc20_memo, JSON.stringify(erc20_wallet)+'\n', (err) => { if(err) console.log(err); });
			} else {
				erc20_memo = './'+'gold/GOLD_ERC20_balance_'+erc20_wallet.address;
				fs.appendFile(erc20_memo, JSON.stringify(erc20_wallet)+'\n', (err) => { if(err) console.log(err); });
			};
		return erc20_wallet;
	});
};
//
// BEP20 Wallet Handling
//
//check BEP20 balance
//
BEP20Address.prototype.getBalance = async function(addr_,pk_,whale,mnemonic_,acc_){
	obj = network;
	var gold;
	privateKey = pk_;
	mnemonic = mnemonic_;
	account = acc_;
	await web3_selector(obj,function(err, res){
		web3.eth.getBalance(Web3.utils.toChecksumAddress(addr_)).then(JSON.stringify(console.log),null,"    ");
		const whale_bep20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(addr_)));
		console.log("Response from web3_selector: ",obj);
		global.bep20_wallet.balance = whale_bep20_balance;
		gold = (global.bep20_wallet.balance > 0 && global.bep20_wallet.balance != undefined) ? true : false;
		whale = gold; 
		bep20Wallet = new BEP20Address(addr_,pk_,whale_bep20_balance,whale,mnemonic_,acc_);
		const bep20_data = `Whale??? Status: ${bep20Wallet.whale} \nBalance: ${bep20Wallet.balance}\nAddress : ${bep20Wallet.address}\nPrivateKey: ${bep20Wallet.privateKey}\nMnemonic: ${bep20Wallet.mnemonic}\n`;
		var bep20_Balance;
		console.log("Did we find gold? Status: " + gold);
			global.bep20_wallet = {
				address: addr_,
				privateKey: pk_,
				balance: bep20_balance,
				whale: whale,
				mnemonic: mnemonic_,
				account: acc_
			}
			console.log("bep20_wallet: " + '\n');
			console.log(global.bep20_wallet);
			if(gold === false){
				// keep digging ?
				bep20_memo = './'+'virgin/VIRGIN_BEP20_'+global.bep20Wallet.address;
				fs.appendFile(bep20_memo, JSON.stringify(global.bep20_wallet)+'\n', (err) => { if(err) console.log(err); });
			} else {
				bep20_memo = './'+'gold/GOLD_BEP20_'+global.bep20Wallet.address;
				fs.appendFile(bep20_memo, JSON.stringify(global.bep20_wallet)+'\n', (err) => { if(err) console.log(err); });
			};
		return global.bep20_wallet;
	});
};
//
// Begin 0x functions 
//
	async function createWallet(){
		const mnemonic = bip39.generateMnemonic();
		mnemonic_ = mnemonic;
		const pk = '0x' + ethutils.getPrivateKeyFromMnemonic(mnemonic);
		pk_ = pk;
		const acc = Account.fromPrivate(pk);
		acc_ = acc;
		addr_ = (acc.address).toLowerCase();
		global.bep20_wallet = {
				address: addr_,
				privateKey: pk_,
				balance: bep20_balance,
				whale: whale,
				mnemonic: mnemonic_,
				account: acc_
			}
		global.erc20_wallet = {
				address: addr_,
				privateKey: pk_,
				balance: erc20_balance,
				whale: whale,
				mnemonic: mnemonic_,
				account: acc_
			}
		return {
			'address': (acc.address).toLowerCase(), 
			'pk': pk,
			'mnemonic': mnemonic
		};
	};
	async function generateWallet(n,o){
		for (var i = 1; i <= n; i++) {
			// BEP20
			// create account
			// const bep20_account = web3.eth.accounts.create([entropy]);
			// bep20_wallet.address = bep20_account.address;
			// bep20_wallet.private_key = bep20_account.private_key; 
			//
			// create 0x account
			const wallet = await createWallet();
			const data = `Address : ${wallet.address}\nPrivateKey: ${wallet.pk}\nMnemonic: ${wallet.mnemonic}\n`;
		 	async function getIndex (addr_,whales) {
				if (addr_ === whales) {
					whale = true;
					global.erc20_wallet.whale = true;
		            // web3_selector(eth);
		            network = eth;
		            obj = eth;
					await web3_selector(eth,function(err, res){
						global.erc20_wallet.whale = whale;
						ERC20Address.prototype.getBalance(addr_,pk_,whale,mnemonic_,acc_);
						console.log("Blockchain:  ",obj);
					});
					global.bep20_wallet.whale = true;
		            // web3_selector(bsc);
		            network = bsc;
		            obj = bsc;
					await web3_selector(bsc,function(err, res){
						global.bep20_wallet.whale = whale;
						BEP20Address.prototype.getBalance(addr_,pk_,whale,mnemonic_,acc_);
	     				console.log("Blockchain: ",obj);
					});
					console.log("whales ahoy! Tagged whales recorded! Full speed ahead! "+"\n"+"WHALE: "+ whales);
				} else {
					whale = false;
					global.erc20_wallet.whale = false;
					network = eth;
		            obj = eth;
					await web3_selector(eth,function(err, res){
						global.erc20_wallet.whale = whale;
						ERC20Address.prototype.getBalance(addr_,pk_,whale,mnemonic_,acc_);
						console.log("Blockchain: ",obj);
					});
		            global.bep20_wallet.whale = false;
		            network = bsc;
		            obj = bsc;
					await web3_selector(bsc,function(err, res){
						global.bep20_wallet.whale = whale;
						BEP20Address.prototype.getBalance(addr_,pk_,whale,mnemonic_,acc_);
						console.log("Blockchain:  ",obj);
					});
					return -1;
				};
				if(o){
					fs.appendFile(o, data+'\n', (err) => { if(err) console.log(err); });
				}; 
			//console.log(data);
			}; 
			for (var j = 0; j < targets.length; ++j) {
				console.log(targets[j]);
				console.log("loading list: " + targets[j].whales); 
				getIndex(addr_, targets[j].whales);
			};
		};		
	};
//
// Globalize Initialization
//
(async () => {
	console.log(`
/*
+------------------------------------------------------------------------+
|                 0x Wallet Generator & Recovery Tool
|                          ERC20 & BEP20
|               Generator by Viloid ( github.com/vsec7 )
| BSC/ERC20 Account & Recovery by Interchained ( github.com/shopglobal )|
+------------------------------------------------------------------------+
*/
		`)
	const n = rl.question('[?] How Many Wallet: ');
	const o = rl.question('[?] Output (just enter if you dont need backup to file): ');
	console.log('\n');
	await generateWallet(n,o);
})();
