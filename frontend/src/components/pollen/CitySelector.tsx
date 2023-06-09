import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useApi from "../../hooks/useApi";
import Spinner from "./Spinner";
import useMediaQuery from "@mui/material/useMediaQuery";
import NotificationModal from "./NotificationModal";
import { ULR_BASE_PATH } from "../../utils/helper";

interface CitySelectorProps {
  citySelector: (city: string) => void;
  selectedCity: string;
}

export default function CitySelector(props: CitySelectorProps) {
  const smallScreen = useMediaQuery("(min-width:700px)");
  const { data, isLoading, error } = useApi(`${ULR_BASE_PATH}/pollen/cities`);
  const handleChange = (event: SelectChangeEvent) => {
    props.citySelector(event.target.value);
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <FormControl sx={{ m: 1, width: smallScreen ? "160px" : "80vw" }}>
        <InputLabel id='demo-simple-select-helper-label'>City</InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={props.selectedCity}
          label='City'
          onChange={handleChange}
        >
          {data?.cities.map((city: any) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && (
        <NotificationModal
          title='Error'
          message="Something went wrong Can't get data from database."
        />
      )}
    </div>
  );
}
