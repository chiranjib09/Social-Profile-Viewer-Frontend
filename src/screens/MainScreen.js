import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userState.users);
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        setFilteredUsers(
            users.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search by name..."
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                data={filteredUsers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.userContainer}
                        onPress={() => navigation.navigate('Profile', { userId: item.id })}
                    >
                        <Image source={{ uri: item.profilePicture }} style={styles.profilePic} />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text style={styles.userAge}>{item.age} years old</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 1
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    userInfo: {
        flex: 1
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    userAge: {
        fontSize: 14,
        color: '#666'
    }
});

export default MainScreen;
