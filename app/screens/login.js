import React, { useState } from 'react';
import { View, TextInput,StyleSheet, ActivityIndicator ,Button, KeyboardAvoidingView} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword}from'firebase/auth';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth=FIREBASE_AUTH;
  const navigation = useNavigation();
  const signIn = async () => {
    setLoading(true);
    try {
     const response= await signInWithEmailAndPassword(auth,email, password);
      console.log('response');
      navigation.navigate('details');
    } catch (error) {
      console.error(error.message);
    }finally{
      setLoading(false);
    }
  };
  const signUp = async () => {
    setLoading(true);
    try {
     const response= await createUserWithEmailAndPassword(auth,email, password);
      console.log('User registered successfully!');
    } catch (error) {
      console.error(error.message);
    }
  };
 
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize='none'
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {loading ? (
        <ActivityIndicator size='large' color='#0000ff' />
      ) : (<>
        <Button title='Login' onPress={signIn} />
        <Button title='create account' onPress={signUp} />
        </>
      )}
      </KeyboardAvoidingView>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});


