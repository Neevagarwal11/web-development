import React from 'react'
import Button from './button'
const setPomodoro = () => {
    const [newTimer, setnewTimer] = useState({
        work:0.3,
        short:0.2,
        long:1,
        active:"work"
    })
    const handleChange = input =>{
        const {name,value} = input.target
        switch (name){
            case 'work':
                setnewTimer({
                    ...newTimer,
                    work:parseInt(value)
                
                })
                break;
            case 'shortbreak':
                setnewTimer({
                    ...newTimer,
                    short: parseInt(value)
                    
                })
                break;
            case 'longbreak':
                setnewTimer({
                    ...newTimer,
                    long: parseInt(value)
                    
                })
                break;

                default:
                    break;
        }
        console.log(newTimer)
    }

    const handleSubmit=() =>{

    }
  return (
    <div className='form-container'>
        <form noValidate>
            <div className='input-wrapper'>
                <input className='input' name="work" onChange={handleChange} value={newTimer.work} > </input>
                <input className='input' name="shortBreak" onChange={handleChange} value={newTimer.short} > </input>
                <input className='input' name="longBreak" onChange={handleChange} value={newTimer.long} > </input>
            </div>
            <button title='Set Timer' _callback={handleSubmit} />
        </form>
    </div>
  )
}

export default setPomodoro