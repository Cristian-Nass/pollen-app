import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useApi from "../../hooks/useApi";
import Spinner from "./Spinner";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ULR_BASE_PATH } from "../../utils/helper";

interface YearSelectorProps {
  yearSelector: (type: string) => void;
  selectedYear: string;
}

export default function YearSelector(props: YearSelectorProps) {
  const smallScreen = useMediaQuery("(min-width:700px)");
  const { data, isLoading } = useApi(`${ULR_BASE_PATH}/pollen/years`);
  const handleChange = (event: SelectChangeEvent) => {
    props.yearSelector(event.target.value);
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <FormControl sx={{ m: 1, width: smallScreen ? "160px" : "80vw" }}>
        <InputLabel id='demo-simple-select-helper-label'>Year</InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={props.selectedYear}
          label='Year'
          onChange={handleChange}
        >
          {data?.years.map((year: string) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
