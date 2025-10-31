import React from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ImageSlider from '../../components/ImageSlider'
import ViewsTitle from '../../components/ViewsTitle';

const WindowImage = ({ images }) => {
    // Support both single image (string) and multiple images (array)
    const imageArray = Array.isArray(images) ? images : [images]
    
    if (imageArray.length > 1) {
        return (
            <ImageSlider
                images={imageArray}
                showFilter
                imageClassName='tk-image'
            />
        )
    }
    
    return (
        <HoverImage
            showFilter
            imageClassName='tk-image'
            src={imageArray[0]}
        />
    )
}

const getSide = (index) => index % 2 ? 'left' : 'right'

const SingleProject = (props) => {
    const { image, images, index } = props
    // Support both 'image' (single) and 'images' (array) props, with 'images' taking precedence
    const projectImages = images || (image ? [image] : [])
    const side = getSide(index);
    return (
        <div className='tk-projects-single'>
            <div className='row'>
                <div className='col-6 d-none d-lg-block'>
                    <div className=''>
                        <WindowScreen containerClassName={`tk-projects-image-container tk-projects-image-container-${side}`}>
                            <WindowImage images={projectImages} />
                        </WindowScreen>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ProjectTextSide {...props} images={projectImages} />
                </div>
            </div>
        </div>
    )
}

const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, images } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`tk-projects-text-side tk-projects-text-side-${side}`}>
            <div
                data-aos={`zoom-in-${side}`}
                className='tk-projects-text-featured'>{label}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='tk-projects-text-title'>{title}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='tk-projects-text-description'>
                {description}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen containerClassName={`tk-text-image-container`}>
                        <WindowImage images={images} />
                    </WindowScreen>
                </div>
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='tk-projects-text-tecs'>
                {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
        </div>
    )
}

const Projects = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='tk-projects'>
            <div className='container'>
                <div className='tk-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(list || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {}

export default Projects
