import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface SupportSliceState {
    supports: SupportType[];
    status: "idle" | "loading" | "failed";
}

const initialState: SupportSliceState = {
    supports: [],
    status: "idle",
};

export const supportSlice = createAppSlice({
    name: "support",
    initialState,
    reducers: (create) => ({
        create: create.reducer((state, action: PayloadAction<SupportType>) => {
            console.log('created')
            state.supports = [...state.supports, {
                ...action.payload,
                id: uuidv4()
            }
            ];
            console.log(state.supports)
        }),
        update: create.reducer((state, action: PayloadAction<SupportType>) => {
            state.supports = [...state.supports.filter(support => support.id !== action.payload.id),
            {
                ...state.supports.filter(support => support.id === action.payload.id)[0],
                ...action.payload
            }, // update partially
            ];
        }),
        deleteSupport: create.reducer((state, action: PayloadAction<string>) => {
            state.supports = state.supports.filter(support => support.id !== action.payload)
        })
    }),
    selectors: {
        selectSupport: (support) => support.supports,
        selectStatus: (support) => support.status,
    },
});

export const { create, update, deleteSupport } =
    supportSlice.actions;

export const { selectSupport, selectStatus } = supportSlice.selectors;

