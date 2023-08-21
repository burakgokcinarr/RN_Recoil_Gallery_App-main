import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { favoriteImage } from '../atom/AtomState';
import { useRecoilState } from 'recoil';

export default function ImageCard({ data }) {

    const [favList, setFavList] = useRecoilState(favoriteImage);
    //console.log(favList)
    
    const onFavClicked = () => {
        let index = favList.indexOf(data);
        if (index > -1) {
            setFavList(favList.filter(item => item !== data));
        } else {
            setFavList([...favList, data]);
        }
    }

    return (
        <View key={data.id} style={styles.container}>
            <Image source={{uri: data.url, width: 200, height: 200}} resizeMode='cover'/>
            <Text>{data.title}</Text>
            <View style={styles.favBtn}>
                <AntDesign name={favList.includes(data) ? 'star' : 'staro'} size={40} color="#ddd6fe" onPress={onFavClicked}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    favBtn: {
        position: 'absolute',
        top: 1,
        right: 5,
        padding: 1,
        backgroundColor: '#0e7490',
        borderRadius: 10
    }
})