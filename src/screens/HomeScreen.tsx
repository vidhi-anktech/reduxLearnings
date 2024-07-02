import { Button, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBooks, loginAction } from '../store/userAction'
import { RootState } from '../store/store'
import Book from '../components/books'

const HomeScreen = () => {

    type BookItem = {
        author: string,
        title: string,
        cover_image: string
    }

    const isSignedIn = useSelector((state: RootState) => state.userData.isSignedIn)
    const { userBooks } = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch();

    console.log(JSON.stringify(userBooks, null, 2));

    useEffect(() => {
        dispatch(getUserBooks())
    }, [])

    const renderItem: ListRenderItem<BookItem> = ({ item }) => <Book author={item.author} coverURL={item.cover_image} title={item.title} />

    return (
        // <View style={styles.container}>
        //     <Text style={{ color: 'red' }}>
        //         SignedIn status : {isSignedIn ? 'Yes' : 'No'}
        //     </Text>

        //     {isSignedIn ? (
        //         <View>
        //             <Text style={styles.text}>
        //                 Welcome To Home Screen
        //             </Text>
        //         </View>
        //     ) :
        //         (<View>
        //             <Text style={styles.text}>
        //                 Please Sign In
        //             </Text>
        //             <Button title='Sign In' onPress={() => dispatch(loginAction())} />
        //         </View>)
        //     }
        // </View>

        <View style={styles.container}>
            <FlatList
                data={userBooks}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 15,
    }
})