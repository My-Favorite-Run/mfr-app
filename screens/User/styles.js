import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    activityCardContainer: {
        height: "60%",
        width: "50%",
        borderRadius: 10,
        marginLeft: 20,
        //drop shadow for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        //drop shadow for android
        elevation: 5,
    },
    activityContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: "tomato"
    },
    activityTitle: {
        //fontFamily: "Barlow",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "tomato"
    },
    background: {
        flex: 1,
        backgroundColor: "white",
    },
    bottomTab: {
        height: "10%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "tomato",


    },
    header: {
        backgroundColor: "white",
        height: "12%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        //drop shadow for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 9, },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        //drop shadow for android
        elevation: 18,
    },
    iconContainer: {
        marginTop: 15,
        padding: 30,
    },
    progressChartContainer: {
        width: "90%",
        height: "80%",
        borderRadius: 20,
        //drop shadow for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        //drop shadow for android
        elevation: 5,
    },
    progressContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: "tomato",
    },
    progressTitle: {
        //fontFamily: "Barlow-Regular",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10,
    },
    userContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: "tomato"
    },
    profilePic: {
        width: 50,
        height: 50
    }
})