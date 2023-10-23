import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
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
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}//-> ga naar het eerste scherm in de stack (toevallig nu ook home, wissel ze maar eens om in de stack en zie wat er zal gebeuren)
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default DetailsScreen;