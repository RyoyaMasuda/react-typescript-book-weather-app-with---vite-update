import Title from './component/Title'; 
import Form from './component/Forms';
import Result from './component/Results';
import { useState } from 'react';

type ResultState = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

const APP = () => {
    
    const [city, setCity] = useState<string>("")

    const [results, setResults] = useState<ResultState>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    })

    const getWeather = (e: any) => {
        e.preventDefault()
        fetch("http://localhost:3001/weather")
            .then(res => res.json()).then(data => {
                setResults(
                    {
                        country: data.location.country,
                        cityName: data.location.name,
                        temperature: data.current.temp_c,
                        conditionText: data.current.condition.text,
                        icon: data.current.condition.icon
                    }
                )
            }
        )
    }
 

    return (
        <div>
            <Title/>
            <Form setCity={setCity} getWeather={getWeather}/>
            <Result results={results}/>
        </div>
    )
}

export default APP