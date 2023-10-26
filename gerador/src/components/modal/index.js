import { TouchableOpacity, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function ModalPass({pass, handleClose}) {

  async function handleCopyPass(){
    await Clipboard.setStringAsync(pass);
    alert("Senha copiada!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.innerPass} onLongPress={handleCopyPass}>
          <Text style={styles.text}>{pass}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(24,24,24,0.6)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    paddingTop: 24,
    paddingBottom: 24,
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000",
    marginBottom: 24,
  },
  innerPass:{
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding:14,
    borderRadius: 8
  },
  text:{
    color: "#FFF",
    textAlign: "center"
  },
  buttonArea:{
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',    
  },
  button:{
    flex: 1,
    alignItems: 'center',
    marginTop: 14,
    margingBottom: 14,    
    padding: 8
  },
  buttonSave:{
    backgroundColor: "#392DE9"  ,
    borderRadius: 8,
  },
  buttonSaveText:{
    color:"#fff",
    fontWeight: 'bold'
  }
});
