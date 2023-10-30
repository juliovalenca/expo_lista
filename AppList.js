import { StatusBar } from "expo-status-bar"; 
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function AppList(){
    return(
        <View style = {styles.container}>
            <Text>Se não fosse Enrique eu estava lascado!</Text>
            <StatusBar style="light"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
     flex: 1,      
     backgroundColor: '#D93600',
     alignItems: 'center',
     justifyContent:'center'  
    } 
 });

