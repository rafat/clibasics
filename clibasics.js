const { ApiPromise, WsProvider } = require('@polkadot/api');
const chalk = require('chalk');

const Block = async () => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Retrieve the latest header
    const lastHeader = await api.rpc.chain.getHeader();

    const number = lastHeader.number.toString();
    const hash = lastHeader.hash.toString();
    const parentHash = lastHeader.parentHash.toString();
    const stateRoot = lastHeader.stateRoot.toString();
    const extrinsicsRoot = lastHeader.extrinsicsRoot.toString();

    console.log(chalk.red("LATEST BLOCK: "),chalk.green(`${number}`));
    console.log(chalk.red("HASH: "),chalk.green(`${hash}`));
    console.log(chalk.red("PARENT HASH: "),chalk.green(`${parentHash}`));
    console.log(chalk.red("STATE ROOT: "),chalk.green(`${stateRoot}`));
    console.log(chalk.red("EXTRINSICS ROOT: "),chalk.green(`${extrinsicsRoot}`));
}

Block().catch(err => {
    const log = chalk.red(err) // we set the color red here for errors.
    console.log(log)
}).finally(() => process.exit());