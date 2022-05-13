import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: this.props.data
    };
    this.loadIcon = this.loadIcon.bind(this);
    this.showLikes = this.showLikes.bind(this);
    this.like = this.like.bind(this);
  }

  loadIcon(liked){
    return liked ? 
      require('../img/liked.png') : 
      require('../img/like.png')
  }

  like(){
    let feed = this.state.feed;

    if(feed.liked === true){
      this.setState({
        feed:{
          ...feed,
          liked: false,
          likers: feed.likers -1
        }
      });
    } else {
      this.setState({
        feed:{
          ...feed, 
          liked: true,
          likers: feed.likers +1
        }      
      });
    }
  }
  
  showLikes(likers){
    let feed = this.state.feed;
    if(feed.likers <= 0){
      return;
    }
    return(
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  render(){
    return(
      <View style={styles.feedArea}>
        <View style={styles.profileArea}>
          <Image
            source={{uri: this.state.feed.imgPerfil}}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{this.state.feed.nome}</Text>
        </View>
        <Image
          resizeMode='cover'
          style={styles.postImage}
          source={{uri: this.state.feed.imgPublicacao}}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={this.loadIcon(this.state.feed.liked)}
              style={styles.btnIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../img/send.png')}
              style={styles.btnIcons}
            />
          </TouchableOpacity>          
        </View>

        {this.showLikes(this.state.likers)}

        <View style={styles.footerArea}>
          <Text style={styles.footerName}>
            {this.state.feed.nome}
          </Text>
          <Text style={styles.footerDescription}>
            {this.state.feed.descricao}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedArea:{

  },
  userName:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000'
  },
  profileImage:{
    width: 42,
    height: 42,
    borderRadius: 25
  },
  postImage:{
    flex: 1,
    height: 400,
    alignItems: 'center',

  },
  profileArea:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  btnIcons:{
    width: 24,
    height: 24
  },
  btnArea:{
    flexDirection: 'row',
    padding: 5
  },
  btnSend:{
    paddingLeft: 5,
  },
  footerArea:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerName:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },
  footerDescription:{
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,
  }
})


export default Lista;