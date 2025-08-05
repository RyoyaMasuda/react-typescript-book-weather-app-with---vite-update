type ResultsProps = {
    results: {
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}

const Result = (props: ResultsProps) => {
    return (
        <h1>気象データ {props.results.country}</h1>
    )
}

export default Result