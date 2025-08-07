import React, { useEffect, useState } from 'react'
import SmileLoader from '../SmileLoader';

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    
    const handleComplete = () => {
        const root = document.documentElement;
        root.style.setProperty('--scrollBarWidth', '8px');
        handleLoader(false);
    };

    return (
        <div className={`mk-pre-loader ${loader ? 'mk-pre-loader-enabled' : 'mk-pre-loader-disabled'}`}>
            <SmileLoader 
                onComplete={handleComplete}
                duration={10000}
            />
        </div>
    )
}

PreLoader.propTypes = {}

export default PreLoader
