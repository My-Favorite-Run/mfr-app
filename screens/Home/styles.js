import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "white"
    },
    currDayContainer: {
        backgroundColor: "#B7E8F8",
        width: "12%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
    },
    dayContainer: {
        backgroundColor: "#FF676F",
        width: "12%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 8
    },
    daysContainer:{
        //change later
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "5%",
    },
    dateText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18,
    },
    dayText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 11,
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
        shadowOffset: {width: 0, height: 9,},
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        //drop shadow for android
        elevation: 18,
    },
    iconContainer: {
        marginTop: 15,
        padding: 30,
    },
    text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})