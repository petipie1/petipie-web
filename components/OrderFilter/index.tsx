import React, { useState } from "react";
import { MenuItem, Grid, TextField } from "@mui/material";
import Button from "components/Base/Button";
import StyledSelect from "components/PetForm/StyledSelect";

const OrderFilter = (props: any) => {
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleFromDateChange = (event: any) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event: any) => {
    setToDate(event.target.value);
  };

  const handleGetOrders = () => {
    props?.getOrders(status, fromDate, toDate);
  };

  return (
    <Grid
      item
      container
      spacing={2}
      sx={{ m: 2 }}
      alignItems="center"
      justifyContent={"center"}
      maxWidth={"sm"}
    >
      <Grid item xs={3}>
        <StyledSelect onChange={handleStatusChange} value={status}>
          <MenuItem value="">
            <em>Select Status</em>
          </MenuItem>
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="Preparing">Preparing</MenuItem>
          <MenuItem value="Ready">Ready</MenuItem>
          <MenuItem value="Shipped">Shipped</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Declined">Declined</MenuItem>
        </StyledSelect>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          type="date"
          label="From Date"
          value={fromDate}
          onChange={handleFromDateChange}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          type="date"
          label="To Date"
          value={toDate}
          onChange={handleToDateChange}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Button onClick={handleGetOrders} fullWidth title="Get Orders" />
    </Grid>
  );
};

export default OrderFilter;
