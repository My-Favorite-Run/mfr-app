import { Dimensions, StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 90
    },
    markerIcon: {
        width: 20,
        height: 20
    },
    MapControls: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        alignContent: "space-around",
        justifyContent: "space-around"
    }

})