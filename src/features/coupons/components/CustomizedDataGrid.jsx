import * as React from 'react';
import Spinner from '@/UI/Spinner';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../internals/data/gridData';
import CreateCouponDialog from "./CreateCouponDialog";
import useReadCoupons from '@/features/coupons/hooks/useReadCoupons'
import EditCouponDialog from './EditCouponDialog';
import DeleteCouponDialog from './DeleteCouponDialog';

export default function CustomizedDataGrid() {
  const {isPending, Coupons} = useReadCoupons();
  const [selectedPCoupon, setSelectedCoupon] = React.useState(null);
  const [editCouponDialog, setEditCouponDialog] = React.useState(false);
  const [deleteCouponDialog, setDeleteCouponDialog] = React.useState(false);

  if(isPending) <Spinner/>
  
  React.useEffect(()=>{
    const openHandler = (e) => {
      setSelectedCoupon(e.detail);
      setEditCouponDialog(true);
    };
    window.addEventListener("openEditDialog", openHandler);
    return () => window.removeEventListener("openEditDialog", openHandler);
  }, [isPending]);
  React.useEffect(()=>{
      const openHandler = (e) => {
        setSelectedCoupon(e.detail);
        setDeleteCouponDialog(true);
      };
      window.addEventListener("openDeleteDialog", openHandler);
      return () => window.removeEventListener("openDeleteDialog", openHandler);
  }, [isPending]);
  return (
    <>
      <DataGrid
        checkboxSelection
        rowHeight={100}
        rows={Coupons}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
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
      <CreateCouponDialog />
      <EditCouponDialog selectedCoupon={selectedPCoupon} setEditCouponDialog={setEditCouponDialog} editCouponDialog={editCouponDialog} />
      <DeleteCouponDialog deleteCouponDialog={deleteCouponDialog} setDeleteCouponDialog={setDeleteCouponDialog} selectedCoupon={selectedPCoupon} />
    </>
  );
}
