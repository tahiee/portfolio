import React, { Children } from 'react'
import PropTypes from 'prop-types'

const WindowScreen = ({ children, containerClassName }) => {
    return (
        <div className={`tk-window-screen ${containerClassName}`}>
            <div className='tk-taskbar'>
                <div className='tk-circles'>
                    <div className='tk-circle tk-circle1' />
                    <div className='tk-circle tk-circle2' />
                    <div className='tk-circle tk-circle3' />
                </div>
                <div className='tk-url'>
                    <div className='tk-url-box'>
                        {'http://localhost:1234'}
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

WindowScreen.propTypes = {}

export default WindowScreen