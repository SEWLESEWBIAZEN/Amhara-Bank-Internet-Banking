import React from 'react'
import FooterImage from '../assets/Footer.png'

const Footer = () =>
{
    return (
        <div style={{ backgroundColor: 'white', display: 'block' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'block', textAlign: 'left', marginLeft: '1rem', marginRight: '5%' }}>
                    <p>info@amharabank.com.et</p>
                    <p>Call Center:690</p>
                </div>
                <div style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}>
                    <p>Swift Code: AMHRETAA</p>
                    <p>P.O Box 28450 Code 1000</p>
                </div>
                <div style={{ display: 'block', textAlign: 'left', position: 'relative', right: '1rem', marginLeft: '10%' }}>
                    <p>HQ,Ras Mekonnen Ave</p>
                    <p>Leghar Addis Ababa, Ethiopia</p>
                </div>
            </div>
            <div>
                <img src={FooterImage} width='100%' height='50px' />
            </div>

            <p style={{ margin: '0 auto' }}>Copy Right &copy; 2023. Amhara Bank S.C</p>

        </div>
    )
}

export default Footer