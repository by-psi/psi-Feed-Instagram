import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, FlatList, View } from 'react-native';

import Lista from './src/Lista';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      feed:[
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', //'src/img/Perfis/fotoPerfil1.jpg', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png', //'src/img/Publicacoes/foto1.jpg',  
          liked: true, 
          likers: 7         
        },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', //'src/img/Perfis/fotoPerfil2.jpg', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', //'src/img/Publicacoes/foto2.jpg',  
          liked: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', //'src/img/Perfis/fotoPerfil3.jpg', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png', //'src/img/Publicacoes/foto3.jpg',  
          liked: false, 
          likers: 3
        }
      ]
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
                source={require('./src/img/send.png')}
                style={styles.send}
              />
          </TouchableOpacity>
        </View>
        <Text></Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={this.state.feed}
            renderItem={ ({item}) => <Lista data={item} /> }
          />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 80,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    padding: 5,
    borderBottomWidth: 0.1,
    shadowColor: '#000',
    elevation: 5
  },
  logo:{

  },
  send:{
    width: 23,
    height: 23
  }
});


export default App;