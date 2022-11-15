import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isLoading: false,
  value: [],
}

export const infoSlice = createSlice({
  name: 'dataInfo',
  initialState,
  reducers: {
    startLoadingInfo: (state,) => {
      state.isLoading = true;
    },
    //Este state trae los datos en español
    setInfoEsp: (state, action) => {

      state.isLoading = false;
      state.value = action.payload.value
    },
    //Este state trae los datos en ingles
    setInfoEn: (state, action) => {

      state.isLoading = false;
      state.value = action.payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingInfo, setInfoEsp, setInfoEn } = infoSlice.actions

export default infoSlice.reducer