import React from 'react';
import { Page, User, Loading } from '@geist-ui/react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
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
    <Page>
      <Page.Content>
        <User src={data.image} name='Bookland'>
          <User.Link href='https://etherscan.io/address/bookland.eth'>@bookland.eth</User.Link>
        </User>
      </Page.Content>
    </Page>
  );
}

export default App;
