import {useState} from 'react';
import PropTypes from 'prop-types';



const CounterApp = ({value}) => {

    //Momento del Hook

    const [counter, setCounter] = useState(value)



    //funcion HandleAdd
    const handleAdd = ()=>{

        setCounter(counter + 1)

    }

    const handleMin = ()=>{

        setCounter(counter - 1)

    }

    const handleReset = ()=>{

        setCounter(value)

    }

    
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleMin}>-1</button>
        <button onClick={handleReset}>Reset</button>
    </>
   
  )
}

CounterApp.propTypes = {

    value: PropTypes.number
}

export default CounterApp