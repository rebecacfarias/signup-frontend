import { Box, CircularProgress, Container, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Dashboard(){
    const { user, setUser } = useContext(UserContext)

    return(
            <Container maxWidth="sm">
                <Box sx={{textAlign: 'center', mb: 6, mt: 6}}>
                    <Typography variant="h4" gutterBottom>
                        Welcome aboard {user.firstName}!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        We're preparing your dashboard
                    </Typography>
                    <CircularProgress />
                </Box>
            </Container>

    )
}

export default Dashboard