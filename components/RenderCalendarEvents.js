import React from 'react'
import moment from 'moment'
import { StyleSheet, View, Text, FlatList } from 'react-native'

const momentFormat = "ddd, MMMM D [at] hh:mm A"

export default function RenderCalendarEvents(props) {

    return (
        <View syle={styles.container}>
            <FlatList
                data={props.eventsArray}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.event} key={index}>
                            <Text style={styles.itemTitle}>{item?.summary}</Text>
                            {/* next two lines render dates conditionally*/}
                            {/* all day events only have a date property, while other events have a dateTime property*/}
                            <Text>Start: {item.start.dateTime ? moment(item?.start.dateTime).format(momentFormat) : moment(item?.start.date).format("ddd, MMMM D")}</Text>
                            <Text>End: {item.end.dateTime ? moment(item?.end.dateTime).format(momentFormat) : moment(item?.end.date).format("ddd, MMMM D")}</Text>
                        </View>
                    )
                }}
                ItemSeparatorComponent={() => (<View style={styles.separator} />)}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    event: {
    },
    separator: {
        height: 10
    },
    itemTitle: {
        fontWeight: 'bold'
    }
})