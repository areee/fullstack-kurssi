import axios from 'axios'
const baseUrl = 'http://api.weatherstack.com/current'

const getWeather = (accessKey, capital) => {
    const request = axios.get(`${baseUrl}?access_key=${accessKey}&query=${capital}`)
    return request.then(response => response.data)
}

export default { getWeather }