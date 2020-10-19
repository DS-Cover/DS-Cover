import {Button, Image, StyleSheet, TextInput, View} from "react-native";
import * as React from "react";
import {useState} from "react";

export default function Home({navigation}) {

    /*const navigation = useNavigation();*/
    const [userName,setUserName]=useState("");

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={require('../assets/LogoDSCOVER.png')}
                    style={{}}
                />

            </View>
            <View style={styles.pseudo}>
                <TextInput
                    onChangeText={(text) => setUserName(text)}
                    style={styles.userName}
                    underlineColorAndroid="transparent"
                    placeholder="Enter user name"
                    placeholderTextColor="#8585ad"
                    autoCapitalize="none"
                />
                <Button
                    onPress={verif}
                    title="Validate"
                    color="#ff471a"
                />
            </View>

        </View>

    );
    function verif() {
        if (userName.trim() === ""){
            alert("Enter a user name!!")
        }
        else{
            navigation.navigate('Museum');
        }

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column'
    },
    logo: {
        flex: 1, flexDirection: 'row', justifyContent: 'center'
    },
    pseudo: {
        flex: 1,
    },
    userName: {
        margin: 15,
        padding: 12,
        height: 40,
        borderColor: '#ff471a',
        borderWidth: 1
    }
})
