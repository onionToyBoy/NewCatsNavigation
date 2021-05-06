import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, FlatList, View, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SearchBar } from '../components/SearchBar';
import { Cat } from '../components/Cat';
import { mockData } from '../mockData';
import { colors } from '../constants/colors';
import { routes } from '../constants/routes';

export const CatsMain = ({ navigation }) => {
  const [cats, setCats] = useState(mockData);

  const renderSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => <Cat cat={item} onPressItem={onPressItem} />;

  const behavior = Platform.OS === 'ios'? 'position':'';

  const onPressItem = cat => {
    navigation.navigate(routes.CatDetails, { cat });
  };

  const onSearch = text => {
    setCats(
      mockData.filter(
        cat =>
          cat.name.toLowerCase().includes(text.toLowerCase()) ||
          cat.bread.toLowerCase().includes(text.toLowerCase()) ||
          cat.info.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.scarletRed, colors.brightRed, colors.darkRed]}
        style={styles.container}
      >
        <KeyboardAvoidingView
          behavior={behavior}
          style={styles.container}
        >
          <Text style={styles.header}>Hello, I am a Header!</Text>
          <FlatList
            data={cats}
            renderItem={renderItem}
            keyExtractor={cat => cat.id.toString()}
            ItemSeparatorComponent={renderSeparator}
          />
        </KeyboardAvoidingView>
        <SearchBar onSearch={onSearch} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 5,
  },
  separator: {
    height: 1,
    backgroundColor: colors.dustyRed,
  },
});
