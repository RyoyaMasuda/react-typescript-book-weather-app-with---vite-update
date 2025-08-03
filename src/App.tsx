import Title from './component/Title'; 
import Form from './component/Forms';
import Result from './component/Results';
import { useState } from 'react';

const APP = () => {
    
    const [city, setCity] = useState<string>("")

    const getWeather = (e: any) => {
        e.preventDefault()
        fetch("http://localhost:3001/weather")
            .then(res => res.json()).then(data => console.log(data))
    }

    return (
        <div>
            <Title/>
            <Form setCity={setCity} getWeather={getWeather}/>
            <Result/>
        </div>
    )
}

export default APP