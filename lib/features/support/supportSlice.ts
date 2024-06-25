import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface SupportSliceState {
    supports: SupportType[];
    status: "idle" | "loading" | "failed";
    lastId?: string
}

const initialState: SupportSliceState = {
    supports: [],
    status: "idle"
};

export const supportSlice = createAppSlice({
    name: "support",
    initialState,
    reducers: (create) => ({
        create: create.reducer((state, action: PayloadAction<SupportType>) => {
            const id = uuidv4()
            state.supports = [...state.supports, {
                ...action.payload,
                id: id
            }
            ];
            state.lastId = id
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
        }),
        clearLastId: create.reducer((state) => {
            state.lastId = undefined
        })
    }),
    selectors: {
        selectSupport: (support) => support.supports,
        selectStatus: (support) => support.status,
        selectLastId: (support) => support.lastId,
    },
});

export const { create, update, deleteSupport, clearLastId } =
    supportSlice.actions;

export const { selectSupport, selectStatus, selectLastId } = supportSlice.selectors;
export default supportSlice.reducer
