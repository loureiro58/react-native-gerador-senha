import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import ModalPass from '../../components/modal';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {

  const[size, setSize] = useState(10);
  const[password, setPassword] = useState("");
  const[modal, setModal] = useState(false);

  function generatePassword(){

    let pass = "";

    for(let i = 0, n= charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);
    setModal(true);

  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/logo.png")}
        style={ styles.logo}
      />
      <Text style={ styles.title }>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          minimumValue={6}
          maximumValue={30}
          maximumTrackTintColor="ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#393def"  
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0)) }        
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modal} animationType="fade" transparent={true}>
        <ModalPass pass={password} handleClose={() => setModal(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor:"#393def",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#fff",
    fontSize: 19,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
