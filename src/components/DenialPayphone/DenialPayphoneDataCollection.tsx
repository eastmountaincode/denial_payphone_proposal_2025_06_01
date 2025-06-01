'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function DenialPayphoneDataCollection() {
  const [answerRevealed, setAnswerRevealed] = useState(false);

  const revealAnswer = () => {
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.4 }
    });
    
    setAnswerRevealed(true);
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="text-center max-w-6xl px-6 w-full">
        {/* Question - always at top */}
        <h1 className="text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Q: How collect user data without <span style={{ whiteSpace: 'nowrap' }}>Wi<span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>-</span>Fi</span>?
        </h1>

        {/* Reveal Answer Button or Images */}
        {!answerRevealed ? (
          <button 
            onClick={revealAnswer}
            className="border-2 border-black hover:bg-black hover:text-white text-black font-bold py-4 px-8 rounded-lg text-4xl cursor-pointer"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}
          >
            reveal answer
          </button>
        ) : (
          <div className="mt-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
              A: Use a clipboard
            </h2>
            <div className="flex justify-center items-start gap-8">
              <div className="flex-1 max-w-md">
                <img
                  src="/assets/physical/clipboard.png"
                  alt="Clipboard"
                  className="w-full h-auto max-h-130 object-contain"
                />
              </div>
              <div className="flex-1 max-w-md">
                <img
                  src="/assets/physical/security_pen.jpg"
                  alt="Security Pen"
                  className="w-full h-auto max-h-96 object-contain mb-4"
                />
                <p className="text-lg text-gray-700">
                  Pen with security chain prevents theft, which in turn leads to optimized profit margins.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 