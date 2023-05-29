import{ Button, TextField, Grid, Container, FormControl, Typography} from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Label from './label'

/**
 * All fields except Job title are required
Validate email format
Do not accept more than 120 characters for all fields (except email)
Show accurate error messages in case the fields are invalid
The password should have these requirements:
At least 8 characters
At least 1 digit
At least 1 uppercase letter
 */

// TODO pass to Utils
const ERROR_MAX_LENGTH = "Maximum 120 characters"

const ERROR_FIELD_REQUIRED = (fieldName) => `${fieldName} is required`

const ERROR_MIN_LENGTH_PASSWORD = "Minimum 8 characters"

const ERROR_INVALID_EMAIL_FORMAT = "Invalid email format"

const ERROR_PASSWORD_RULES = "Password must contain at least 1 digit and 1 uppercase letter"

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
                .required(ERROR_FIELD_REQUIRED('First Name'))
                .max(120, ERROR_MAX_LENGTH),
    lastName: Yup.string()
                .required(ERROR_FIELD_REQUIRED('Last Name'))
                .max(120, ERROR_MAX_LENGTH),
    company: Yup.string()
                .required(ERROR_FIELD_REQUIRED('Company'))
                .max(120, ERROR_MAX_LENGTH),
    jobTitle: Yup.string()
                .max(120, ERROR_MAX_LENGTH),
    workEmail: Yup.string()
                .required(ERROR_FIELD_REQUIRED('Work Email'))
                .email(ERROR_INVALID_EMAIL_FORMAT),
    password: Yup.string()
                .required(ERROR_FIELD_REQUIRED('Password')).max(120, ERROR_MAX_LENGTH)
                .min(8, ERROR_MIN_LENGTH_PASSWORD)
                .matches(/^(?=.*[0-9])(?=.*[A-Z])/, ERROR_PASSWORD_RULES)
})

const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    workEmail: '',
    password: ''
}

const saveUser = (values) => {
    console.log(`hi ${values}`);
};


function SignUpForm(){
    return(
        <Container maxWidth="sm" sx={{mb:6}}>
            <Formik initialValues={initialValues} 
                    validationSchema={validationSchema}
                    onSubmit={values => saveUser(JSON.stringify(values))}>

            {({ touched, errors, setFieldTouched, setFieldValue }) => (
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
                                    error={touched.firstName && Boolean(errors.firstName)}
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
                                    error={touched.lastName && Boolean(errors.lastName)}
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
                                        error={touched.company && Boolean(errors.company)}
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
                                    error={touched.jobTitle && Boolean(errors.jobTitle)}
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
                                    error={touched.workEmail && Boolean(errors.workEmail)}
                                    helperText={touched.workEmail && errors.workEmail}
                                    />
                                
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                    <Label htmlFor="password">Password</Label>
                                    <Field component={TextField} name="password" type="password" 
                                    onChange={(e) => {
                                        setFieldValue('password', e.target.value);
                                        setFieldTouched('password', true) 
                                    }}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                    />
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


