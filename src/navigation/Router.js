import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GalleryPage, FavoritesPage } from '../screens';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator initialRouteName='gallery'>
            <Stack.Screen name="gallery" component={GalleryPage} options={{title: 'My Gallery'}}/>
            <Stack.Screen name="fav" component={FavoritesPage} options={{title: 'My Favorites'}}/>
        </Stack.Navigator>
    )
}