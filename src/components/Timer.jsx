import{ useState } from 'react'
import cancel from "../assets/icons/cancel-icon.png"
import start from "../assets/icons/start-icon.png"
import pause from "../assets/icons/pause-icon.png"
import redo from "../assets/icons/redo-icon.png"


const Timer = () => {

    const [mins, setMins] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isTimerOn, setIsTimerOn] = useState(false)

    // function decrementMins()
    // {
    //     setMins((prevMins) => prevMins == 0? 0: prevMins - 1);

    // }
    // //method has a side effect
    // const startTimer = () =>{
    //     //logic was not suitable because of how react works
    //     console.log("Hello from start timer function");
    //     setInterval(()=>{
            
    //         console.log("hello from interval")
    //     }, 1000);
        
    // }


    function toggle(){
        setIsTimerOn(prev=> !prev);
    }

  return (
    <>

            <div className='timer-body'>
                <h2>
                    {mins} : {seconds < 10? '0' + seconds: seconds}
                </h2>
            </div>
            <div className='timer-controllers-container'>
                <button className='timer-controller cancel'>
                    <img src={cancel} alt="cancel icon"  className='icon'/>
                </button>


                <button className='timer-controller start-pause' onClick={toggle}>
                    
                    <img src={
                        isTimerOn? pause: start
                    } alt={
                        isTimerOn? "Pause icon": "Start icon"
                    } 
                    className='icon'
                    />
                </button>


                <button className='timer-controller restart'>
                    <img src={redo} alt="redo icon" className='icon'/>

                </button>
            </div>
      
    </>
  )
}

export default Timer
