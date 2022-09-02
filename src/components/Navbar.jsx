import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 0.05, textDecoration: 'none' }}
          >
            <Link to="/goit-react-hw-08-phonebook">Homepage</Link>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/contacts">Contacts</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/register">Register</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
