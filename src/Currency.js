function Currency (props){

const{
    options,
    select,
    changeCurrency,
    amount,
    changeAmount
 } = props  
    return(
        <div>
            <input type='number' className="input" value={amount} onChange={changeAmount}/>
            <select className="btn1" value={select} onChange={changeCurrency}>
                {options.map(el => (
                <option key={options} value={el}>{el}</option>
                ))}
            </select>
        </div>
    )
}
export default Currency;