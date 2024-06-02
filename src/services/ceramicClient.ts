import { CeramicClient } from '@ceramicnetwork/http-client';
import { DIDSession } from 'did-session';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { ComposeClient } from '@composedb/client';
import OpenBadgeModel from '../Definations';
import { RuntimeCompositeDefinition } from '@composedb/types';

const API_URL = 'http://localhost:7007'; // Update with your Ceramic API URL
const ceramic = new CeramicClient(API_URL);
export const composeDB = new ComposeClient({
  ceramic,
  definition: OpenBadgeModel as RuntimeCompositeDefinition,
});

export const authenticateCeramic = async () => {
  const sessionStr = localStorage.getItem('did');
  let session;

  if (sessionStr) {
    session = await DIDSession.fromSession(sessionStr);
  }

  if (!session || (session.hasSession && session.isExpired)) {
    // @ts-ignore - window is a global object
    if (window.ethereum === null || window.ethereum === undefined) {
      throw new Error('No injected Ethereum provider found.');
    }

    // @ts-ignore - window is a global object
    const ethProvider = window.ethereum;
    const addresses = await ethProvider.enable({
      method: 'eth_requestAccounts',
    });
    const accountId = await getAccountId(ethProvider, addresses[0]);
    const authMethod = await EthereumWebAuth.getAuthMethod(
      ethProvider,
      accountId
    );

    session = await DIDSession.authorize(authMethod, {
      resources: [
        'ceramic://*?model=kjzl6hvfrbw6c7f8zr4bdyzfumj7hv7r9i7dbu57isrzezqjuetkum2885p9agc',
      ],
    });

    if (session) {
      localStorage.setItem('did', session.serialize());
    }
  }

  if (session) {
    // Set DID for ComposeDB
    // @ts-ignore - setDID is a method on ComposeClient
    composeDB.setDID(session.did);
    // @ts-ignore - did is a property on CeramicClient
    ceramic.did = session.did;
  }

  return session;
};

export default ceramic;
