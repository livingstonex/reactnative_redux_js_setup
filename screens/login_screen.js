import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { onUserLogin, onFetchProducts } from '../redux';

const _LoginScreen = (props) => {
    const { userInfo, onUserLogin, onFetchProducts } = props;
    const { user, products, error } = userInfo;

    console.log(user);
    // console.log("Error: " +error);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => onUserLogin({"email": "test@test.com", "password":"1234567"})}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            {
                user != undefined && <Te xt>{JSON.stringify(user)}</Text>    
            }
            <TouchableOpacity style={styles.button} onPress={() => onFetchProducts()}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            {
                products != undefined && <Text>{JSON.stringify(products)} </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    button: {
        backgroundColor: 'red',
        width: 200,
        height: 50,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "#fff",
        fontSize: 16
    }
});

// mapStateToProps Function
const mapStateToProps = (state) => {
    return {
        userInfo: state.userReducer
    }
};

// Connect to store
const LoginScreen = connect(mapStateToProps, {onUserLogin, onFetchProducts})(_LoginScreen);

export default LoginScreen;
