import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { updateEvent, createEvent } from '../redux/eventActionsCreator'
import * as Yup from 'yup';
import MyTextInput from "./form/MyTextInput";
import MyTextArea from "./form/MyTextArea";
import { categoryData } from "../api/categoryData";
import MySelectInput from "./form/MySelectInput";
import MyDateInput from "./form/MyDateInput";

function EventForm ({ match, history }) {
    const dispatch = useDispatch()
    const selectedEvent = useSelector((state) =>
     state.event.events.find((e) => e.id === match.params.id))
    
     const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city:'',
        venue: '',
        date: ''
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Title can not be empty'),
        category: Yup.string().required('Category can not be empty'),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required(),
    })

    return ( 
        <Segment clearing>
            
            <Formik 
                initialValues={initialValues} 
                validationSchema = {validationSchema}
                onSubmit={(values) => {
                    selectedEvent 
                    ? dispatch(updateEvent({...selectedEvent, ...values})) 
                    : dispatch(
                        createEvent({
                            ...values,
                            id: cuid(),
                            hostedBy: 'Bob',
                            attendees: [],
                            hostPhotoURL: '/assets/user.png'
                        })
                    ) 
                history.push('/events')
                }}>
                    {({isSubmitting, dirty, isValid}) => (
                        <Form className='ui form'>
                        <Header sub color='teal' content='Event Details' />
                        <MyTextInput name='title' placeholder='Event title'/>
                        <MySelectInput name='category' placeholder='Category' options={categoryData} />
                        <MyTextArea name='description' placeholder='Description' rows={4} />
                        <Header sub color='teal' content='Event Location Details' />
                        <MyTextInput name='city' placeholder='City'/>
                        <MyTextInput name='venue' placeholder='Venue'/>
                        <MyDateInput 
                            name='date'
                            placeholderText='Event date'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm a'
                        />
                        
                        <Button 
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting }
                            type='submit' 
                            floated='right' 
                            positive 
                            content='Submit' 
                        />
                        <Button 
                            disabled={isSubmitting}
                            as={Link} 
                            to='/events' 
                            type='submit' 
                            floated='right' 
                            content='Cancel'
                        />
                    </Form>
                    )}        
            </Formik>
        </Segment>
     );
}
 
export default EventForm;
