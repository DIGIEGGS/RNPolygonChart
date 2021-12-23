import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IInfoLayerProps } from '../../types';

export default function InfoLayer({
  info,
  overallOffset,
}: IInfoLayerProps) {
  return (
    <View style={styles.container}>
      {info.map(
        (v, i) =>
          v.end &&
          v.info?.text && (
            <TouchableOpacity
              key={i}
              onPress={v.info?.onPress}
              style={{
                position: 'absolute',
                left:
                  (v.end.x ?? 0) +
                  (overallOffset.x ?? 0) / 2 +
                  (v.info?.offset?.x ?? 0),
                top:
                  (v.end.y ?? 0) +
                  (overallOffset.y ?? 0) / 2 +
                  (v.info?.offset?.y ?? 0),
              }}
            >
              <Text style={v.info?.textStyle}>
                {v.info?.text}
              </Text>
            </TouchableOpacity>
          ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
