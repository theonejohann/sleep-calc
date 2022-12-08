import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const hours = [
  { label: '0:00' },
  { label: '1:00' },
  { label: '2:00' },
  { label: '3:00' },
  { label: '4:00' },
  { label: '5:00' },
  { label: '6:00' },
  { label: '7:00' },
  { label: '8:00' },
  { label: '9:00' },
  { label: '10:00' },
  { label: '11:00' },
  { label: '12:00' },
  { label: '13:00' },
  { label: '14:00' },
  { label: '15:00' },
  { label: '16:00' },
  { label: '17:00' },
  { label: '18:00' },
  { label: '19:00' },
  { label: '20:00' },
  { label: '21:00' },
  { label: '22:00' },
  { label: '23:00' },
];

export default function InputFields() {
  const [value, setValue] = React.useState(hours[0]);
  const [inputValue, setInputValue] = React.useState('');

  const int_input = Number(
    inputValue.substring(0, inputValue.lastIndexOf(':'))
  );

  function Calcuate() {
    if (int_input >= 19) {
      return int_input - 6;
    }
    return int_input + 6;
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '2', outerHeight: '2' },
      }}
    >
      <Stack spacing={10} direction="row">
        <p>I want to wake up at...</p>

        <Autocomplete
          disablePortal
          id="hours-sleep"
          options={hours}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Hours" />}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        />
        <Button
          variant="contained"
          id="sleep-button"
          onClick={() => {
            console.log(inputValue);
            console.log(int_input);
            console.log(Calcuate());
            <script>
              function display()
              {(document.getElementById('output').innerHTML = Calcuate())}
            </script>;
          }}
        >
          When should I sleep?
        </Button>
      </Stack>
      <p>If you want 6 hours of sleep, you should sleep at... </p>
    </Box>
  );
}
