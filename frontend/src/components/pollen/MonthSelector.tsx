import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MonthSelectorProps {
  monthSelector: (city: string) => void;
  selectedMonth: string;
}

export default function MonthSelector(props: MonthSelectorProps) {
  const smallScreen = useMediaQuery("(min-width:700px)");
  const handleChange = (event: SelectChangeEvent) => {
    props.monthSelector(event.target.value);
  };

  const months = [
    { name: "January", value: "01" },
    { name: "February", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "September", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" },
  ];

  return (
    <div>
      <FormControl sx={{ m: 1, width: smallScreen ? "160px" : "80vw" }}>
        <InputLabel id='demo-simple-select-helper-label'>Month</InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={props.selectedMonth}
          label='Month'
          onChange={handleChange}
        >
          {months?.map((month) => (
            <MenuItem key={month.value} value={month.value}>
              {month.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
