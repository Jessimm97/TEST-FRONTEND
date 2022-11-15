import axios from 'axios'
//peticón axios para la api
export const showInfoApi= axios.create({
    baseURL:'https://raw.githubusercontent.com/javialcocer/test-json/main/data.json'
});


