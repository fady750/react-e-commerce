import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import DialogForm from "./DialogForm";
import { useUpdateProducts } from "../hooks/useUpdateProducts";


function ProductsDialog({openDialog, setOpenDialog, selectedProduct}) {
    const {isPending, updateProduct} = useUpdateProducts()

    return (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
                <DialogTitle>Edit Product</DialogTitle>
                <DialogContent dividers>
                {selectedProduct && (
                    <Box
                    >
                        <div className='flex items-center justify-between gap-6 w-full h-full' >
                            <Box 
                                component="img"
                                src={selectedProduct.images[0]}
                                alt="ProductImage"
                                sx={{
                                    height:"100%",
                                    flex:1,
                                    width:"50%",
                                    aspectRatio:"16/24"
                                }}
                            />
                            <DialogForm selectedProduct={selectedProduct} updateProducts={updateProduct} setOpenDialog={setOpenDialog} />
                        </div>
                    </Box>
                )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button type="submit"  loading={isPending} form="edit-product-form" color="secondary" variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
    )
}




export default ProductsDialog