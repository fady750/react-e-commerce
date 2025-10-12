import { Box } from "@mui/material"

function DialogContent({children}) {
    return (
        <Box
            sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                flexDirection:"column",
                gap:"1.5rem",
                width:"100%",
                height:"100%"
            }}
        >
            {children}
        </Box>
    )
}

export default DialogContent
