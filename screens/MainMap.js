import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import DropDownPicker from 'react-native-dropdown-picker';
import Scanner from "./Scanner";
//import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageZoom from 'react-native-image-pan-zoom';
import ImageView from "react-native-image-view";
import {block} from "react-native-reanimated";
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function MainMap({navigation, route}) {
    const [floor, setFloor] = useState(1);
    const [qrData, setQrData] = useState("");
    const [click, setClick] = useState(false);
    const images = [{
        url: '',
        props: {
            // Or you can set source directory.
            source: require('../assets/premierEtage.png')
        }
    }]
    if (route.params?.data) {//route.params?.type
        //WE GO HERE WHEN DATA FROM QR SCAN IS AVAILABLE, then we display the appropriate floor or room

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.map} onPress={displayImage}>
                <Image style={styles.image} source={require('../assets/premierEtage.png')}/>
            </TouchableOpacity>
            <Modal visible={click} transparent={true}  >
                <ImageViewer imageUrls={images} enableSwipeDown={true} onCancel={close}/>
            </Modal>
            <View style={styles.dropDownPicker}>
                <Text>Enter the floor:</Text>
                <DropDownPicker style={styles.dropDown}
                                items={[
                                    {label: '1', value: '1', icon: () => <Icon name="flag" size={18} color="#900"/>},
                                    {label: '0', value: '0', icon: () => <Icon name="flag" size={18} color="#900"/>},
                                ]}
                                multiple={false}
                                defaultValue={floor.toString()}
                                containerStyle={{height: 40}}
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
    function close(){
        setClick(false);
    }
    function displayImage(){
        setClick(true);
    }
    function maMap() {
        alert('voila');
    }

    function press() {
        navigation.navigate('Scanner');
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    bigImage: {
        display: "none",
    },
    map: {
        flex: 4,
        overflow: 'hidden',
    },
    imagestyle: {
        width: '100%',
        height: 'undefined',
        aspectRatio: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    dropDownPicker: {
        flex: 1
    },
    scan: {
        top: 60,
        flex: 1
    },
    dropDown: {
        backgroundColor: '#fafafa',
    }

})
