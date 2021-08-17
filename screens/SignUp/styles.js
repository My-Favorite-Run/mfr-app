import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    accountText: {
        fontFamily: "Roboto",
        fontSize: 13
    },
    background: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }, 
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
    forgotContainer: {
        flex: 1,
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between"
    },
    forgotText: {
        color: "#939393",
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontWeight: "500",
        fontSize: 13,
    }, 
    inputBackground: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        margin: 12,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#939393",
        width: "70%",
    },
    inputStyle: {
        fontFamily: "Roboto",
        fontSize: 18,
        color: "#939393"
    },
    logo: {
        width: "100%",
        height: "50%"
    },
    signUpContainer: {
        flex: 1,
        flexDirection: "row",
        width: "70%",
        alignItems: "flex-end",
        justifyContent: "center",
        marginBottom: 10
    },
    signUpText: {
        fontFamily: "Roboto",
        color: "#FF676F",
        fontSize: 13,
        fontWeight: "bold"
    }
})