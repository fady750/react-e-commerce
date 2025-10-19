import * as React from 'react';
import ActionMenu from '../../components/ActionMenu';



export const columns = [
  { field: 'couponCode', headerName: 'Coupon Code', flex: 1, minWidth: 100 },
  { 
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    align: 'center',

    flex: 0.2,
    maxWidth: 50,
  },
  {
    field: 'description',
    headerName: 'Description',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'percent',
    headerName: 'Percent',
    headerAlign: 'center',
    align: 'center',
    // flex: 1,
    minWidth: 30,
  },
  {
    field: "actions",
    headerName: "Actions",
    headerAlign: 'left', 
    align:'left',
    flex:0.5,
    width: 20,
    sortable: false,
    filterable: false,
    renderCell: (params) => <ActionMenu  params={params} />,
  },
];


