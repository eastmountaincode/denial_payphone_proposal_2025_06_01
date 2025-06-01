'use client';

import { useState, useRef, useEffect } from 'react';
import { FaStar } from "react-icons/fa";

interface LeadSlideProps {
  // Add props here as needed
}

export default function LeadSlide({}: LeadSlideProps) {
  const [isBlownUp, setIsBlownUp] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    // Initialize Audio Context and load the sound
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        const response = await fetch('/assets/balloon_1.wav');
        const arrayBuffer = await response.arrayBuffer();
        audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);
      } catch (error) {
        console.error('Error loading audio:', error);
      }
    };

    initAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playBalloonSound = () => {
    if (audioContextRef.current && audioBufferRef.current) {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBufferRef.current;
      source.connect(audioContextRef.current.destination);
      source.start();
    }
  };

  const handleBlowUp = () => {
    const willBeBlownUp = !isBlownUp;
    setIsBlownUp(willBeBlownUp);
    
    // Only play sound when inflating, not deflating, with 0.3s delay
    if (willBeBlownUp) {
      setTimeout(() => {
        playBalloonSound();
      }, 200);
    }
  };

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Laila Smith Is Blowing Up
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-2"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Phase: Denial
        </h2>
        <h2 className="text-lg font-semibold text-gray-700 mb-6"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Project Proposal by <a href="https://andrew-boylan.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Andrew Boylan</a>
        </h2>
        
        <div className="flex justify-center">
          <img
            src="/assets/Laila_sprite_cropped.png"
            alt="Laila Smith"
            className="max-w-xs max-h-80 object-contain z-10"
            style={{
                transform: isBlownUp
                    ? 'perspective(800px) scale3d(6.5, 2.2, 1.5)'
                    : 'perspective(800px) scale3d(1, 1, 1)',
                borderRadius: isBlownUp ? '100%' : '0%',
                transformOrigin: 'center center',
                transition: 'transform 1.2s cubic-bezier(0.68,-0.45,0.27,1.55), border-radius 1.2s cubic-bezier(0.68,-0.55,0.27,1.55)',
                overflow: 'visible',
            }}
          />
        </div>
        <div className="flex justify-center mt-10">
             <button 
               onClick={handleBlowUp}
               className="border-2 border-black hover:bg-black hover:text-white text-black font-bold py-3 px-8 rounded-lg flex items-center gap-2 mx-auto cursor-pointer z-50">
                 <FaStar />
                 {isBlownUp ? 'Deflate' : 'Blow Up'}
             </button>
         </div>
      </div>
    </section>
  );
} 