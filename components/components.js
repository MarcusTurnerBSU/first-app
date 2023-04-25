import React from "react"
import { TouchableOpacity, StyleSheet, Image } from "react-native"

export default function StyledButton ({ onPress, source }) {
    return (
        <TouchableOpacity
        style={[ styles.button ]}
        onPress={onPress}
        >
            <Image source={source}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center"    
    }
})