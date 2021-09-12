import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import home  from "../assets/styles/home";
import Api from "../services/Api";
import Clipboard from "expo-clipboard";



export default function Home() {
  const [responseApi, setResponseApi] = useState([]);
  const [errors, seterror] = useState(null);
  const [copy, setcopy] = useState(false);

  const copyPass = (pass) => {
    Clipboard.setString(pass);
    setcopy(true);
  }

  useEffect(() => {

    (async () => {    
      try {
        const response = await Api.get("/profiles");
        setResponseApi(response.data.Allprofilers); 
      } catch (error) {
        seterror(error)
      }
    })();

  }, [responseApi]);



  return (
    <View style={home.wrapper}>

      <Text style={home.title}>Senhas</Text>

      { responseApi && responseApi.map( (item) =>

      (<View style={home.box} key={item.id} >
        <Text style={home.boxTitle}>Perfil: { item.profile }</Text>
        <TouchableOpacity onPress={() => copyPass(item.password)}>
         <Text>{ item.password }</Text>
        </TouchableOpacity>
      </View>)
      
      ) }

      {copy && <Text >Senha copiada com sucesso</Text>}
      {errors && <Text>{errors}</Text>}
    </View>
  );
}
