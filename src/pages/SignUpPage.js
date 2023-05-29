import SignUpForm from "../components/SignUpForm";
import { Box, Container, Typography } from "@mui/material"

function SignUpPage(){
    return(
            <Container maxWidth="sm">
                <Box sx={{textAlign: 'center', mb: 6, mt: 6}}>
                    <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
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