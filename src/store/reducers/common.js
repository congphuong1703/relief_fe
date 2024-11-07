
import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseService } from "../../services/baseService";
import {ACTION_TYPE as ActionType} from "../../constants";

const initialState = {
    loading: false,
    loadingButton: false,
    loadingTable: false
}

export const getMapping = createAsyncThunk(
    "common/getMapping",
    baseService.getMapping
)

export const postMapping = createAsyncThunk(
    "common/postMapping",
    baseService.postMapping
)

export const putMapping = createAsyncThunk(
    "common/putMapping",
    baseService.putMapping
)

export const deleteMapping = createAsyncThunk(
    "common/deleteMapping",
    baseService.deleteMapping
)

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        loadingButton(state, action) {
            switch (action.payload) {
                case ActionType.LOADING_BUTTON:
                    state.loadingButton = !state.loadingButton;
                    break;
                default:
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMapping.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMapping.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(getMapping.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(postMapping.pending, (state) => {
            state.loadingButton = true;
        });
        builder.addCase(postMapping.fulfilled, (state) => {
            state.loadingButton = false;
        });
        builder.addCase(postMapping.rejected, (state) => {
            state.loadingButton = false;
        });
        builder.addCase(putMapping.pending, (state) => {
            state.loadingButton = true;
        });
        builder.addCase(putMapping.fulfilled, (state) => {
            state.loadingButton = false;
        });
        builder.addCase(putMapping.rejected, (state) => {
            state.loadingButton = false;
        });
        builder.addCase(deleteMapping.pending, (state) => {
            state.loadingButton = true;
        });
        builder.addCase(deleteMapping.fulfilled, (state) => {
            state.loadingButton = false;
        });
        builder.addCase(deleteMapping.rejected, (state) => {
            state.loadingButton = false;
        });
    }
})

export default commonSlice;