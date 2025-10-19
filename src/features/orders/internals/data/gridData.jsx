import * as React from 'react';
import ActionMenu from '../../components/ActionMenu';



export const columns = [
  { 
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    align: 'center',
    flex: 0.3,
    maxWidth: 90,
  },
  {
    field: 'user_id',
    headerName: 'user_id',
    headerAlign: 'center',
    align: 'center',
    flex: 0.3,
    maxWidth: 90,
  },
  {
    field: 'orderStatus',
    headerName: 'orderStatus',
    headerAlign: 'center',
    align: 'center',
    flex: 0.4,
    maxWidth: 150,
  },
  {
    field: 'deliveryStatus',
    headerName: 'deliveryStatus',
    headerAlign: 'center',
    align: 'center',
    flex: 0.4,
    maxWidth: 150,
  },
  {
    field: 'subTotal',
    headerName: 'subTotal',
    headerAlign: 'center',
    align: 'center',
    flex: 0.5,
    maxWidth: 110,
  },  
  {
    field: 'discount',
    headerName: 'discount',
    headerAlign: 'center',
    align: 'center',
    flex: 0.5,
    maxWidth: 80,
  },
  {
    field: 'totalOrder',
    headerName: 'totalOrder',
    headerAlign: 'center',
    align: 'center',
    flex: 0.5,
    maxWidth: 110,
  },
  {
    field: 'couponCode',
    headerName: 'coupon Code',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    maxWidth: 150,
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


