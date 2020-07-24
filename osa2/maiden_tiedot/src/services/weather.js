import axios from 'axios'
const baseUrl = 'http://api.weatherstack.com/current'

const getWeather = (accessKey, capital) => {
    const request = axios.get(`${baseUrl}?access_key=${accessKey}&query=${capital}`)
    // request.then(response => {
    //     const current = response.data.current
    //     console.log(current.temperature)
    //     console.log(current.weather_icons[0])
    //     console.log(current.wind_speed)
    //     console.log(current.wind_dir)
    //     //let test = Object.entries(response.data.current)
    //     // console.log(test)
    // })
    return request.then(response => response.data.current)
    // return request.then(response => response.data.current.temperature)
    // return request.then(response => Object.entries(response.data.current))
}

export default { getWeather }