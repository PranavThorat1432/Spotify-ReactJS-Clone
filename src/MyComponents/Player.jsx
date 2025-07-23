import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'
import { useToast } from '../Context/ToastContext';

const Player = () => {

    const {track, seekBar, seekBG, isPlaying, play, pause, time, previous, next, seekSong, volume, setPlayerVolume, isMuted, toggleMute, isShuffling, toggleShuffle, isRepeating, toggleRepeat} = useContext(PlayerContext);
    const { showToast } = useToast();

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img onClick={() => { toggleShuffle(); showToast(isShuffling ? 'Shuffle Off' : 'Shuffle On'); }} className={`w-4 cursor-pointer ${isShuffling ? 'opacity-100' : 'opacity-50'}`} src={assets.shuffle_icon} alt="Shuffle" aria-label="Shuffle" tabIndex={0} title="Shuffle" />
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" aria-label="Previous" tabIndex={0} title="Previous" />
                {isPlaying ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" aria-label="Pause" tabIndex={0} title="Pause" /> : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" aria-label="Play" tabIndex={0} title="Play" />}
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" aria-label="Next" tabIndex={0} title="Next" />
                <img onClick={() => { toggleRepeat(); showToast(isRepeating ? 'Repeat Off' : 'Repeat On'); }} className={`w-4 cursor-pointer ${isRepeating ? 'opacity-100' : 'opacity-50'}`} src={assets.loop_icon} alt="Repeat" aria-label="Repeat" tabIndex={0} title="Repeat" />
            </div>

            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second.toString().padStart(2, '0')}</p>
                <div onClick={seekSong} ref={seekBG} className='w-60 max-w-[500px] bg-gray-300 rounded-full cursor-pointer h-2 relative'>
                    <hr ref={seekBar} className='h-2 border-none w-0 bg-green-800 rounded-full absolute top-0 left-0'/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second.toString().padStart(2, '0')}</p>
            </div>
        </div>

        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="Plays" aria-label="Plays" tabIndex={0} title="Plays" />
            <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="Mic" aria-label="Mic" tabIndex={0} title="Mic" />
            <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="Queue" aria-label="Queue" tabIndex={0} title="Queue" />
            <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="Speaker" aria-label="Speaker" tabIndex={0} title="Speaker" />
            <img onClick={() => { toggleMute(); showToast(isMuted ? 'Unmuted' : 'Muted'); }} className={`w-4 cursor-pointer ${isMuted ? 'opacity-100' : 'opacity-50'}`} src={assets.volume_icon} alt="Volume" aria-label="Mute/Unmute" tabIndex={0} title={isMuted ? 'Unmute' : 'Mute'} />
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={e => setPlayerVolume(Number(e.target.value))} className="w-20 cursor-pointer bg-slate-50 h-1 rounded accent-green-800" aria-label="Volume slider" tabIndex={0} title="Volume" />
            <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="Mini Player" aria-label="Mini Player" tabIndex={0} title="Mini Player" />
            <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="Zoom" aria-label="Zoom" tabIndex={0} title="Zoom" />
        </div>
    </div>
  )
}

export default Player
