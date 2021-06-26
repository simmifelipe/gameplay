import React from 'react';
import { View, Text } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


type Props = RectButtonProps;

const ButtonAdd: React.FC<Props> = ({ ...rest }) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />

    </RectButton>
  );
}

export default ButtonAdd;