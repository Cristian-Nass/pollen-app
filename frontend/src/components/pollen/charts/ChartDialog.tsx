import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import useApi from "../../../hooks/useApi";
import Chart from "./Chart";
import { ULR_BASE_PATH } from "../../../utils/helper";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface ChartDialogProps {
  city: string;
  type: string;
  year: string;
  month: string;
}

interface PollenData {
  city: string;
  level: number;
}

interface ReciveDataType {
  date: string;
  pollenData: PollenData[];
}

export default function ChartDialog(props: ChartDialogProps) {
  const [callApi, setCallApi] = useState(true);
  const { data } = useApi(
    `${ULR_BASE_PATH}/pollen/${props.type}/${props.year}`,
    callApi
  );

  const [resevedData, setResevedData] = useState<ReciveDataType[]>();
  useEffect(() => {
    if (props.type && props.year) {
      setCallApi(false);
    }
    setResevedData(data?.data);
  }, [data, props.type, props.year]);

  const [open, setOpen] = React.useState(false);
  const smallScreen = useMediaQuery("(min-width:700px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectedChartData = resevedData?.map((data) => ({
    date: data.date,
    value: data.pollenData.find((d) => d.city === props.city)?.level,
  }));

  const first = `${props.year}-${props.month}-01`;
  const second = `${props.year}-${props.month}-31`;
  const chartData = selectedChartData?.filter(
    (d) => d.date > first && d.date < second
  );

  return (
    <div>
      <Button
        variant='contained'
        size='medium'
        style={{ textTransform: "none", width: smallScreen ? "200px" : "80vw" }}
        onClick={handleClickOpen}
        disabled={!props.city || !props.type || !props.year || !props.month}
      >
        Submit
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            ></IconButton>
            <Box sx={{ ml: 2, flex: 1 }}></Box>
            <Button autoFocus color='inherit' onClick={handleClose}>
              Back
            </Button>
          </Toolbar>
        </AppBar>
        <Chart chartData={chartData} />
      </Dialog>
    </div>
  );
}
