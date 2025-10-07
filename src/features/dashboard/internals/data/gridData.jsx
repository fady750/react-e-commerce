import * as React from 'react';
import ActionMenu from '../../components/ActionMenu';



export const columns = [
  { field: 'productName', headerName: 'Product Name', flex: 1.5, minWidth: 200 },
  {
    field: 'id',
    headerName: 'ID',
    flex: 0.5,
    minWidth: 80,
  },
  {
    field: 'category',
    headerName: 'Category',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'total_quantity',
    headerName: 'Total Quantity',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'real_price',
    headerName: 'Real Price',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'discount',
    headerName: 'Discount',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    flex: 0.5,
    minWidth: 150,
  },

  {
    field: "actions",
    headerName: "Actions",
    align:'left',
    flex:1,
    width: 20,
    sortable: false,
    filterable: false,
    renderCell: (params) => <ActionMenu  params={params} />,
  },
];


