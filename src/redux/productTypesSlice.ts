import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IProductType } from "../types";
import { api } from "../api/api";

interface IInitialState {
  productTypes: IProductType[];
  status: "idle" | "loading" | "failed";
}

const initialState = {
  productTypes: [],
  status: "idle",
} as IInitialState;

export const fetchProductTypes = createAsyncThunk(
  "productTypes/fetchProductTypes",
  async () => {
    const response = await api.getProductTypes();
    return response.data as unknown as IProductType[];
  }
);

export const productTypesSlice = createSlice({
  name: "productTypes",
  initialState,
  reducers: {
    addProductType: (state, action: PayloadAction<IProductType>) => {
      state.productTypes.push(action.payload);
    },
    editProductType: (state, action: PayloadAction<IProductType>) => {
      const currentType = (state.productTypes as IProductType[]).filter(
        (type) => type.id === action.payload.id
      )[0];
      for (const key in currentType) {
        if (currentType[key] !== action.payload[key]) {
          currentType[key] = action.payload[key];
        }
      }
    },
    removeProductType: (state, action: PayloadAction<IProductType>) => {
      state.productTypes = (state.productTypes as IProductType[]).filter(
        (type) => type.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductTypes.fulfilled, (state, action) => {
        state.status = "idle";
        state.productTypes = action.payload;
      })
      .addCase(fetchProductTypes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

const { actions, reducer } = productTypesSlice;

export const { addProductType, editProductType, removeProductType } = actions;

export const selectProductTypes = (state: RootState) => state.productTypes.productTypes;
export const selectStatus = (state: RootState) => state.productTypes.status;
export default reducer;
