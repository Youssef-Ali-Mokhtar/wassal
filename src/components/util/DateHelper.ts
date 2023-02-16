
const zeroHandler=(num:any)=>{
    return num.toString().length>1?num:`0${num}`;
}

export const extractWeekDay = (date:any)=>{
    if(!date){
        return "Unknown";
    }
    const day = new Date(date);
    const dayMap:any={
        0:'Sunday',
        1:'Monday',
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday'
    }
    return dayMap[day.getUTCDay()];
};

export const extractDate = (date:any)=>{
    if(!date){
        return "Unknown";
    }
    const convertedDate = new Date(date);

    return `${zeroHandler(convertedDate.getUTCDate())}/${zeroHandler(convertedDate.getUTCMonth()+1)}/${convertedDate.getFullYear()}`;
} 

export const extractTime = (date:any)=>{
    if(!date){
        return "Unknown";
    }
    const convertedTime = new Date(date);
    return `${zeroHandler(convertedTime.getUTCHours())}:${zeroHandler(convertedTime.getUTCMinutes())}`;
} 


export const stepperParser = (step:any)=>{
    if(step === "TICKET_CREATED"){
        return 1;
    }else if(step === "PACKAGE_RECEIVED"||
            step === "NOT_YET_SHIPPED"){
        return 2;
    }else if(step==="OUT_FOR_DELIVERY" ||
            step==="WAITING_FOR_CUSTOMER_ACTION"||
            step==="DELIVERED_TO_SENDER"||
            step==="RECEIVED_DELIVERY_LOCATION"||
            step==="IN_TRANSIT"){
        return 3;
    }else if(step==="DELIVERED"){
        return 4;
    }else{
        return 0;
    }
}