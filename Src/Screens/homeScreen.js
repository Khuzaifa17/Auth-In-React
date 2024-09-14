import { StyleSheet, Text, View , Image, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { color } from '../utils/colors'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
const navigation = useNavigation();
    const loginaNavigation=()=>{
        navigation.navigate('Login')
    }
  return (
    <View style={styles.container}>
      <Image source={require("../Images/logo.png")} style={styles.logo}/>
      <Image source={require("../Images/person.png")} style={styles.person}/>
      <Text style={styles.title}>Lorem Ipsum dolor</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={[styles.loginbuttonWrapper, {
             backgroundColor: color.primary,
        }]}>
            <Text style={styles.loginbuttonText} onPress={loginaNavigation}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginbuttonWrapper,{height:60,}]}>
            <Text style={styles.SignupbuttonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color.white,
        alignItems:'center',
    },
    logo:{
        height: 40,
        width: 140,
        marginVertical:30,
        
    },
    person:{
        height: 250,
        width: 231
    },
    title:{
        width: 292,
        fontSize: 36,
        fontWeight: 'bold',
        color: color.grey,
        marginVertical:20,
        textAlign: 'center',
    },
    description:{
        fontSize: 13,
        width:292,
        textAlign: 'center',
    },
    ButtonContainer:{
        flexDirection: 'row',
        marginTop: 20,
        borderWidth: 1,
        width: "70%",
        borderRadius: 100,
        height: 60,
    },
    loginbuttonWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width: "50%",
        borderRadius: 98


    },
    loginbuttonText:{
        paddingTop: 16,
        fontSize: 16,
        color: color.white,
        flex: 1,
    },
    SignupbuttonText:{
        fontSize: 16,
        paddingBottom: 7,
        

    }
})