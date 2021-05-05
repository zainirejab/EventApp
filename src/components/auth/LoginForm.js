import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'semantic-ui-react';
import ModalWrapper from '../modal/ModalWrapper';
import * as Yup from 'yup';
import MyTextInput from '../form/MyTextInput'


const LoginForm = () => {
    return ( 
        <ModalWrapper size='mini' header='Sign in to EventApp'>
            <Formik 
                initialValues={{ email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={values => {
                    console.log(values)
                }} 
            >
                {({isSubmitting, isValid, dirty}) => (
                    <Form className='ui form'>
                        <MyTextInput name='email' placeholder='Email Address' />
                        <MyTextInput name='password' placeholder='Password' type='password' />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            fluid
                            size='large'
                            color='teal'
                            content='Login'
                        />
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
     );
}
 
export default LoginForm;