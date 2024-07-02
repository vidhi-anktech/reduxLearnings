import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNameAction } from '../store/userAction';
import { RootState } from '../store/store';

const SettingScreen = () => {

    // const isSignedIn = useSelector((state: RootState) => state.userData.isSignedIn);
    // const userName = useSelector((state: RootState) => state.userData.userName);

    const { isSignedIn, userName } = useSelector((state: RootState) => state.userData);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {isSignedIn ? (
                <View>
                    <Text style={styles.text}>Your name : {userName}</Text>
                    <Button title='change name' onPress={() => dispatch(changeNameAction('Vidhi'))} />
                </View>
            ) :
                (
                    <View>
                        <Text style={{ color: 'red' }}>
                            Sign In First
                        </Text>
                    </View>
                )}
        </View>
    )
}

export default SettingScreen

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