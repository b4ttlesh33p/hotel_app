import React, { useState } from "react";
import { SiteFilter } from "../Filters/SiteFilter";
import { Box } from "@mui/material";
import { GrouSizeFilter } from "../Filters/GroupSizeFilter";
import { DateFilter } from "../Filters/DateFilter";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import { SearchButton } from "./SearchButton";
import { useGetHotels } from "../../services/useGetHotels";
import { useMutation } from "@tanstack/react-query";

export const SearchHeader = () => {
    const [site, setSite] = useState('')
    const [size, setSize] = useState('')
    const [dates, setDates] = React.useState<DateRange<Dayjs>>(() => [
        dayjs(''),
        dayjs(''),
      ]);
    const { data, isLoading, refetch} = useGetHotels({site, size, dates: dates.map((date) => date?.isValid() ? date?.toISOString() : ''  )})


    const handleSetSite = (value: string) => {
        setSite(value)
    }

    const handleSetSize = (value: string) => {
        const size = Number(value)
        if (!isNaN(size) && size > 0 && size < 11) {
            setSize(String(size))
        }
    }

    const handleSetDates = (dates: DateRange<Dayjs>) => {
        setDates(dates)
    }

    const useHandleOnSubmit = () => {
        refetch()
    }

    const disabled = !site || !size || !dates[0]?.isValid() || !dates[1]?.isValid()

    return <Box sx={{display:'flex', flexDirection:'row', alignContent:'flex-start', p: 2, gap: 2, width:'100%', id:'custom-header'}}>
            <SiteFilter currentSite={site} handleSetSite={handleSetSite}/>
            <GrouSizeFilter groupSize={size} handleSetSize={handleSetSize}/>
            <DateFilter dates={dates} handleSetDates={handleSetDates}/>
            <SearchButton onClick={useHandleOnSubmit} disabled={disabled}/>
        </Box> 
}