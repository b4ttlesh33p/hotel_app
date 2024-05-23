import { Box, FormControl, InputLabel, TextField } from "@mui/material";
import React from "react";

type GrouSizeFilterProps = {
    handleSetSize: (size: string) => void,
    groupSize: string
}

export const GrouSizeFilter = ({handleSetSize, groupSize}: GrouSizeFilterProps) => {
    return <Box sx={{ width:'160px' }}>
            <FormControl fullWidth>
                <TextField id="group-size-filter-label" label="Group size" variant="outlined" type="number" value={groupSize} onChange={(e) => handleSetSize(e.target.value)}/>
        </FormControl>
    </Box>
}