import React, { useEffect, useState } from 'react'

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    
    useEffect(() => {
        // Auto-hide loader after 5 seconds
        const timer = setTimeout(() => {
            handleLoader(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!loader) return null;

    return (
        <div className="preloader-container">
            <div className="body">
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className="base">
                    <span>
                        <div className="face"></div>
                    </span>
                </div>
            </div>
            <div className="longfazers">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>SUPER FULL STACK</h1>
        </div>
    )
}

export default PreLoader
