import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button, Image } from 'react-native';

// Importante realizar os imports abaixo
import { connect } from 'react-redux';
import { addUser } from './components/actions/place';


class App extends Component {

  state = {

    user: {
      // O props.user... é retornado do mapStateToProps configurado no final do código.
      name: this.props.user.name, // Retorna as informações contidas no state global.
      idade: this.props.user.idade, 
    },

  }

  // Envia para o state do Redux a informação digitada.
  userSubmitHandler = () => {
    this.props.add({ ...this.state })
    {
    }
  }
  // Altera o state local Name.
  nameChangeHandler = (value) => {
    this.setState({ user: { ...this.state.user, name: value } });
  }
  // Altera o state local Idade.
  idadeChangeHandler = (value) => {
    this.setState({ user: {...this.state.user, idade: value } });
  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>

          <Image resizeMode={'contain'} style={styles.logo} source={require('./logo-redux.png')} />

          <Text style={styles.textInput}>NOME:</Text>
          <TextInput
            placeholder="Adicionar nome"
            style={styles.sInput}
            value={this.state.user.name}
            onChangeText={this.nameChangeHandler}
          ></TextInput>

          <Text style={styles.textInput}>IDADE:</Text>
          <TextInput
            placeholder="Adicionar idade"
            style={styles.sInput}
            value={this.state.user.idade}
            onChangeText={this.idadeChangeHandler}
          ></TextInput>

          <Button color='#8a2be2' title='ADICIONAR NO REDUX'
            style={styles.sButton}
            onPress={this.userSubmitHandler}
          />


          <View style={styles.infosRedux}>

            <Text style={styles.textInput}>INFORMAÇÕES SALVAS NO REDUX</Text>
            <Text style={{ fontSize: 15,  marginTop: 10 }}>Nome: {this.props.user.name}</Text> 
            <Text style={{ fontSize: 15 }}>Idade: {this.props.user.idade}</Text>
          </View >


        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  logo: {
    width: 200, 
    height: 100, 
    marginBottom: 10, 
  },

  text: {
    fontSize: 15, 
  },

  infosRedux: {
    borderRadius: 5, 
    padding: 10, 
    marginTop: 50, 
    backgroundColor: '#F0FFFF', 
    borderWidth: 1, 
    borderColor: '#8a2be2' 
  },

  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%'
  },
  sInput: {
    paddingStart: 15,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#8a2be2',
    backgroundColor: '#F5F5F5',
    width: '70%'
  }, 

  textInput: {
    fontWeight: "bold",
    color: '#8a2be2'
  },  
  sButton: {
    width: '30%'
  },
});


// Retorna dados armazenados no redux
const mapStateToProps = ({ itens }) => {
  return {
    user: {
      name: itens.user.name,
      idade: itens.user.idade

     /* itens.user.name -> 
     itens: É retornado do store, 
     user: É retornado do initialState do reducer,
     name: atributos do objeto user do initialState.
     */

    },


  }
}

// Envia os dados via dispatch e actions para o reducer
const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addUser(name))

    // para utilizar use this.props.add()
    }
  }
}

// Necessário inserir connect para atualização do redux no component
export default connect(mapStateToProps, mapDispatchToProps)(App)