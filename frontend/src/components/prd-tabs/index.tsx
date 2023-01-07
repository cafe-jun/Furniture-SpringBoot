import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
} from "@mui/material";

import React, { useState } from "react";

const ProdcutionTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row></FormGroup>
        {/* <FormLabel component="legend">SERIES</FormLabel> */}
        <RadioGroup name="SERIES" value={value} row>
          <FormControlLabel value="201" control={<Radio />} label="201" />
          <FormControlLabel value="301" control={<Radio />} label="301" />
          <FormControlLabel value="401" control={<Radio />} label="401" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ProdcutionTabs;
