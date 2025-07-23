import React, { useContext } from 'react'
import Sidebar from './MyComponents/Sidebar'
import Player from './MyComponents/Player'
import Display from './MyComponents/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {

  const {audioRef, track} = useContext(PlayerContext);
  return (
    <div className='h-screen bg-white dark:bg-black transition-colors duration-300'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
