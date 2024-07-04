import { DedotClient, WsProvider } from "dedot";
import { PolkadotApi } from "@dedot/chaintypes";

const run = async () => {
  console.time('init');
  const provider = new WsProvider('wss://rpc.polkadot.io')
  const api = await DedotClient.new<PolkadotApi>({
    provider,
    cacheMetadata: true,
  });
  console.timeEnd('init');

  console.time('fetch balances');
  const balances = await api.query.system.account('5FWgDBZM7KNnUrDZpxr8Dij7isrXny2NNzGsovxBDFdWZYSZ');
  console.log('balances', balances);
  console.timeEnd('fetch balances');
}

run().catch(console.error)
