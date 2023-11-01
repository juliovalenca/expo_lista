import React from 'react';
import {Stelysheet, Text,View,TouchableOpacity} from 'react-nateve';

export default function AppItem(props){
    return(
        <View style={style.container}>
            <Text style={style.textItem}>{props.item}</Text>
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.deletButton}>
                    <Text style={style.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
