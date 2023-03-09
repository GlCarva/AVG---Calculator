import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      av1: '',
      av2: '',
      av3: '',
      avd: ''
   }
   handleNumero1 = (text) => {
      this.setState({ av1: text })
   }
   handleNumero2 = (text) => {
      this.setState({ av2: text })
   }
    handleNumero3 = (text) => {
      this.setState({ av3: text })
   }
    handleNumero4 = (text) => {
      this.setState({ avd: text })
   }
   somar = (av1, av2, av3, avd) => {
     let resultado = parseInt(av1) + parseInt(av2) + parseInt(av3) + parseInt(avd)
     
     alert("A Media foi: " + resultado / 4)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nota 1"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleNumero1}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nota 2"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleNumero2}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nota 3"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleNumero3}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nota 4"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleNumero4}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.somar(this.state.av1, this.state.av2, this.state.av3,     this.state.avd )
               }>
               <Text style = {styles.submitButtonText}> Calcular </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 3
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
