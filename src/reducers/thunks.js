import { setInfoEsp, setInfoEn, startLoadingInfo } from './infoSlice'
import { showInfoApi } from './showInfo'
export const getInfoXcaret = () => {
    //Aquí se ejecuta la acción del dispatch, recibe clos datos de la consulta Axios,
    // la cual se hace desde showInfoApi, ya sea en ingles o español 
    return async (dispatch, getSate) => {
        dispatch(startLoadingInfo())
        //Petición para traer la info de la Api
        const resp = await showInfoApi.get()
        dispatch(setInfoEsp({ value: resp.data.es }))
    }
}

export const getInfoXcaretEN = () => {
    return async (dispatch, getSate) => {
        dispatch(startLoadingInfo())
        //Petición para traer la info de la Api
        const resp = await showInfoApi.get()
        dispatch(setInfoEn({ value: resp.data.en }))
    }
}