import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import HoverImage from '../HoverImage'

const ImageSlider = ({ images, imageClassName, showFilter, autoSlideInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!images || images.length <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, autoSlideInterval)

        return () => clearInterval(interval)
    }, [images, autoSlideInterval])

    if (!images || images.length === 0) {
        return null
    }

    if (images.length === 1) {
        return (
            <HoverImage
                showFilter={showFilter}
                imageClassName={imageClassName}
                src={images[0]}
            />
        )
    }

    return (
        <div className="tk-image-slider">
            <div 
                className="tk-image-slider-container"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((src, index) => (
                    <div key={index} className="tk-image-slider-slide">
                        <HoverImage
                            showFilter={showFilter}
                            imageClassName={imageClassName}
                            src={src}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageClassName: PropTypes.string,
    showFilter: PropTypes.bool,
    autoSlideInterval: PropTypes.number
}

export default ImageSlider

