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
    const [volume, setVolume] = useState(1); // 1 = 100%
    const [isMuted, setIsMuted] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isRepeating, setIsRepeating] = useState(false);

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

    const setPlayerVolume = (value) => {
        setVolume(value);
        audioRef.current.volume = value;
        if (value === 0) setIsMuted(true);
        else setIsMuted(false);
    };

    const toggleMute = () => {
        setIsMuted((prev) => {
            audioRef.current.muted = !prev;
            return !prev;
        });
    };

    const toggleShuffle = () => setIsShuffling((prev) => !prev);
    const toggleRepeat = () => setIsRepeating((prev) => !prev);

    // Update audio element when volume/mute changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

    // Shuffle logic for next
    const next = async () => {
        let nextIndex;
        if (isShuffling) {
            nextIndex = Math.floor(Math.random() * songsData.length);
        } else {
            nextIndex = track.id < songsData.length - 1 ? track.id + 1 : 0;
        }
        await setTrack(songsData[nextIndex]);
        await audioRef.current.play();
        setIsPlaying(true);
    };

    // Repeat logic for onended
    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.onended = () => {
            if (isRepeating) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            } else {
                next();
            }
        };
    }, [isRepeating, next]);

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
        seekSong,
        volume, setPlayerVolume,
        isMuted, toggleMute,
        isShuffling, toggleShuffle,
        isRepeating, toggleRepeat
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;