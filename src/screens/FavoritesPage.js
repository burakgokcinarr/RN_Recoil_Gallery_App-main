import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { favoriteImage } from '../atom/AtomState';
import { useRecoilState } from 'recoil';
import { MasonryFlashList } from "@shopify/flash-list";
import { ImageCard } from '../components';

const NUMBER_COLUMN_COUNT = 2;

export default function FavoritesPage() {

    const [favData, setFavData] = useRecoilState(favoriteImage);
    //console.log("favData = ", favData);

    return (
        <MasonryFlashList
            data={favData}
            numColumns={NUMBER_COLUMN_COUNT}
            renderItem={({ item, columnIndex }) => <ImageCard key={columnIndex}  data={item}/>}
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
        />
    )
}