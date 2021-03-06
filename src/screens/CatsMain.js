import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  View,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/stack';

import { SearchBar } from '../components/SearchBar';
import { Cat } from '../components/Cat';
import { mockCats } from '../constants/mockData';
import { colors } from '../constants/colors';
import { routes } from '../constants/routes';

export const CatsMain = ({ navigation }) => {
  const [cats, setCats] = useState(mockCats);

  const headerHeight = useHeaderHeight();

  const renderSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => <Cat cat={item} onPressItem={onPressItem} />;

  const onPressItem = cat => {
    navigation.navigate(routes.CatDetails, { cat });
  };

  const onSearch = text => {
    const textToLowrCase = text.toLowerCase();
    const updatedCats = mockCats.filter(
      cat =>
        cat.name.toLowerCase().includes(textToLowrCase) ||
        cat.bread.toLowerCase().includes(textToLowrCase) ||
        cat.info.toLowerCase().includes(textToLowrCase),
    );

    setCats(updatedCats);
  };

  return (
    <LinearGradient
      colors={[colors.scarletRed, colors.brightRed, colors.darkRed]}
      style={styles.container}
    >
      <FlatList
        data={cats}
        renderItem={renderItem}
        keyExtractor={cat => cat.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}
      >
        <SearchBar onSearch={onSearch} />
      </KeyboardAvoidingView>
      <SafeAreaView />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.dustyRed,
  },
});
