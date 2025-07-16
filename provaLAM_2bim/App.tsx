
/* Optamos por BottomNavigation devido à grande quantidade de telas, a falta de botões em algumas delas impossibilitaria
o uso do StackNavigator (mesmo que conseguimos adaptar o Stack na tela GaleriaScreen), que necessita de uma linearidade entre as telas. 
O uso do Drawer Navigation foi descartado pela falta do domínio dele por parte dos programadores. */
 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
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