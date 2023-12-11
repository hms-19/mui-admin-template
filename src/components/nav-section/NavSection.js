import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { Dashboard, PaymentOutlined } from '@mui/icons-material';
import { StyledNavItem, StyledNavItemIcon } from './styles';
import Transaction from 'src/pages/Transaction/Transaction';


export default function NavSection() {
  return (
    <Box>
      <List disablePadding sx={{ p: 1 }}>
          <StyledNavItem
            component={RouterLink}
            to='/dashboard'
            sx={{
              '&.active': {
                color: 'text.primary',
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              },
            }}
          >
            <StyledNavItemIcon>
                <Dashboard />
            </StyledNavItemIcon>

            <ListItemText disableTypography primary='Dashboard' />
          </StyledNavItem>
          <StyledNavItem
            component={RouterLink}
            to='/transaction'
            sx={{
              '&.active': {
                color: 'text.primary',
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              },
            }}
          >
            <StyledNavItemIcon>
                <PaymentOutlined />
            </StyledNavItemIcon>

            <ListItemText disableTypography primary='Transaction' />
          </StyledNavItem>
      </List>
    </Box>
  );
}
