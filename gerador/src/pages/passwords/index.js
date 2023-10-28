import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage';
import {PasswordItem} from './components/passwordItem';

export function Passwords() {
  const [lista, setLista] = useState([]);
  const focused = useIsFocused();
  const {getItem, removeItem} = useStorage();


  useEffect(() => {
    async function loadPass(){
      const passwords = await getItem("@pass");
      setLista(passwords);
    }
    loadPass();
  }, [focused])

  async function handleDeletePass(item){
    const pws = await removeItem("@pass", item);
    setLista(pws);
  }

  return (
    <SafeAreaView style={{flex: 1,}}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{flex:1, paddingTop:14 }}
          data={lista}
          keyExtractor={ (item) => String(item) }
          renderItem={ ({item }) => <PasswordItem data={item} removePass={ () => handleDeletePass(item)} /> }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392DE9", 
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft:14,
    paddingRight: 14,
  },
  title:{
    fontSize: 18,
    color:"#fff",
    fontWeight: 'bold'
  },
  content:{
    flex: 1,
    paddingLeft:14,
    paddingRight: 14,
  }
});
