import * as React from 'react';
import ActionMenu from '../../components/ActionMenu';
import { Box } from '@mui/material';



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
    renderCell:(params)=>{
      const status = params.value;

      const statusColors = {
        pending: { color: '#ED6C02', background: 'rgba(237, 108, 2, 0.15)' },
        processing: { color: '#0288D1', background: 'rgba(2, 136, 209, 0.15)' },
        shipped: { color: '#6D4C41', background: 'rgba(109, 76, 65, 0.15)' },
        delivered: { color: '#2E7D32', background: 'rgba(46, 125, 50, 0.15)' },
        cancelled: { color: '#D32F2F', background: 'rgba(211, 47, 47, 0.15)' },
      };

      const { color, background } = statusColors[status?.toLowerCase()] || {
        color: '#9E9E9E',
        background: 'rgba(158, 158, 158, 0.15)',
      };

      return (
        <Box
          sx={{
            // px: 1.5,
            // py: 0.5,
            borderRadius: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: background,
            color: color,
            fontWeight: 600,
            fontSize: '0.8rem',
            textTransform: 'capitalize',
            minWidth: 90,
            height:"30px",
            my:"7px"
          }}
        >
          {status}
        </Box>
      );
      },
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

// pending, Processing, shipped, delivered, cancelled
