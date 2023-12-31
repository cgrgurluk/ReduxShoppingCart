
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './HomeScreen';
import store from './Store';

export default function App() {
  return (
    <Provider store={store}>
        <HomeScreen/>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
