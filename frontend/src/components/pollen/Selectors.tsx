import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import TypeSelector from "./TypeSelector";
import CitySelector from "./CitySelector";
import YearSelector from "./YearSelector";
import MonthSelector from "./MonthSelector";
import ChartDialog from "./charts/ChartDialog";

export default function Selectors() {
  const smallScreen = useMediaQuery("(min-width:700px)");
  const [selectedCity, setSelectedCity] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const [selectedMonth, setSelectedMonth] = React.useState("");

  const citySelector = (city: string) => {
    setSelectedCity(city);
  };

  const monthSelector = (month: string) => {
    setSelectedMonth(month);
  };

  const typeSelector = (type: string) => {
    setSelectedType(type);
  };

  const yearSelector = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <>
      <div className='selector-title'>
        Plese select the city, type, year and the month
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          flexDirection: smallScreen ? "row" : "column",
        }}
      >
        <CitySelector citySelector={citySelector} selectedCity={selectedCity} />
        <TypeSelector typeSelector={typeSelector} selectedType={selectedType} />
        <YearSelector yearSelector={yearSelector} selectedYear={selectedYear} />
        <MonthSelector
          monthSelector={monthSelector}
          selectedMonth={selectedMonth}
        />
      </Box>
      <ChartDialog
        city={selectedCity}
        type={selectedType}
        year={selectedYear}
        month={selectedMonth}
      />
    </>
  );
}
