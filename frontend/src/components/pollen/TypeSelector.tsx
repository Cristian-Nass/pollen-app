import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useApi from "../../hooks/useApi";
import Spinner from "./Spinner";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ULR_BASE_PATH } from "../../utils/helper";

interface TypeSelectorProps {
  typeSelector: (type: string) => void;
  selectedType: string;
}

export default function TypeSelector(props: TypeSelectorProps) {
  const smallScreen = useMediaQuery("(min-width:700px)");
  const { data, isLoading } = useApi(`${ULR_BASE_PATH}/pollen/types`);
  const handleChange = (event: SelectChangeEvent) => {
    props.typeSelector(event.target.value);
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <FormControl sx={{ m: 1, width: smallScreen ? "160px" : "80vw" }}>
        <InputLabel id='demo-simple-select-helper-label'>Type</InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={props.selectedType}
          label='Type'
          onChange={handleChange}
        >
          {data?.types.map((type: any) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
