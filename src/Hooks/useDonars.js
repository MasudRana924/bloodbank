import { useEffect } from "react";
import { useState } from "react"

const useDonars = () => {
    const [donars, setDonars] = useState([]);
    const [displayDonars, setDisplayDonars] = useState([]);
    useEffect(() => {
        fetch('./donars.json')
            .then(res => res.json())
            .then(data =>{

             setDonars(data)
             setDisplayDonars(data)
            });
    }, []);
    return {donars, setDonars,setDisplayDonars,displayDonars};
}

export default useDonars;