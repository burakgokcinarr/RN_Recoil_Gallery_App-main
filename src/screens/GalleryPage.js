import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { fetchAllGalleryData } from '../atom/Selector';
import { useRecoilValue } from 'recoil';
import { MasonryFlashList } from "@shopify/flash-list";
import { ImageCard } from '../components';

const NUMBER_COLUMN_COUNT = 2;

export default function GalleryPage() {

    const navigation  = useNavigation();
    const galleryData = useRecoilValue(fetchAllGalleryData);
    //console.log(galleryData)
    
    useState(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('fav')}
                    title="Show Fav"
                    color="#000000"
                />
            )
        })
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <MasonryFlashList
                data={galleryData}
                numColumns={NUMBER_COLUMN_COUNT}
                renderItem={({ item, columnIndex }) => <ImageCard key={columnIndex}  data={item}/>}
                estimatedItemSize={200}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe'
    },
});