import * as React from 'react';
import ActionMenu from '../../components/ActionMenu';
import { Box } from '@mui/material';



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
    field: 'isActive',
    headerName: 'Is Active',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    maxWidth: 100,
    renderCell: (params) => {
      const active = params.value === true;
      return (
        <Box
          sx={{
            borderRadius: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: active ? 'rgba(76, 175, 80, 0.15)' : 'rgba(244, 67, 54, 0.15)',
            color: active ? '#4CAF50' : '#F44336',
            fontWeight: 600,
            fontSize: '0.8rem',
            textTransform: 'capitalize',
            width: '70px',
            height:"30px",
            my:"7px"
          }}
        >
          {active ? 'Active' : 'Inactive'}
        </Box>)
    },
    

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


