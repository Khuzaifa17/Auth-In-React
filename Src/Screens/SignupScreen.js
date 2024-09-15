import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { color } from '../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth, db } from '../utils/firebase'
import { setDoc,doc } from 'firebase/firestore'


const SignupScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] =useState('');
    const [password , setPassword]= useState('');
    const [phone, setPhone]= useState('');
    const [isloading, Setisloading]= useState(false)
    const handleSignUp= async ()=>{
        if(!email || !password || !phone){
           Alert.alert('Validation Failed','Please fill all the fields');
           return;
        }
        Setisloading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user= userCredential.user;
            await setDoc(doc(db, "User",user.uid),{
                email: email,
                phone: phone,
                userid: user.uid  
            });
            console.log("Id",userCredential);
            Alert.alert("Success", "User Registered Successfully!");
            navigation.navigate("Welcome");
        } catch (error) {
            console.error(error);
            Alert.alert("Registration Failed", error.message);
        }
        Setisloading(false);
    }
    const BackNavigation=()=>{
        navigation.goBack();
    }
    const loginaNavigation=()=>{
        navigation.navigate('Login');
    }
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.iconwrapper} onPress={BackNavigation}>
        <Ionicons name="arrow-back" size={24} color={color.white}></Ionicons>
      </TouchableOpacity>
      <Text style={styles.heading1}>Let's get</Text>
      <Text style={styles.heading2}>started</Text>
      <View style={styles.formContainer}>
        <View style={styles.textfield}>
             <Ionicons name='mail-outline' size={20}color={color.grey}></Ionicons>
            <TextInput style={styles.InputText} placeholder='Enter your Email'value={email} onChangeText={setEmail}></TextInput>
        </View>
        <View style={styles.textfield}>
            <Feather name='smartphone' size={20} color={color.grey}></Feather>
            <TextInput style={styles.InputText} placeholder='Enter your Phone Number' value={phone} onChangeText={setPhone}></TextInput>
        </View>
        <View style={styles.textfield}>
          <Feather name='lock'size={20} color={color.grey}></Feather>
            <TextInput style={styles.InputText} placeholder='Enter your Password' value={password} onChangeText={setPassword}></TextInput>
        </View>
        <TouchableOpacity style={styles.singnUpbutton}>
            {isloading?(
                <ActivityIndicator size={'large'} color={color.Secondary}></ActivityIndicator>
            ):(
                <Text style={styles.signuptext} onPress={handleSignUp}>Sign Up</Text>
            )}
        </TouchableOpacity>
        <Text style={styles.continue}>or Continue with</Text>
        <TouchableOpacity style={styles.googlewrapper}>
            <Image source={require('../Images/Google.png')} style={styles.google}></Image>
            <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.havingaccount}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity>
                <Text style={styles.loginText} onPress={loginaNavigation}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default SignupScreen

const styles = StyleSheet.create({
    loginText:{
        color:color.primary,
        fontWeight:'bold',
        paddingLeft:10,
    },
    havingaccount:{
        flexDirection:'row',
        marginTop:10,
        alignSelf:'center'
    },
    googleText:{
        padding:10,

    },
    googlewrapper:{
        marginTop:20,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderColor:color.grey,
        borderWidth:1,
        flexDirection:'row',
        borderRadius:100
    },
    google:{
        height:18,
        width: 18,
    },
    continue:{
        marginTop:15,
        alignSelf:'center',

    },
    Container:{
        flex:1,
        backgroundColor: color.white,
        padding:20,
    },
    iconwrapper:{
        marginTop:10,
        height: 40,
        width : 40,
        backgroundColor: color.grey,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20
    },
    heading1:{
        fontSize: 32,
        color:color.grey,
        fontWeight:'bold',

    },
    heading2:{
        fontSize: 32,
        color:color.grey,
        fontWeight:'bold'
    },
    textfield:{
        marginTop:20,
        height: 50,
        borderWidth:1,
        borderColor: color.Secondary,
        borderRadius:100,
        paddingHorizontal: 20,
        alignItems:'center',
        flexDirection:'row'
    },
    formContainer:{ 
        flex:1,
    },
    InputText:{
        paddingLeft:10,
        flex:1 
    },
    singnUpbutton:{
        marginTop:20,
        height: 50,
        backgroundColor: color.primary,
        borderRadius: 100,
    },
    signuptext:{
        color: color.white,
        textAlign:"center",
        padding:14,
        fontWeight:'bold'
    }
})