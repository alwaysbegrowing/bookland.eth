      
import React, { useEffect, useState } from "react";
import {  Select } from '@geist-ui/react';

function SelectNetwork() {
    const handler = val => console.log(val)
    return (
      <Select placeholder="Choose one" onChange={handler}>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    )

 
  }

  export default SelectNetwork