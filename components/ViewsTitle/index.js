import React from 'react'
import PropTypes from 'prop-types'


const ViewsTitle = ({ text = '', textClassName, lineClassName, containerClassName }) => {
    return (
        <div
        data-aos={`zoom-in-right`}
         className={`tk-views-title-container ${containerClassName || ''}`} >
            <div className={`tk-views-title-text ${textClassName || ''}`}>
                {text}
            </div>
            <div className={`tk-views-title-line-container`}>
                <div className={`tk-views-title-line ${lineClassName || ''}`} />
            </div>
        </div>
    )
}

ViewsTitle.propTypes = {}

export default ViewsTitle