import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F4F4F4",
        //borderWidth: 1
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        //paddingTop: -10,
        //paddingBottom: 10,
        //borderWidth: 1
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
        flex: 0.12,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        //borderWidth: 1
    },
    dateText: {
        color: "#FFFFFF",
        //fontFamily: "Barlow",
        fontWeight: "bold",
        fontSize: 18,
    },
    dayText: {
        color: "#FFFFFF",
        //fontFamily: "Barlow",
        fontWeight: "bold",
        fontSize: 11,
    },
    distanceContainer: {
        backgroundColor: "#B7E8F8",
        width: 140,
        height: 140, 
        borderRadius: 70,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
        //borderWidth: 1,
    },
    distanceNum: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 24,
    },
    distanceText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18
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
    mapContainer: {
        width: "85%",
        height: "35%",
        borderRadius: 20,
        elevation: 3,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    speedTimeContainer: {
        //borderWidth: 1,
        alignItems: "center",
        marginLeft: 35,
        marginRight: 35,
    },
    speedTimeIcon: {
        backgroundColor: "#B7E8F8",
        width: 60,
        height: 60, 
        borderRadius: 30,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
        //borderWidth: 1,
    },
    speedTimeNum: {
        color: "#FF676F",
        fontWeight: "bold",
        fontSize: 24,
    },
    speedTimeText: {
        color: "#FF676F",
        fontWeight: "bold",
        fontSize: 14,
    },
    topContainer: {
        flex: 0.1,
        alignItems: "center",
        paddingTop: "2%",
        //borderWidth: 1,
    },
    topText: {
        fontWeight: "bold",
        fontSize: 24,
    }
})