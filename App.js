import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* om deze modules te installeren run deze 2 commandos:
npx expo install react-native-screens react-native-safe-area-context
npx npm install @react-navigation/native-stack
*/

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="go to About"
        onPress={() => navigation.navigate('About')}//-> gaat naar About
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>about me Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}//-> gaat naar About
      />
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}//-> we staan al op details dus zal niet reageren
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}//-> ookal staan we al op details, zal toch reageren
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}//-> gaat naar HomeScreen
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}//-> terug naar vorige scherm
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}//-> we staan al op details dus zal niet reageren
      />

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}//-> ga naar het eerste scherm in de stack (toevallig nu ook home, wissel ze maar eens om in de stack en zie wat er zal gebeuren)
      />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>some info about me</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}//-> ga naar het eerste scherm in de stack (toevallig nu ook home, wissel ze maar eens om in de stack en zie wat er zal gebeuren)
      />
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
