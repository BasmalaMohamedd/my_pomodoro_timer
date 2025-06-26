import React, { useState } from 'react'

const Timer = () => {

    const [mins, setMins] = useState(25);
    const [seconds, setSeconds] = useState(0);

    function decrementMins()
    {
        setMins((prevMins) => prevMins == 0? 0: prevMins - 1);

    }
    //method has a side effect
    const startTimer = () =>{
        //logic was not suitable because of how react works
        console.log("Hello from start timer function");
        setInterval(()=>{
            
            console.log("hello from interval")
        }, 1000);
        
    }
  return (
    <>
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
    </>
  )
}

export default Timer
