import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/userAction';
import { RootState } from '../store/store';

const ProfileScreen = () => {

    const isSignedIn = useSelector((state: RootState) => state.userData.isSignedIn);
    const userName = useSelector((state: RootState) => state.userData.userName);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            {isSignedIn ? (
                <View>
                    <Text style={styles.text}>Hello {userName}</Text>
                    <Button title='Logout' onPress={() => dispatch(logoutAction())} />
                </View>

            ) :
                (
                    <View>
                        <Text style={{ color: 'red' }}>
                            Please Sign In
                        </Text>
                    </View>
                )}
        </View>
    )
}

export default ProfileScreen

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