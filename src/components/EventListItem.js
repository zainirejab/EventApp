import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Icon, List, Item, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { deleteEvent } from '../redux/eventActionsCreator'
import { format } from 'date-fns'

    const EventListItem = ({ event }) => {
    const dispatch = useDispatch()
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Assigned by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(event.date, 'd MMMM yyyy h:mm a')}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee} key={attendee.id} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button color='red' floated='right' content='Delete' onClick={() => dispatch(deleteEvent(event.id)) } />
                <Button color='blue' floated='right' content='View' as={Link} to={`/events/${event.id}`} />    
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem

// () => deleteEvent(event)