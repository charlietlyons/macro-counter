import React, { useEffect, useState } from "react"

export const Day = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/days").then(response => response.json()).then(data => {
            console.log(data);
            setData(data)
        })
    }, [setData])

    return <>
        {data.map(day => {
            return <h2>{day.dayOfTheWeek}</h2>
        })}
    </>
}

