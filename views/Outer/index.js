import React from 'react'
import Gooery from '../../components/GooeryAnimation'
import DecryptText from '../../components/DecryptText'
import PropTypes from 'prop-types'


const Outer = ({ data: {
    title1,
    title2,
    decrypTexts,
    desciption,
    button
} }) => {
    return (
        <div className='tk-outer'>
            <div className='container'>
                <div className='tk-outer-container d-flex justify-content-between align-items-center'>
                    <div className='tk-outer-text'>
                        <div className='tk-outer-heading'>
                            {title1}
                        </div>
                        <div className='tk-outer-heading'>
                            {title2}
                        </div>
                        <div className='tk-outer-heading2'>
                            <DecryptText
                                values={decrypTexts}
                            />
                        </div>
                        <div className='tk-outer-description'>
                            {desciption}
                        </div>
                        <div className='tk-outer-contact'>
                            <button onClick={button?.onClick} className='tk-button'>
                                {button?.label}
                            </button>
                        </div>
                    </div>
                    <div className='tk-outer-gooery'>
                        <Gooery />
                    </div>
                </div>
            </div>
        </div>
    )
}

Outer.propTypes = {}

export default Outer
