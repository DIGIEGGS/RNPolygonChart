import { StyleSheet } from 'react-native';
import { black } from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 15,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 2,
  },
  text: {
    marginHorizontal: 15,
    marginVertical: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
