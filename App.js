import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import List from './screens/List';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <List/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : 30
  },
});
