import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { getEventsFromFirestore } from '../firestore/firestoreService'
import EventFilters from './EventFilters'
import EventList from './EventList'
import EventListItemPlaceholder from './EventListItemPlaceholder'

const EventDashboard = () => {
    const {events} = useSelector(state => state.event)
    // const events = useSelector(state => state.event.events)
    const {loading} = useSelector(state => state.async)

    useEffect(() => {
        const unsubscribe = getEventsFromFirestore({
            next: snapshot => console.log(snapshot.docs.map(docSnapshot => docSnapshot.data())),
            error: error => console.log(error)
        })
        return unsubscribe
    })

    return (
        <Grid>
            <Grid.Column width={10}>
                {loading &&
                    <>
                      <EventListItemPlaceholder /> 
                      <EventListItemPlaceholder /> 
                    </>
                }
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFilters />
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard

// if wanted to include Accordion but it's not really working
// import EventAccordion from '../routes/EventAccordion'
/* const items = [
    {
        title: 'Battle of Midway',
        content: 'Military historian John Keegan called it the most stunning and decisive blow in the history of naval warfare, while naval historian Craig Symonds called it one of the most consequential naval engagements in world history',
        url: 'https://www.youtube.com/watch?v=Z9GAYEDzEeg'
    },
    {
        title: 'Battle of Guadacanal',
        content: 'The Battle of Guadalcanal was the first major land offensive by Allied forces against the Empire of Japan.',
        url: 'https://www.youtube.com/watch?v=4VzCTvSQ4JY'
    },
    {
        title: 'Battle of Iwo Jima',
        content: 'The Battle of Iwo Jima (19 February – 26 March 1945) was a major battle in which the United States Marine Corps and Navy landed on and eventually captured the island of Iwo Jima',
        url: 'https://www.youtube.com/watch?v=pwVP9nL_mfE'
    }
]

//inside return()
<EventAccordion items={items} /> */