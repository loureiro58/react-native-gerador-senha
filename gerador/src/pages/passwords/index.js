import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

export default function Passwords() {

  return (
    <View style={styles.container}>
        <Text style={styles.buttonText}>Minhas senhas</Text>
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
