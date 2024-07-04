import { ApiPromise, WsProvider } from "@polkadot/api";

const run = async () => {
  console.time('init');
  const api = await ApiPromise.create({
    provider: new WsProvider('wss://rpc.polkadot.io'),
  });
  console.timeEnd('init');

  console.time('fetch balances');
  const balances = await api.query.system.account('5FWgDBZM7KNnUrDZpxr8Dij7isrXny2NNzGsovxBDFdWZYSZ');
  console.log('balances', balances);
  console.timeEnd('fetch balances');
}

run().catch(console.error)
