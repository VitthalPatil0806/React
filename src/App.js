import './app.css'
import React, { useEffect, useState } from 'react';
import Currency from './Currency';

const api = 'https://api.exchangerate.host/latest';
console.log(api);
function App (){
   
    const[options, setOptions] = useState([]);
    const[to, setTo] = useState();
    const[from, setFrom] = useState();
    const[rates, setRates] = useState();
    const[amount, setAmount] = useState(1);
    const[result, setResult] = useState(true);

    let toAmount, fromAmount
    if(result){
        fromAmount = amount;
        toAmount = amount * rates;
    }
    else{
        toAmount = amount;
        fromAmount = amount/rates;
    }

    console.log(rates);
    
    console.log(options);
    useEffect(()=>{
        fetch(api)
        .then(res=>res.json())
        .then(data => {
        const india = Object.keys(data.rates)[66]
            setOptions([data.base, ...Object.keys(data.rates)])
            setFrom(data.base)
            setTo(india)
            setRates(data.rates[india])
        })
    },[])

    useEffect(()=>{
        if(from != null && to != null){fetch(`${api}?currency1=${from}&currency2=${to}`)
        .then(res => res.json())
        .then(data => setRates(data.rates[to]))}        
    },[from, to])

    function SwipeConvertFrom(e){
        setAmount(e.target.value)
        setResult(true)
    }

    function SwipeConvertTo(e){
        setAmount(e.target.value)
        setResult(false)
    }

    return(
        <div>
        <h1>Currency Converter</h1>
        <Currency 
        options={options}
        select={from}
        changeCurrency={e=>setFrom(e.target.value)}
        amount={fromAmount}
        changeAmount={SwipeConvertFrom}/>

        <Currency 
        options={options}
        select={to}
        changeCurrency={e=>setTo(e.target.value)}
        amount={toAmount}
        changeAmount={SwipeConvertTo}/>
        </div>
    )
}

export default App;