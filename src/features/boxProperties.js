import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    slice: "boxProperties",
    minMax: [0,250]
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0,500],
    slice: "boxProperties",
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    slice: "boxProperties",
    type: "range",
    minMax: [0,500]
  },
  {
    inputNumber: 4,
    name: "Background color",
    value: "#fff",
    type: "color",
    slice: "boxProperties",
  },
]


export const boxSlice = createSlice({
  name:"boxProperties",
  initialState,
  reducers: {
    updateBoxvalue: (state, action) => {

    },
  }
})

export const {updateBoxvalue} = boxSlice.actions
export default boxSlice.reducer