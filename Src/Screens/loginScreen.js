import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { color } from '../utils/colors'

const LoginScreen = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name={"arrow-back-outline"} color={color.white} size={24} />
      </TouchableOpacity>
      
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: color.white
    },
    backButton:{
        backgroundColor: color.grey,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center",
    }
})