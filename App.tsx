import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './src/components/Button';
import { Hexagon } from './src/components/Hexagon';
import { Pentagon } from './src/components/Pentagon';
import { Tetragon } from './src/components/Tetragon';
import { Triangle } from './src/components/Triangle';
import { black } from './src/style/colors';
import { hexagon, pentagon, tetragon, triangle } from './src/style/examples';
import { PolygonType } from './src/types';

const App = () => {
  const [type, setType] = useState<PolygonType>('hexagon');

  const getComponent = () => {
    switch (type) {
      case 'triangle':
        return <Triangle {...triangle} style={styles.component} />;
      case 'tetragon':
        return <Tetragon {...tetragon} style={styles.component} />;
      case 'pentagon':
        return <Pentagon {...pentagon} style={styles.component} />;
      case 'hexagon':
        return <Hexagon {...hexagon} style={styles.component} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button type="triangle" onClick={() => setType('triangle')} />
        <Button type="tetragon" onClick={() => setType('tetragon')} />
        <Button type="pentagon" onClick={() => setType('pentagon')} />
        <Button type="hexagon" onClick={() => setType('hexagon')} />
      </View>
      {getComponent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  component: {width: 300, height: 600},
  buttonWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 5,
  },
});

export default App;
