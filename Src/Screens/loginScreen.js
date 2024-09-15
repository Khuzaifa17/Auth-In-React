import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { color } from '../utils/colors'
import { useNavigation } from '@react-navigation/core'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../utils/firebase'

const LoginScreen = () => {
    const navigtion = useNavigation();
    const [Securetex , setSecuretext]= useState(true);
    const [email, Setemail]= useState('');
    const [password, Setpassword]= useState('');
    const [isloading, Setisloading] =useState(false);

    const handleLogin = async ()=>{
        if(!email || !password){
            Alert.alert('Validation Failed','Please Enter both email and password');
            return;
        }
        Setisloading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Success','Logged in Successfully');
            navigtion.navigate('Welcome');
        } catch (error) {
            console.log(error);
            Alert.alert('Login Failed',error.message); 
        }
        Setisloading(false);
    }
   
    const BackNavigation=()=>{
        navigtion.goBack()
    }
    const SignupScreenNavigation = ()=>{
        navigtion.navigate('Signup')
    }
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name={"arrow-back-outline"} color={color.white} size={24} onPress={BackNavigation}/>
      </TouchableOpacity>
      <Text style={styles.Heading1}>Hey,</Text>
      <Text style={styles.Heading2}>Welcome</Text>
      <Text style={styles.Heading3}>Back</Text>

      <View style={styles.formContainer}>
        <View style={styles.TextField }>
            <Ionicons name={"mail-outline"} color={color.grey} size={24} />
            <TextInput style={styles.textInput} placeholder='Enter you email' keyboardType='email-address' value={email} onChangeText={Setemail}>    
            </TextInput>      
        </View>
      </View>

     <View style={styles.formContainer}>
        <View style={styles.TextField}>
            <Feather name={"lock"} color={color.grey} size={24} />
            <TextInput 
                 style={styles.textInput} 
                 placeholder='Enter your password'
                 keyboardType='default'  
                 value={password}
                 onChangeText={Setpassword}
                 secureTextEntry={Securetex} />    
            <TouchableOpacity onPress={() => setSecuretext(prev => !prev)}>
                <Ionicons name={Securetex ? "eye-off" : "eye"} color={color.grey} size={24} />
            </TouchableOpacity>      
        </View>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.loginButton}>
               {isloading?(
                <ActivityIndicator size={'large'} color={color.Secondary}></ActivityIndicator>
               ):( <Text style={styles.loginText} onPress={handleLogin}>Login</Text>)}
            </TouchableOpacity>
            <Text style={styles.continuText}>or Continue With</Text>
            <TouchableOpacity style={styles.googleWrapper}>
                <Image source={require('../Images/Google.png')} style={styles.google}></Image>
                <Text style={styles.googleText}>Google</Text>
            </TouchableOpacity>
        <View style={styles.accountwrapper}>
            <Text>Don't have an Account?</Text>
            <TouchableOpacity style={styles.signupwrapper}>
                <Text style={styles.signuptext} onPress={SignupScreenNavigation}>Sign up</Text>
            </TouchableOpacity>
        </View>
     </View>
      
      
 </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: color.white,
    },
    backButton:{
        backgroundColor: color.grey,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center",
        marginBottom: 20
    },
    Heading1:{
        fontSize: 32,
        color: color.grey,
    },
    Heading2:{
        fontSize: 32,
        color: color.grey
    },
    Heading3:{
        fontSize: 32,
        color: color.grey
    },
    formContainer:{
        marginTop: 20,
    },
    TextField:{
        height: 50,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: color.Secondary,
        paddingHorizontal: 20,
        flexDirection:'row',
        alignItems:'center'
    },
    textInput:{
    flex: 1,
    paddingHorizontal:10
    },
    forgotPassword:{
        marginVertical:10,
        color: color.primary,
        textAlign: 'right',

    },
    loginButton:{
        backgroundColor: color.primary,
        width: '100%',
        height:40,
        borderRadius: 100,
        alignContent:'center',
        marginTop:15,
    },
    loginText:{
        color: color.white,
        fontWeight:'bold',
        textAlign:"center",
        padding:10

    },
    continuText:{
        color: color.primary,
        alignSelf:'center',
        marginVertical:10,
    },
    google:{
        height:18,
        width:18
    },
    googleWrapper:{
        flexDirection:'row',
        alignItems:'center',
        height: 40,
        borderWidth:1,
        borderColor: color.primary,
        borderRadius:100,
        justifyContent:'center',
    },
    googleText:{
        paddingHorizontal: 10,
    },
    accountwrapper:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        color:color.primary
    },
    signuptext:{
        color: color.primary,
        fontWeight: 'bold',
        paddingLeft:10
    }
})