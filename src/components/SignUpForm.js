import{ Button, TextField, Grid, Container, FormControl, Typography, CircularProgress } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import * as messages from '../utils/ErrorMessages'
import PasswordInput from './PasswordInput'
import api from '../client/api'


const validationSchema = Yup.object().shape({
    firstName: Yup.string()
                .required(messages.ERROR_FIELD_REQUIRED('First Name'))
                .max(120, messages.ERROR_MAX_LENGTH),
    lastName: Yup.string()
                .required(messages.ERROR_FIELD_REQUIRED('Last Name'))
                .max(120, messages.ERROR_MAX_LENGTH),
    company: Yup.string()
                .required(messages.ERROR_FIELD_REQUIRED('Company'))
                .max(120, messages.ERROR_MAX_LENGTH),
    jobTitle: Yup.string()
                .max(120, messages.ERROR_MAX_LENGTH)
                .nullable(),
    workEmail: Yup.string()
                .required(messages.ERROR_FIELD_REQUIRED('Work Email'))
                .email(messages.ERROR_INVALID_EMAIL_FORMAT),
    password: Yup.string()
                .required(messages.ERROR_FIELD_REQUIRED('Password')).max(120, messages.ERROR_MAX_LENGTH)
                .min(8, messages.ERROR_MIN_LENGTH_PASSWORD)
                .matches(/^(?=.*[0-9])(?=.*[A-Z])/, messages.ERROR_PASSWORD_RULES)
})

const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    workEmail: '',
    password: ''
}


function SignUpForm(){
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [ isLoading, setIsLoading ] = useState(false)

    async function saveUser(values){
        setIsLoading(true)
        
        console.log(values)
        await api.post( '', JSON.stringify(values))
        .then((res) => {
            console.log(res)
            setUser(res)
            navigate('/dashboard')
        })
        .catch((error)=> console.log(error))
    }

    return(
        <Container maxWidth="sm" sx={{mb:6}}>
            <Formik initialValues={initialValues} 
                    validationSchema={validationSchema}
                    onSubmit={values => saveUser(values)}>

            {({ touched, errors, setFieldTouched, setFieldValue, handleBlur }) => (
                <Form>
                        <Grid container justifyContent="center" alignItems="center" spacing = {2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <label htmlFor="firstName" ><Typography variant="body1" mb={2}>First Name</Typography></label>
                                    <Field component={TextField} name="firstName" type="text"  
                                    onChange={(e) => {
                                        setFieldValue('firstName', e.target.value);
                                        setFieldTouched('firstName', true);
                                    }}
                                    error={touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    />
                                    </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <label htmlFor="lastName" ><Typography variant="body1" mb={2}>Last Name</Typography></label>
                                    <Field component={TextField} name="lastName" type="text" 
                                    onChange={(e) => {
                                            setFieldValue('lastName', e.target.value);
                                            setFieldTouched('lastName', true) 
                                    }}
                                    error={touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    />
                                    
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <label htmlFor='company'><Typography variant="body1" mb={2}>Company</Typography></label>
                                    <Field component={TextField}  name="company" id="company" type="text"
                                    onChange={(e) => {
                                        setFieldValue('company', e.target.value);
                                        setFieldTouched('company', true) 
                                        }}
                                        error={touched.company && !!errors.company}
                                        helperText={touched.company && errors.company}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <label htmlFor='jobTitle'><Typography variant="body1" mb={2}>Job Title</Typography></label>
                                    <Field component={TextField}  name="jobTitle" id="jobTitle" type="text" 
                                    onChange={(e) => {
                                        setFieldValue('jobTitle', e.target.value);
                                        setFieldTouched('jobTitle', true) 
                                    }}
                                    error={touched.jobTitle && !!errors.jobTitle}
                                    helperText={touched.jobTitle && errors.jobTitle}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <label htmlFor="workEmail"><Typography variant="body1" mb={2}>Work Email</Typography></label>
                                    <Field component={TextField}  name="workEmail" type="email" 
                                    onChange={(e) => {
                                        setFieldValue('workEmail', e.target.value);
                                        setFieldTouched('workEmail', true) 
                                    }}
                                    error={touched.workEmail && !!errors.workEmail}
                                    helperText={touched.workEmail && errors.workEmail}
                                    />
                                
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <label htmlFor="password"><Typography variant="body1" mb={2}>Password</Typography></label>
                                    <PasswordInput name="password"/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <Button variant="contained" size="large" type='submit' sx={{width:'100%', textTransform:'none', fontWeight:'bold'}} >Sign Up</Button>
                            </Grid>
                        </Grid>
                </Form>
            )}
            </Formik>
            {isLoading && 
            <Grid container justifyContent="center" alignItems="center" spacing = {2} sx={{mt: 5}}>
                <CircularProgress />
            </Grid>
            }
        </Container>
       
    )
}

export default SignUpForm


