import { Box } from "@mui/material"

function DialogImage({url, alt}) {
    return (
        <Box
            component="img"
            src={url}
            alt={alt}
            sx={{
                height:"100%",
                flex:1,
                width:"50%",
                aspectRatio:"16/24"
            }}
        />
    )
}

export default DialogImage
