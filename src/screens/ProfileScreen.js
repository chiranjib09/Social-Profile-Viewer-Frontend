import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../actions/userActions';

const ProfileScreen = ({ route }) => {
    const { userId } = route.params;
    const dispatch = useDispatch();
    const user = useSelector(state => state.userState.user);

    useEffect(() => {
        dispatch(fetchUserById(userId));
    }, [dispatch, userId]);

    if (!user) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.profilePicture }} style={styles.profilePic} />
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <Text style={styles.userAge}>{user.age} years old</Text>
            <Text style={styles.userBio}>{user.bio}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10
    },
    userAge: {
        fontSize: 16,
        marginBottom: 10
    },
    userBio: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center'
    }
});

export default ProfileScreen;
