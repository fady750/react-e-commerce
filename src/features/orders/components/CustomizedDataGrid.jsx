import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../internals/data/gridData';
import useReadOrders from '../hooks/useReadOrders';
import EditOrderDialog from './EditOrderDialog';
import DeleteOrderDialog from './DeleteOrderDialog';

export default function CustomizedDataGrid() {
  const {isPending, orders} = useReadOrders()
  const [selectedOrder, setSelectedOrder] = React.useState(null);
  const [editOrderDialog, setEditOrderDialog] = React.useState(false);
  const [deleteOrderDialog, setDeleteOrderDialog] = React.useState(false);
  React.useEffect(()=>{
    const openHandler = (e) => {
      setSelectedOrder(e.detail);
      setEditOrderDialog(true);
    };
    window.addEventListener("openEditDialog", openHandler);
    return () => window.removeEventListener("openEditDialog", openHandler);
  }, [isPending]);

  React.useEffect(()=>{
    const openHandler = (e) => {
      setSelectedOrder(e.detail);
      setDeleteOrderDialog(true);
    };
    window.addEventListener("openDeleteDialog", openHandler);
    return () => window.removeEventListener("openDeleteDialog", openHandler);
  }, [isPending]);
  return (
    <>
      <DataGrid
        checkboxSelection
        rowHeight={75}
        rows={orders}
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
      { selectedOrder && <EditOrderDialog editOrderDialog={editOrderDialog} setEditOrderDialog={setEditOrderDialog} selectedOrder={selectedOrder} />}
      <DeleteOrderDialog selectedOrder={selectedOrder} setDeleteOrderDialog={setDeleteOrderDialog} deleteOrderDialog={deleteOrderDialog} />
    </>
  );
}
