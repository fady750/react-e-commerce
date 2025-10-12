import { Button } from "@mui/material"

function DialogButtonCancel({onClickFunction, loading,  children}) {
    return (
        <Button loading={loading} onClick={onClickFunction}>
            {children}
        </Button>
    )
}

export default DialogButtonCancel
