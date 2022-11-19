import React from 'react'

// icons
import { FaGoogle, FaFacebookSquare, FaApple } from 'react-icons/fa'

// components
import CCard from '../ui/CCard/CCard'
import CLogo from '../ui/CLogo/CLogo'
import { Button } from 'antd-mobile'
import CIcon from '../ui/CIcon/CIcon'

// styles
import './SingUp.scss'

const SingUp = () => {
    return (
        <div className="sing-up">
            <div className="container">
                <div className="sing-up__wrapper">
                    <CCard>
                        <div className="sing-up__head">
                            <CLogo />
                        </div>
                        <div className="sing-up__body">
                            <h2 className="__title">Sign up to continue</h2>
                            <div className="__action">
                                <Button block color="primary" size="large">
                                    Continue with email
                                </Button>
                            </div>
                        </div>
                        <div className="sing-up__footer">
                            <div className="hr-space">
                                <p>
                                    or sign up <br /> with
                                </p>
                            </div>
                            <div className="__icons">
                                <CIcon>
                                    <FaFacebookSquare />
                                </CIcon>
                                <CIcon>
                                    <FaGoogle />
                                </CIcon>
                                <CIcon>
                                    <FaApple />
                                </CIcon>
                            </div>
                        </div>
                    </CCard>
                </div>
            </div>
        </div>
    )
}

export default SingUp
