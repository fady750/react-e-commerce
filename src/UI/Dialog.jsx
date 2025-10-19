import { Dialog } from "@mui/material";
import { createContext } from "react";
import ButtonCancel from "./DialogButtonCancel";
import ButtonSubmit from "./DialogButtonSubmit";
import DialogContainer from "./DialogContainer";
import DialogContent from "./DialogContent";
import DialogForm from "./DialogForm";
import DialogImage from "./DialogImage";

const DialogContext = createContext();

function DialogCC({children, StateDialog, setDialog, onCloseFunction}) {
    return (
        <DialogContext.Provider value={{}} >
            <Dialog open={StateDialog} onClose={onCloseFunction} fullWidth>
                {children}
            </Dialog>
        </DialogContext.Provider>
    )
}


DialogCC.Container = DialogContainer
DialogCC.Content = DialogContent
DialogCC.Form = DialogForm
DialogCC.Image = DialogImage
DialogCC.ButtonSubmit = ButtonSubmit
DialogCC.ButtonCancel = ButtonCancel





export {DialogCC}
