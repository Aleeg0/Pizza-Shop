import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "./Store.ts";
import {IPagination} from "./Types/IPagination.ts";
import {MokkyResponse} from "./Types/MokkyResponse.ts";

interface IPizzaParams {
    categoryId: number,
    sortBy: {name: string,value: string},
    searchValue: string,
    paginationData: IPagination,
}

export const fetchPizzas =
createAsyncThunk<MokkyResponse, IPizzaParams, { state: RootState }>("pizzas/fetchPizzas", async (params) => {
    const {categoryId, sortBy,searchValue, paginationData: paginationData} = params;
    const urlParams = new URLSearchParams();
    urlParams.append("page", `${paginationData.current_page}`);
    urlParams.append("limit", `${paginationData.per_page}`);
    urlParams.append("sortBy", sortBy.value);
    if (categoryId) {
        urlParams.append("category", categoryId.toString());
    }
    if (searchValue) {
        urlParams.append("title", `*${searchValue}*`);
    }
    const {data} = await axios.get(`https://daa000b52605539c.mokky.dev/pizzas?${urlParams}`);
    console.log(data);
    return data;
})