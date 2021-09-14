import React, { useEffect } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Button, Icon, Card, FAB } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export const Header = () => {
    const navigation = useNavigation();

    const handleNotif = () => {
        navigation.navigate('Notifications')
    }
    // when profile icon pressed, always navigate to user screen, not the last screen the user was on in the stack
    const handleSettings = () => {
        navigation.navigate('ProfileStack', {screen: 'User'})
    }
    return(
        <View style={styles.header}>
            <Icon
                name="bell-outline"
                type="material-community"
                color="#FF676F"
                size={40}
                containerStyle={styles.iconContainer}
                onPress={handleNotif}
            />
            <Icon
                name="account-circle"
                type="material-community"
                color="#FF676F"
                size={40}
                containerStyle={styles.iconContainer}
                onPress={handleSettings}
            />
        </View>
    )
}

export const DistanceInfo = () => {
    return(
        <View style={styles.distanceContainer}>
            <Icon
                name="shoe-print"
                type="material-community"
                color="#FFFFFF"
                size={60}
            />
            <Text style={styles.distanceNum}>
                0
            </Text>
            <Text style={styles.distanceText}>
                Miles
            </Text>
        </View>
    )
}

export const SpeedInfo = () => {
    return(
        <View style={styles.speedTimeContainer}>
            <View style={styles.speedTimeIcon}>
                <Icon
                    name="run-fast"
                    type="material-community"
                    color="#FFFFFF"
                    size={35}
                />
            </View>
            <Text style={styles.speedTimeNum}>
                0
            </Text>
            <Text style={styles.speedTimeText}>
                MPH
            </Text>

        </View>
    )
}

export const TimeInfo = () => {
    return(
        <View style={styles.speedTimeContainer}>
            <View style={styles.speedTimeIcon}>
                <Icon
                    name="timer-sand"
                    type="material-community"
                    color="#FFFFFF"
                    size={35}
                />
            </View>
            <Text style={styles.speedTimeNum}>
                0
            </Text>
            <Text style={styles.speedTimeText}>
                Minutes
            </Text>

        </View>
    )
}

export const MapView = () => {
    return(
        <View style={styles.mapContainer}>
            <Text>
                Map
            </Text>
        </View>
    )
}

export const AddButton = () => {
    const navigation = useNavigation();

    const handleAdd = () => {
        navigation.navigate('Map')
    } 
    return(
        <Icon
            name="plus-circle"
            type="material-community"
            color="#FF676F"
            size={50}
            onPress={handleAdd}
            containerStyle={{
                width: 50,
                height: 50,
                borderRadius: 25,
                textAlign: "center",
                justifyContent: "center",
                alignSelf: "center", 
            }
            }
        />
    )
}

//renders container for 5 day containers and arrows
export const GetDays = () => {
    const [day1, setDay1] = React.useState('')
    const [date1, setDate1] = React.useState('')
    const [day2, setDay2] = React.useState('')
    const [date2, setDate2] = React.useState('')
    const [day3, setDay3] = React.useState('')
    const [date3, setDate3] = React.useState('')
    const [day4, setDay4] = React.useState('')
    const [date4, setDate4] = React.useState('')
    const [day5, setDay5] = React.useState('')
    const [date5, setDate5] = React.useState('')
    const today = new Date()
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    const [arrowOffset, setArrowOffset] = React.useState('')

    setDay = (offset) => {
        var num = (new Date().getDay() + offset + arrowOffset) % 7
        //take care of negative indexing
        if (num < 0) {
            var fac = Math.abs(arrowOffset) / 5
            num = (num + (fac * 7)) % 7
        }
        var day = days[num]
        return day  
    }
    setDate = (offset) => {
        var date = new Date()
        date.setDate(date.getDate() + offset + arrowOffset) 
        return date.getDate()
    }

    const handleBackArrow = () => {
        setArrowOffset(arrowOffset - 5)
        console.log("back")
    }
    
    const handleNextArrow = () => {
        setArrowOffset(arrowOffset + 5)
        console.log("next")
    }

    useEffect(() => {
        setDay1(setDay(-2))
        setDate1(setDate(-2))
        setDay2(setDay(-1))
        setDate2(setDate(-1))
        setDay3(setDay(0))
        setDate3(setDate(0))
        setDay4(setDay(1))
        setDate4(setDate(1))
        setDay5(setDay(2))
        setDate5(setDate(2))
    })

    return (
        <View style={styles.daysContainer}>
            <Icon
                name = "arrow-left-circle"
                type = "material-community"
                color = "#FF676F"
                onPress = {() => handleBackArrow()}
            />
            {GetDay(day1, date1, today, days)}
            {GetDay(day2, date2, today, days)}
            {GetDay(day3, date3, today, days)}
            {GetDay(day4, date4, today, days)}
            {GetDay(day5, date5, today, days)}
            <Icon
                name = "arrow-right-circle"
                type = "material-community"
                color = "#FF676F"
                onPress = {() => handleNextArrow()}
            />
        </View>
    )
}

//given a day, renders a container for it depending on if the day is today's date
export const GetDay = (day, date, today, days) => {
    if (day == days[today.getDay()] && date == today.getDate()) {
        return(
            <View style={styles.currDayContainer}>
                <Text style={styles.dayText}>
                    {day}
                </Text>
                <Text style={styles.dateText}>
                    {date}
                </Text>
            </View>
        )
    }
    else {
        return(
            <View style={styles.dayContainer}>
                <Text style={styles.dayText}>
                    {day}
                </Text>
                <Text style={styles.dateText}>
                    {date}
                </Text>
            </View>
        )
    }
}

