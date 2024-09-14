import { useState, useEffect, useRef } from 'react';
import './Clock.css';
import ticking from './assets/Done.mp3';
import musicbutton from './assets/music.gif';
import hr12 from './assets/12hr.png';
import hr24 from './assets/24hr.png';
const Clock = () => {
    const [music, setMusic] = useState(false);
    const [time, setTime] = useState(new Date());
    const [dtime,setDtime] = useState(true);
    const [timeImg,setTimeImg] = useState(hr12);
    const audioRef = useRef(null);
    const timeRef = useRef(null);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(interval)
        }
    },[])

    useEffect(() => {
        if (music) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [music]);

    useEffect(() => {
        if (dtime) {
            setTimeImg(hr12);
        } else {
            setTimeImg(hr24);
        }
    }, [dtime]);

    function handleMusic() {
        setMusic(!music);
    }

    function handleTime() {
        setDtime(!dtime);
    }

    function timeFormating(){
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        if (dtime && hour > 12) {
            hour = hour - 12;
        }

        return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <div id='clock'>
            <audio ref={audioRef} src={ticking} loop />
            <img src={musicbutton} onClick={handleMusic} alt="Play" />
            <h1>{timeFormating()} {dtime ? (time.getHours() >= 12 ? "PM" : "AM") : "Hr"}</h1>

            <img src={timeImg} alt="12 Hour" id='a12' ref={timeRef} onClick={handleTime}/>
        </div>
    );
};

export default Clock;
