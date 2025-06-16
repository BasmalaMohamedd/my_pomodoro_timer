import React, { useState } from 'react'

const Timer = () => {

    const [mins, setMins] = useState(25);
    const [seconds, setSeconds] = useState(0);

    //method has a side effect
    const startTimer = () =>{
        console.log("Hello from start timer function");
        setInterval(()=>{
            //decrement timer with one second
            console.log("Hello from start timer interval")

            if(seconds > 0)
                {
                    //decrement seconds
                }
                else if(seconds == 0 && mins > 0)
                {
                    //decrement minutes and set seconds to 59

                }
                else
                {
                    //terminate function
                    return;
                }
        }, 1000);
        
    }
  return (
    <div>
        <div>
            <h1>Timer Body</h1>
            <div className='timerBody'>
                <h2>
                    {mins} : {seconds < 10? '0' + seconds: seconds}
                </h2>
            </div>
        </div>
      
      <button>Cancel</button>
      <button onClick={()=>{console.log("start/pause btn"); startTimer();}}>Start/Pause</button>
      <button>Restart</button>
    </div>
  )
}

export default Timer
