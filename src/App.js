import React from "react";
import {View, Image, 
        StyleSheet, SafeAreaView, 
        StatusBar, Text, 
        Pressable, Linking} from "react-native";


const colorGitHub = '#010409'
const colorFontGithub = '#C9D1D9'
const fontDarkColorGithub = '#4F565E'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/91515270?v=4'
const urlToMyGithub = 'https://github.com/gemario'

const App = () => {
  const handlePressGoToGitHub = async () => {
    console.log('Verificando Link')
    const response = await Linking.canOpenURL(urlToMyGithub)
    if(response) {
      console.log('Link aprovado')
      console.log('Abrindo Link...')
      await Linking.openURL(urlToMyGithub)
    } 
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
      <View style={style.content}> 
       <Image 
        accessibilityLabel='Foto de perfil' 
        style={style.avatar} 
        source={{uri: imageProfileGithub}}/>

        <Text accessibilityLabel="Nome: Jorge Mario" style={[style.defaultText, style.name]}>
           Jorge Mario
        </Text>

        <Text accessibilityLabel="Nickname: gemario" style={[style.defaultText, style.nickname]}>
          gemario
        </Text>

        <Text accessibilityLabel="Descrição: Technology is a big variable, this motivates me to want to 
          explore this world more and more. After all, a little knowledge 
          is always welcome!" 
          style={[style.defaultText, style.description]}>
            Technology is a big variable, this motivates me to want to 
            explore this world more and more. After all, a little knowledge 
            is always welcome!
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={style.textButton}>Open in GitHub</Text>
          </View>
        </Pressable>
        
      </View >
    </SafeAreaView>
    
  ) 
   
};

export default App; 

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex:1, //expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: fontDarkColorGithub,
    borderWidth: 7,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 35,
    marginBottom: 5,
    fontSize: 35,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 25,
    color: fontDarkColorGithub,
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: fontDarkColorGithub,
    padding: 20,
    borderRadius: 15,
    marginTop:60,
  },
  textButton: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  }
})