import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPizzas} from "../fetchPizzas.ts";
import {ILoadingStatus} from "../Types/ILoadingStatus.ts";
import {IPagination} from "../Types/IPagination.ts";
import {MokkyResponse} from "../Types/MokkyResponse.ts";



const DEFAULT_PAGINATION: IPagination  = {
    total_pages: 1,
    current_page: 1,
    per_page: 8,
    remaining_count: 0
}

export interface IPagesState {
    paginationData: IPagination,
    loading: ILoadingStatus
}

const initialState: IPagesState = {
    paginationData: DEFAULT_PAGINATION,
    loading: ILoadingStatus.IDLE
}

export const pagesSlice = createSlice({
    name: "pages",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.paginationData.current_page = action.payload;
        },
        setPagesState: (state, action: PayloadAction<IPagination>) => {
            state.paginationData = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.loading = ILoadingStatus.PENDING;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<MokkyResponse>) => {
            state.loading = ILoadingStatus.SUCCEEDED;
            console.log(action.payload.meta);
            state.paginationData = action.payload.meta;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.loading = ILoadingStatus.FAILED;
            state.paginationData = DEFAULT_PAGINATION;
        });
    }
});

export const {setCurrentPage, setPagesState} = pagesSlice.actions;

export default pagesSlice.reducer;