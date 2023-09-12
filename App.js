import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch =() => setIsEnabled(previousState => !previousState);


  return (
    <View style={styles.container}>
      {/* <Text>Jenni-Marian Switch</Text> EN SAA TEKSTIÄ JA SWITCHIÄ SAMALLE RIVILLE*/}
        <View style={styles.fields}>
          <Switch
            trackColor={{false: '#767577', true: '#79ff58'}}
            thumbColor={isEnabled ? '#79ff58' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fields: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
