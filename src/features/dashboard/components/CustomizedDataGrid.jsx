import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../internals/data/gridData';
import { useDashboardProducts } from '@/features/dashboard/hooks/useDashboardProducts';
import Spinner from '@/UI/Spinner';
import ProductsDialog from './ProductsDialog';
import DeleteProductDialog from './DeleteProductDialog';

export default function CustomizedDataGrid() {
  const {isPending, Products} = useDashboardProducts()
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  

  React.useEffect(()=>{
    const openHandler = (e) => {
      setSelectedProduct(e.detail);
      setOpenDialog(true);
    };
    window.addEventListener("openEditDialog", openHandler);
    return () => window.removeEventListener("openEditDialog", openHandler);
  }, [isPending]);
  React.useEffect(() => {
    const deleteHandler = (e) => {
      setSelectedProduct(e.detail);
      setOpenDeleteDialog(true);
    };
    window.addEventListener("deleteProduct", deleteHandler);
    return () => window.removeEventListener("deleteProduct", deleteHandler);
  }, [isPending]);
  if(isPending) <Spinner/>

  
  return (
    <>
      <DataGrid
        checkboxSelection
        rowHeight={75}
        rows={Products}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        loading={isPending}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: 'outlined',
                size: 'small',
              },
              columnInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              operatorInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: 'outlined',
                  size: 'small',
                },
              },
            },
          },
        }}
      />
      <ProductsDialog openDialog={openDialog} setOpenDialog={setOpenDialog} selectedProduct={selectedProduct} />
      <DeleteProductDialog openDeleteDialog={openDeleteDialog} setOpenDeleteDialog={setOpenDeleteDialog} selectedProduct={selectedProduct} />
    </>
  );
}
