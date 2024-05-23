import { Button } from "@mui/material";
import React from "react";

type SearchButtonProps = {
    onClick: () => void,
    disabled: boolean
}

export const SearchButton = ({ onClick, disabled }: SearchButtonProps) => {
    return <Button variant="contained" onClick={onClick} disabled={disabled}>Search</Button>
}