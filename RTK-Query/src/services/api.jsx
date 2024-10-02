// src/services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API service
export const api = createApi({
  reducerPath: "api", // Optional, default is 'api'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

// Export hooks for usage in functional components, generated for each endpoint
export const { useGetPostsQuery } = api;
