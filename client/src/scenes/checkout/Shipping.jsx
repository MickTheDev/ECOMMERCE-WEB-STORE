import React from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import AdressForm from './AdressForm';
const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m='30px auto'>
      <Box>
        <Typography sx={{ mb: '15px' }}>Billing Information</Typography>
        <AdressForm />
      </Box>
    </Box>
  );
};

export default Shipping;
