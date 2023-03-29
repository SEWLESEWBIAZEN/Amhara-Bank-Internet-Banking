import { Box, Paper } from '@mui/material'
import React from 'react'
import './login.css'
import Hero_image from '../assets/hero_image.png'
import LoginForm from './LoginForm'

const login = () =>
{
    return (
        <Paper elevation={0} sx={{
            borderRadius: '0px',
            backgroundColor: 'white',
            display: { xs: 'flex' },
            width: '98%',
            margin: '1% auto',

        }}>
            <div className='login'>
                <div className='description'>Using ABa's Internet Banking facility, customers will benefit
                    from our Personal and Corporate Internet Banking services
                    that are available, 24 hours a day, 7 days a week,from any
                    location

                </div>

                <img className='Hero_image' src={Hero_image} />

            </div>
            <hr />
            <LoginForm />
        </Paper>
    )
}

export default login