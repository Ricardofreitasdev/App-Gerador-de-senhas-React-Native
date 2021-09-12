import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
import create  from "../assets/styles/create";
import { Feather } from "@expo/vector-icons";
import charset from "../components/Pass";
import React, { useState } from "react";
import Clipboard from "expo-clipboard";
import Api from "../services/Api"

const Create = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [size, setSize] = useState(8);
    const [level, setlevel] = useState(1);
    const [copy, setcopy] = useState(false);
    const [profile, setprofile] = useState("")
    const [apiResponse, setApiResponse] = useState([])
    const [errors, seterror] = useState(null)
  
    function generatePass() {
      let pass = "";
  
      let encrypt = validEncrypt(level);
  
      for (let i = 0, n = encrypt.length; i < size; i++) {
        pass += encrypt.charAt(Math.floor(Math.random() * n));
      }
      setPassword(pass);
    }
  
    function validEncrypt(level) {
      if (level == 1) {
        return charset["easy"];
      } else if (level == 2) {
        return charset["medium"];
      } else {
        return charset["hard"];
      }
    }
  
    function copyPass() {
      Clipboard.setString(password);
      setcopy(true);
    }
  
    async function savePass(){
   
      try {
        const response = await Api.post('/profiles/create', { profile, password})
        setApiResponse(response.data.newProfiler)

      } catch (error) {
        seterror(error)
      }
    }
  
  
    return (
      <View style={create.container}>
        <Feather name="lock" style={create.logo} size={60} color="#ccc" />
  
        <Text style={create.title}>Criptografia {level}</Text>
        <View style={create.area}>
          <Slider
            style={{ height: 40 }}
            minimumValue={1}
            maximumValue={3}
            minimumTrackTintColor="#16AC2E"
            maximumTrackTintColor="#ccc"
            value={level}
            onValueChange={(valor) => setlevel(valor.toFixed(0))}
          />
        </View>
  
        <Text style={create.title}> {size} Caracteres</Text>
        <View style={create.area}>
          <Slider
            style={{ height: 40 }}
            minimumValue={6}
            maximumValue={22}
            minimumTrackTintColor="#16AC2E"
            maximumTrackTintColor="#ccc"
            value={size}
            onValueChange={(valor) => setSize(valor.toFixed(0))}
          />
        </View>
  
        <View  style={create.areaText}>
        <TextInput
          style={create.input}
          onChangeText={setprofile}
          value={profile}
          placeholder="Senha de qual conta?"
        />
        </View>
  
        <TouchableOpacity style={create.button} onPress={generatePass}>
          <Text style={create.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
  
        {password !== "" && (
          <View style={create.areaText}>
  
          { profile !== "" && (<Text style={create.profile}> Conta: {profile} </Text>) }
  
            <View style={create.relative}>              
              <Text style={create.textPass}>{password}</Text>    
              <TouchableOpacity style={create.copy} onPress={copyPass}>
                <Feather name="copy" size={24} color="#2cac2d" />
              </TouchableOpacity>
            </View>

            <View style={create.boxSaveButton}>         
            <TouchableOpacity style={create.boxButton} onPress={savePass}>
              <Text style={create.buttonText} >Salvar senha</Text>
            </TouchableOpacity>        
            </View>
  
          </View>
        )}
  
        {copy && <Text style={create.textCopy}>Senha copiada com sucesso</Text>}
        {apiResponse.id && (<Text> Senha salva com sucesso!</Text>)}
        {errors && (<Text>{ errors }</Text>)}
  
  
      </View>
    );
}

export default Create
