import { Alert } from "react-native"


//Returns a list of calendar ids that the user is using
export const getCalendarIds = async (userAccessToken) => {
    let res = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
        method: 'GET',
        headers: { "Authorization": `Bearer ${userAccessToken}` },
    })

    res = await res.json()

    let calendarIds = []
    res.items.forEach(calendar => {
        calendarIds.push(calendar.id)
    })

    return calendarIds
}


// Looks through all the calendars and returns the combined events for the next week
// takes in a userAccessToken and uses getCalendarIds() function inside 
export const getWeeklyEvents = async (userAccessToken) => {
    console.log(userAccessToken) // just for debugging

    const calendarIds = await getCalendarIds(userAccessToken) // gets all the calendar ids

    var events = [] // will return in events list in the future

    // calculating todays date and the date 7 days ahead
    const today = new Date()
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).toISOString()


    //loops through calendarIds to get all the events for each id, then pushes them into the events array
    for (const id of calendarIds) {
        let reqURL = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?timeMin=${today.toISOString()}&timeMax=${nextWeek}`
        let res = await fetch(reqURL, {
            headers: { "Authorization": `Bearer ${userAccessToken}` }
        })

        res = await res.json()

        if (res.items != undefined) { //this checks if the calender is not invalid
            for (const { summary, start, end, id } of res.items) { // need to edit this line if we want to get more properties from the api
                if (summary != undefined && start != undefined && end != undefined) { //making sure that 
                    events.push({ summary, start, end, id }) //pushing all the valid events
                }
            }
        }


    }


    return events
}