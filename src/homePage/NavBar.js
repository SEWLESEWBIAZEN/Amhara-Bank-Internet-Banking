import React from 'react'
import { Paper, Typography } from '@mui/material'
import Logo from '../assets/logo.png'
import './navBar.css'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const NavBar = () =>
{
    return (
        <div>
            <Paper elevation={0} sx={{ height: '81px', backgroundColor: '#000F9F', borderRadius: '0px' }}>
                <img src={Logo} className='ABaLogo' />
                <Typography sx={{
                    justifyContent: 'center', margin: { xs: 'auto 40%', sm: 'auto 20%' }, display: { xs: 'none', sm: 'flex' }
                }} className='navItems'>
                    <Link to='/' className='navItem'>Home</Link>
                    <Link to='/services' className='navItem'>ABaIB services</Link>
                    <Link to='/contact-us' className='navItem'>Contact Us</Link>
                    <a href="https://www.amharabank.com.et/" className='AbaWeb'> ABa Website</a>

                </Typography>
                <Menu />


            </Paper>
            <Paper elevation={0} sx={{ height: '10px', backgroundColor: '#F2C519', borderRadius: '0px' }} />
        </div>
    )
}

export default NavBar