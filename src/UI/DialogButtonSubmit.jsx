import { Button } from "@mui/material"

function DialogButtonSubmit({loading, FormID, Delete = false, children}) {
    return (
        <Button type="submit"  loading={loading} form={FormID} color={Delete ? "error" : "secondary" } variant="contained" >
            {children}
        </Button>
    )
}

export default DialogButtonSubmit
