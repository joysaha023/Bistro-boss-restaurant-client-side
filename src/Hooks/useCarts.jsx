import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCarts = () => {
    //using tanstack query
    const axiosSecure = useAxiosSecure();
    const { data: cart = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    })
    return[cart]
};

export default useCarts;