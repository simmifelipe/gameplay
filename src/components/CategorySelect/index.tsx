import React from 'react';
import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';
import Category from '../Category';

import { styles } from './styles';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

const CategorySelect: React.FC<Props> = ({ categorySelected, setCategory }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }


    </ScrollView>
  );
}

export default CategorySelect;