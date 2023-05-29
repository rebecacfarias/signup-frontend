import SignUpForm from "../components/signup-form";
import { Box, Container, Typography } from "@mui/material"


const useStyles = (theme => ({
    page: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    }
}))

function SignUpPage(){
    return(
            <Container maxWidth="sm">
                <Box sx={{textAlign: 'center', mb: 6, mt: 6}}>
                    <Typography variant="h4" gutterBottom>
                        Nice to meet you!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        We're excited to have you aboard!
                    </Typography>
                </Box>


                <SignUpForm />
            </Container>

    )
}

export default SignUpPage