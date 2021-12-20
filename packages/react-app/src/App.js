import React from 'react';
import { Page, User, Loading, Button, Grid, Spacer, Image } from '@geist-ui/react';
import useSWR from 'swr';
import useWeb3Modal from './hooks/useWeb3Modal';
import WalletButton from './components/WalletButton';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  const { data, error } = useSWR(
    'https://metadata.ens.domains/mainnet/avatar/bookland.eth/meta',
    fetcher
  );
  if (error) {
    return 'ERROR';
  }
  if (!data) {
    return <Loading />;
  }

  return (
    <Page dotBackdrop>
      <Page.Header>
        <Grid.Container justify='flex-end'>
          <Grid>
            <Spacer h={1} />
            <WalletButton
              provider={provider}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
            />
          </Grid>
        </Grid.Container>
      </Page.Header>
      <Page.Content>
        <User src={data.image} name='Bookland'>
          <User.Link href='https://etherscan.io/address/bookland.eth'>@bookland.eth</User.Link>
        </User>
        <Button type='secondary' auto>Donate</Button>
      
      </Page.Content>
    </Page>
  );
}

export default App;
