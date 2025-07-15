import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBG = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const playwithID = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setIsPlaying(true); 
    }

    const previous = async () => {
        if(track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const next = async () => {
        if(track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const seekSong = async(e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBG.current.offsetWidth) * audioRef.current.duration);
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate =() => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime) / Math.floor(audioRef.current.duration)) * 100 + '%';
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000)
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBG,
        seekBar,
        track, setTrack,
        isPlaying, setIsPlaying,
        time, setTime,
        play, pause, 
        playwithID,
        previous, next,
        seekSong
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;