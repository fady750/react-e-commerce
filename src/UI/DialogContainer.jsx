import { DialogContent } from "@mui/material"

function DialogContainer({ children }) {
    return (
        <DialogContent  dividers>
            {children}
        </DialogContent>
    )
}

export default DialogContainer
