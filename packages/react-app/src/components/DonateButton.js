import React from 'react';
import { Button } from '@geist-ui/react';
import { parseEther } from '@ethersproject/units';

const DonateButton = ({ provider }) => {
  return (
    <Button
      type='secondary'
      auto
      onClick={async () => {
        const signer = provider.getSigner();
        console.log(signer);

        const tx = await signer.sendTransaction({
          to: '0xBA9768C27E189850cE71FCb07F1d2053E4Dc74A4',
          value: parseEther('.0001'),
        });
        console.log({ tx });
      }}
    >
      Donate
    </Button>
  );
};

export default DonateButton;
