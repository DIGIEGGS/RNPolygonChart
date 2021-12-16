import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Hexagon, Pentagon, Tetragon, Triangle } from './src';
import Button from './src/components/Button';
import { hexagon, pentagon, tetragon, triangle } from './src/mocks/examples';
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
        <Button type="triangle" onPress={() => setType('triangle')} />
        <Button type="tetragon" onPress={() => setType('tetragon')} />
        <Button type="pentagon" onPress={() => setType('pentagon')} />
        <Button type="hexagon" onPress={() => setType('hexagon')} />
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
