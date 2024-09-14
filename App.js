import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Src/Screens/homeScreen';
import LoginScreen from './Src/Screens/loginScreen';



export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={
        {
          headerShown: false
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack =  createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
