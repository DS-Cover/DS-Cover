import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import DropDownPicker from 'react-native-dropdown-picker';
import Scanner from "./Scanner";
//import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainMap({navigation, route}) {
    const [floor, setFloor] = useState(1);
    const [qrData, setQrData] = useState("");

    if (route.params?.data) {//route.params?.type
        //WE GO HERE WHEN DATA FROM QR SCAN IS AVAILABLE, then we display the appropriate floor or room

    }
    return (
        <View style={styles.container}>
            <View style={styles.map}>
                <Text>here for the map</Text>
            </View>
            <View style={styles.dropDownPicker}>
                <Text>Enter the floor:</Text>
                <DropDownPicker
                    items={[
                        {label: '1', value: '1', icon: () => <Icon name="flag" size={18} color="#900"/>},
                        {label: '0', value: '0', icon: () => <Icon name="flag" size={18} color="#900"/>},
                    ]}
                    multiple={false}
                    defaultValue={floor.toString()}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={(item) => {
                        setFloor(item.value)
                    }}
                />
            </View>
            <View style={styles.scan}>
                <Button
                    type={"outline"}
                    onPress={press}
                    title="Press to scan QR-Code"
                    icon={<Icon name="qrcode" size={30} color="#900"/>}
                />
                <Text>{route.params?.data}</Text>
            </View>
        </View>

    );

    function press() {
        navigation.navigate('Scanner');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    map: {
        flex: 2
    },
    dropDownPicker: {
        flex: 1
    },
    scan: {
        top: 60,
        flex: 2

    }

})
