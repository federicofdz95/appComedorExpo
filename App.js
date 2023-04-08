import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/Navigation';


export default function App() {
  return (
    <PaperProvider>
        <Navigation/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {    
    fontFamily: 'Montserrat-Regular',
    fontSize: '50px'
  },
});
