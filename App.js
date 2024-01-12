import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, StyleSheet, Text, View , Alert} from 'react-native';
import Button from './Button';
export default function App() {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!');
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
       <Button onPress={handlePress} title={"hiiii"}/>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
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
