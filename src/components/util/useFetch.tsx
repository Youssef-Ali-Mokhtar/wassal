import { useEffect } from "react";
import { useState } from "react";

const useFetch = (shipmentNumber:any, t:any)=>{
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);



    useEffect(()=>{
        if(!shipmentNumber){
            return;
        }
        setError(null);
        setPending(true);
        setData(null);
        fetch(`https://tracking.bosta.co/shipments/track/${shipmentNumber}`)
            .then(res =>{
                return res.json();
            })
            .then(data=> {
                if(data.status === "Not Found."){
                    throw Error(t("NoShipmentFetched"));
                }
                setData(data);
                setPending(false);
                setError(null);
            }).catch((err)=>{
                setError(err.message);
                setPending(false);
                setData(null);
            })
    }, [shipmentNumber])
    return {data, pending, error};
}

export default useFetch;