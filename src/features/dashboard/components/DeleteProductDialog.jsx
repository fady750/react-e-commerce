import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeleteProduct } from '../hooks/useDeleteProduct';

export default function DeleteProductDialog({openDeleteDialog, setOpenDeleteDialog, selectedProduct }) {
  const {isPending, deleteProduct} = useDeleteProduct()
  function handleDeleteProduct(){
    deleteProduct(selectedProduct.id);
    setOpenDeleteDialog(false);
  }

  return (
      <Dialog
        open={openDeleteDialog}
        onClose={()=>setOpenDeleteDialog(false)}
      >
        <DialogTitle id="alert-dialog-title">
          Delete Product
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{selectedProduct?.productName}</strong>? <br />
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button loading={isPending} onClick={()=>setOpenDeleteDialog(false)} >Disagree</Button>
          <Button loading={isPending} onClick={handleDeleteProduct} variant='contained' color='error'>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}