import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { sites } from "../../consts";

type SiteFilterProps = {
    handleSetSite: (site: string) => void,
    currentSite?: string
}

export const SiteFilter = ({handleSetSite, currentSite}: SiteFilterProps) => {
    return <Box sx={{ width:'160px'}}>
            <FormControl fullWidth>
                <InputLabel id="site-filter-label">Site</InputLabel>
                    <Select
                        labelId="site-filter-label"
                        id="site-filter"
                        value={currentSite}
                        label="Site"
                        onChange={(e) => handleSetSite(e.target.value)}
                    >
                        {sites.map((site) => <MenuItem key={site.id} value={site.id}>{site.name}</MenuItem>)}
                    </Select>
        </FormControl>
    </Box>
}