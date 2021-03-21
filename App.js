import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Clipboard from 'expo-clipboard';

import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ123456789!@#$%&*_()';

export default function App(){

  const [ password, setPassword ] = useState('');
  const [ size, setSize ] = useState(5);

  function generatePass(){
      let pass = '';
      for (let i = 0, n = charset.length; i < size; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))        
      }
      setPassword(pass);
  }

  function copyPass(){
    Clipboard.setString(password);
    alert("Senha copiada")
  }

  return(

    <View style={ styles.container } >
    
      <Image 
        source={ require('./src/assets/logocinza.png') }
        style={ styles.logo }
      />
      <Text style={ styles.title }> {size} Caracteres</Text>

      <View style={ styles.area }>
          <Slider 
            style={{ height: 50 }}
            minimumValue={5}
            maximumValue={15}
            minimumTrackTintColor="#16AC2E"
            maximumTrackTintColor="#000"
            value={size}
            onValueChange={ (valor) => setSize(valor.toFixed(0))}
          />
      </View>

      <TouchableOpacity style={ styles.button } onPress={ generatePass } >
         <Text style={ styles.buttonText} >Gerar Senha</Text>
      </TouchableOpacity>

    { password !== '' && (
      <View style={ styles.areaText }>
         <Text style={ styles.textPass} onLongPress={copyPass} >{password}</Text>
     </View>
    )}  
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff'
  },
  logo:{
    marginBottom: 50
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9D9D9D'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 8    
  },
  button: {
    backgroundColor: '#16AC2E',
    width: '90%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'   
  },
  areaText: {
    marginTop: 10,
    padding: 12,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'   
  },
  buttonText:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'  
  },
  textPass: {
    color: '#9D9D9D'
  }


})