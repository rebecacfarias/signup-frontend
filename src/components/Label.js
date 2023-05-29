import { Typography } from "@mui/material";

function Label(props){
    return(
        <label htmlFor={props.htmlFor} ><Typography variant="body1" mb={2}>{props.children}</Typography></label>
    )
}

export default Label