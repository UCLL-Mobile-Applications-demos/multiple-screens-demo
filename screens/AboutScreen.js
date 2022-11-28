import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
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
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default AboutScreen;