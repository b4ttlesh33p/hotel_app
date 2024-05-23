import { DateRange, LocalizationProvider, SingleInputDateRangeField } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { Dayjs } from "dayjs";
import React from "react";

type DateFilterProps = {
    dates: DateRange<Dayjs>,
    handleSetDates: (dates: DateRange<Dayjs>) => void
}

export const DateFilter = ({ dates, handleSetDates}: DateFilterProps) => {
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SingleInputDateRangeField label="Departure - Return" value={dates} onChange={(newDates) => handleSetDates(newDates)}/>
  </LocalizationProvider>
}