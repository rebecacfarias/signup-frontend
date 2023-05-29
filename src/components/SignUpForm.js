import{ Button, TextField, Grid, Container, FormControl, Typography} from '@mui/material'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Label from './Label'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import * as messages from '../utils/ErrorMessages'
import PasswordInput from './PasswordInput'


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
                .max(120, messages.ERROR_MAX_LENGTH),
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
    const { user, setUser } = useContext(UserContext)

    const saveUser = (values) => {
        setUser(values)
        console.log(user)
        navigate('/dashboard')
    }


    //TODO check email autocomplete with errors, check delay in displaying errors; Check console errors
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
                                    <Label htmlFor="firstName" >First Name</Label>
                                    <Field component={TextField} name="firstName" type="text"  
                                    onChange={(e) => {
                                        setFieldValue('firstName', e.target.value);
                                        setFieldTouched('firstName', true);
                                    }}
                                    error={touched.firstName && errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    />
                                    </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <Label variant="outlined" htmlFor="lastName"><Typography variant="body1">Last Name</Typography></Label>
                                    <Field component={TextField} name="lastName" type="text" 
                                    onChange={(e) => {
                                            setFieldValue('lastName', e.target.value);
                                            setFieldTouched('lastName', true) 
                                    }}
                                    error={touched.lastName && errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    />
                                    
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <Label htmlFor='company'>Company</Label>
                                    <Field component={TextField}  name="company" id="company" type="text"
                                    onChange={(e) => {
                                        setFieldValue('company', e.target.value);
                                        setFieldTouched('company', true) 
                                        }}
                                        error={touched.company && errors.company}
                                        helperText={touched.company && errors.company}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <Label htmlFor='jobTitle'>Job Title</Label>
                                    <Field component={TextField}  name="jobTitle" id="jobTitle" type="text" 
                                    onChange={(e) => {
                                        setFieldValue('jobTitle', e.target.value);
                                        setFieldTouched('jobTitle', true) 
                                    }}
                                    error={touched.jobTitle && errors.jobTitle}
                                    helperText={touched.jobTitle && errors.jobTitle}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <Label htmlFor="workEmail">Work Email</Label>
                                    <Field component={TextField}  name="workEmail" type="email" 
                                    onChange={(e) => {
                                        setFieldValue('workEmail', e.target.value);
                                        setFieldTouched('workEmail', true) 
                                    }}
                                    error={touched.workEmail && errors.workEmail}
                                    helperText={touched.workEmail && errors.workEmail}
                                    />
                                
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <Label htmlFor="password">Password</Label>
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
        </Container>
       
    )
}

export default SignUpForm


