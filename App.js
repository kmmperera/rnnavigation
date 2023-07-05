import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './Navigation.js';
export default function App() {
  return (
    <Navigations/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
