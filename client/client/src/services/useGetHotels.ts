import React from 'react';
import { useQuery } from '@tanstack/react-query';

type GetHotelOptions = {
    site: string,
    size: string,
    dates: (string | undefined)[]
}

export const useGetHotels = ({site, size, dates}: GetHotelOptions) => {
    const url = `http://localhost:3001/hotels?` + new URLSearchParams({site, size, from: (dates[0] || ''), until: (dates[1] || '')})
    const queryFn = () => fetch(url, {method: 'GET'});
    return useQuery({ 
        queryKey: ['hotels'], 
        queryFn,
        enabled: false,
        
    });
  };