
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/screens/login';
import details from './app/screens/details';
  const stack=createNativeStackNavigator();

  
  export default function App() {
  
  return (
    <NavigationContainer>
<stack.Navigator initialRouteName='Login'>
  <stack.Screen name='Login' component={Login}options={{headerShown:false}}/>
  <stack.Screen name="details" component={details} />
</stack.Navigator>
    </NavigationContainer>
)};


