import { PRODDUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODDUCTS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODDUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;