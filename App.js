import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/header"
import AlbumList from "./src/components/AlbumList"

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header headerText="Albums"/>
      <AlbumList />
    </View>
  );
}