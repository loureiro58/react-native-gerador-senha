import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ModalPass() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.innerPass}>
          <Text style={styles.text}>134</Text>
        </Pressable>

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
    marginTop: 24,
    marginBottom: 24,
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold',
    color: "#000"
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
    flexDirection: "row"
  }
});
