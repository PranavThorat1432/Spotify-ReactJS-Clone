import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const MobileSidebar = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose}></div>
      {/* Drawer */}
      <div className="relative w-64 max-w-[80vw] h-full bg-[#121212] p-4 flex flex-col gap-4 animate-slide-in-left">
        <button className="absolute top-2 right-2 text-white" onClick={onClose} aria-label="Close menu">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className='flex items-center gap-3 pl-2 cursor-pointer' onClick={()=>{navigate('/');onClose();}}>
          <img className='w-6' src={assets.home_icon} alt="Home" />
          <p className='font-bold text-white'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-2 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="Search" />
          <p className='font-bold text-white'>Search</p>
        </div>
        <div className='flex items-center gap-3 pl-2 mt-4'>
          <img className='w-8' src={assets.stack_icon} alt="Library" />
          <p className='font-semibold text-white'>Your Library</p>
        </div>
        <div className='p-3 bg-[#242424] rounded font-semibold flex flex-col items-start gap-1 mt-2'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>It's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Create Playlist</button>
        </div>
        <div className='p-3 bg-[#242424] rounded font-semibold flex flex-col items-start gap-1 mt-2'>
          <h1>Let's find some podcasts to follow</h1>
          <p className='font-light'>We will keep you update on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Browse Podcast</button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar; 