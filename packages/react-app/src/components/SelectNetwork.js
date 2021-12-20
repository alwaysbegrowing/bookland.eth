import React, { useEffect, useState } from 'react';
import { Select } from '@geist-ui/react';

function SelectNetwork({ provider }) {
  const [currentNetwork, setCurrentNetwork] = useState(null);
  useEffect(() => {
    const getNetwork = async () => {
      if (provider) {
        const { name } = await provider.getNetwork();
        setCurrentNetwork(name);
        console.log({ name });
      }
    };
    getNetwork(provider);
  }, [provider]);
  const handler = (val) => console.log(val);
  if (!currentNetwork) {
    return 'no network';
  }
  return (
    <Select initialValue={currentNetwork} onChange={handler}>
      <Select.Option value='homestead'>Ethereum</Select.Option>
      <Select.Option value='arbitrum'>Arbitrum</Select.Option>
      <Select.Option value='optimism'>OΞ (Optimism)</Select.Option>
      <Select.Option value='rinkeby'>Rinkeby</Select.Option>
    </Select>
  );
}

export default SelectNetwork;
