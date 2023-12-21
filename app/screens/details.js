import React from 'react';
import { View, Text ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const details = () => {
    const Logout = async () => {
      
    
        try {
    const navigation = useNavigation();
    navigation.navigate('Login');
} catch (error) {
  console.error(error.message);
} 
};

  return (
    <View>
      <Text>yakine</Text>
      <Button title='logout' onPress={Logout}></Button>
    </View>
  );
};

export default details;
