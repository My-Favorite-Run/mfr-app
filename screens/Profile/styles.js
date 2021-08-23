import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        backgroundColor: "#FFFFFF",
        flex: 1
    },
    button: {
        width: "90%",
        borderRadius: 10,
        //drop shadow for ios
        shadowColor: '#000',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 7.49,
        //drop shadow for android
        elevation: 10,
    },
    buttonsContainer: {
        flex: 1.5,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonFacebook: {
        justifyContent: "space-evenly",
        backgroundColor: "#2E3E96",
    },
    buttonGoogle: {
        justifyContent: "space-evenly",
        backgroundColor: "#3A73E3",
    },
    signUpContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    signUpLink: {
        fontFamily: "Roboto",
        color: "#FF676F",
        fontSize: 13,
        fontWeight: "bold",
        paddingTop: 30,
    },
    signUpText: {
        fontFamily: "Roboto",
        fontSize: 13,
        paddingTop: 30,
    },
    logo: {
        width: "100%",
        resizeMode: "stretch"
    },
    profilePic: {
        width: 50,
        height: 50
    }
})