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

export type RadioItemModel = {
  value: string;
  lable: string;
};

export type RadioGroupModel = {
  title: string;
  items: RadioItemModel[];
};

const ProdcutionTabs = (props: RadioGroupModel) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position"></FormGroup>
        <RadioGroup
          name={props.title}
          value={value}
          row
          style={{ display: "flex", alignItems: "center" }}
        >
          <FormLabel style={{ marginRight: "50px" }}>{props.title}</FormLabel>
          {props.items.map((item) => (
            <FormControlLabel
              value={item.value}
              control={<Radio />}
              label={item.lable}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ProdcutionTabs;
