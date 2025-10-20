import { Outlet, useNavigate } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from '@/features/dashboard/components/AppNavbar';
import SideMenu from '@/features/dashboard/components/SideMenu';
import Box from "@mui/material/Box";

import AppTheme from '@/UI/AppTheme';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from '@/features/dashboard/theme/customizations'
import { useUser } from '../features/user/useUser';
import { useEffect } from 'react';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};



function Admin(props) {
    const { isPending, userProfile} = useUser();
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isPending && userProfile.isAdmin){
            navigate('/admin/dashboard')
        }
        else if(!isPending && !userProfile.isAdmin){
            navigate('/');
        }
    }, [isPending, userProfile])
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <SideMenu />
                <AppNavbar />
                <Outlet/>
            </Box>
        </AppTheme>
    )
}

export default Admin