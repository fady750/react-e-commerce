import { Outlet } from 'react-router';
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

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};



function Admin(props) {
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