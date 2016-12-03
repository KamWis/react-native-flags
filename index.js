// @flow

import React from 'react';
import { Image } from 'react-native';
import * as flags from './flags';

type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  styleSize: number,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
};

const Flag = ({ size = 64, styleSize = 0, code, type = 'shiny', style }: Props) => {
  const flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];
  const imageSize = styleSize ? styleSize : size;

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: imageSize, height: imageSize }, style]}
    />
  );
};

export default Flag;
