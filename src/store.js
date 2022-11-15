import { configureStore } from '@reduxjs/toolkit'
import { render } from 'react-dom'
import { infoSlice } from './reducers/infoSlice'
export const store = configureStore({
  reducer: {
    info:infoSlice.reducer
  },
})