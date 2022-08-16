import SignClient from '@walletconnect/sign-client'

export let signClient: SignClient

export async function createSignClient() {
  signClient = await SignClient.init({
    projectId: 'e2d37a855e736cc0d154179d9054b701',
    relayUrl: 'wss://relay.walletconnect.com',
    metadata: {
      name: 'R3NT Wallet',
      description: 'Wallet for rented NFTs',
      url: 'https://r3nt.io/',
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }
  })
}
