import ContactForm from 'components/ContactForm';

import { TextField, Button, Grid } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const ContactsPage = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" marginTop={3}>
      <TextField
        id="outlined-basic"
        label="Search for contacts"
        variant="outlined"
        sx={{ m: 2 }}
      />
      <Button
        variant="contained"
        sx={{ py: 2 }}
        endIcon={<AddCircleRoundedIcon />}
      >
        Add
      </Button>
      <ContactForm />
    </Grid>
  );
};

export default ContactsPage;
