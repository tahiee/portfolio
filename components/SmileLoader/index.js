import React, { useState, useEffect } from 'react';

export default function SmileLoader({ onComplete, duration = 10000 }) {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        setIsComplete(true);
        onComplete && onComplete();
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="smile-loader-container">
      <div className="smile-loader">
        <div className="smile-face">
          <div className="eyes">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
          <div className="mouth"></div>
        </div>
        <div className="loading-text">Loading...</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
} 