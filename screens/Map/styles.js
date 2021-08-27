import { Dimensions, StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Dimensions.get('window').height / 3
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 180
    },
    markerIcon: {
        width: 20,
        height: 20
    },
    MapControls: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: Dimensions.get('window').width,
        alignContent: "space-around",
        justifyContent: "space-around"
    },
    button: {
        margin: 15,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
    },
    startButton: {
        margin: 30,
        height: 50,
        width: 50
    },
    currentLocationPin: {
        width: 16,
        height: 20
    },
    MapHeader: {
        backgroundColor: "white",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    MapFooter: {
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})