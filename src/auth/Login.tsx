import React from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export function Login() {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.subtitle}>RideRover</Text>
                <Text style={styles.description}>Your ultimate destination for bike enthusiasts.</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                        style={styles.buttonGoogle} 
                        onPress={() => handleLogin("Google")}
                    >
                        <View style={styles.buttonContent}>
                            <Icon name="google" size={25} color="#FFFFFF" />
                            <Text style={styles.buttonText}>Login with Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonApple} 
                        onPress={() => handleLogin("Apple")}
                    >
                        <View style={styles.buttonContent}>
                            <Icon name="apple1" size={25} color="#FFFFFF" />
                            <Text style={styles.buttonText}>Login with Apple</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Not a member?</Text>
                        <Text style={styles.signupBold}> Sign Up</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        marginBottom: 5,
        color: "#333333",
    },
    subtitle: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333333",
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        color: "#6B7280",
    },
    buttonsContainer: {
        width: "100%",
        alignItems: "center",
    },
    buttonGoogle: {
        backgroundColor: "#DB4437",
        width: "100%",
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: 13,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    buttonApple: {
        backgroundColor: "#000000",
        width: "100%",
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: 12,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        marginLeft: 10,
        color: "#FFFFFF",
    },
    signupContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    signupText: {
        color: "#6B7280",
    },
    signupBold: {
        fontWeight: "bold",
        color: "#F59E0B",
    },
});


// Dummy function to handle login action
function handleLogin(provider: string) {
    console.log(`Login with ${provider}`);
}
