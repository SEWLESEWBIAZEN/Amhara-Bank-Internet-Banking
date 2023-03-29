import * as React from 'react';
import './service.css'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import CheckBalance from '../assets/checkBalance.png';
import ViewTransaction from '../assets/viewTransaction.png';
import MakeTransfer from '../assets/moneyTransfer.png';


export default function Services()
{
    return (
        <div className='services'>
            <div className='checkBalance'>
                <Card elevation={0} sx={{ borderRadius: '0px', maxWidth: 405, margin: 'auto 1rem', backgroundColor: '#000F9F' }}>
                    <h4 style={{ color: '#F2C519', fontSize: '25px', marginTop: '-0.15rem', marginBottom: '-0.15rem' }}>Check Balance</h4>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="150"
                        image={CheckBalance}
                        sx={{ marginBottom: '0.5rem' }}
                    />
                    <CardContent sx={{ backgroundColor: '#D9D9D9' }}>
                        <Typography gutterBottom variant="body2" >
                            Check your account balance
                            without going to Amhara
                            Bank branches in person.
                        </Typography>
                        <Typography variant="body2" color="#000F9F" fontWeight='bold' fontFamily='Geez Able'>
                            በአካል ወደ የአማራ ባንክ
                            ቅርንጭፍ መሄድ ሳይጠበቅብዎ
                            ባሉበት ሆነው ቀሪ ሒሳብዎን ይመልከቱ።

                        </Typography>
                    </CardContent>


                </Card>
            </div>
            <div className='makeTransfer'>
                <Card elevation={0} sx={{ borderRadius: '0px', maxWidth: 405, margin: 'auto 0', backgroundColor: '#000F9F' }}>

                    <h4 style={{ color: '#F2C519', fontSize: '25px', marginTop: '-0.15rem', marginBottom: '-0.15rem' }}>Make Transfer</h4>

                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="150"
                        image={MakeTransfer}
                        sx={{ marginBottom: '0.5rem' }}
                    />
                    <CardContent sx={{ backgroundColor: '#D9D9D9' }}>
                        <Typography gutterBottom variant="body2">
                            Transfer Money
                            without going to Amhara
                            Bank branches
                            in person.
                        </Typography>
                        <Typography variant="body2" color="#000F9F" fontWeight='bold' fontFamily='Geez Able'>

                            በአካል ወደ የአማራ ባንክ
                            ቅርንጭፍ መሄድ ሳይጠበቅብዎ
                            ባሉበት ሆነው ገንዘብ ይላኩ።
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            <div className='viewTransaction'>
                <Card elevation={0} sx={{ borderRadius: '0px', maxWidth: 405, margin: 'auto 1rem', backgroundColor: '#000F9F' }}>
                    <h4 style={{ color: '#F2C519', fontSize: '25px', marginTop: '-0.15rem', marginBottom: '-0.15rem' }}>View Transaction</h4>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="150"
                        image={ViewTransaction}
                        sx={{ marginBottom: '0.5rem' }}
                    />
                    <CardContent sx={{ backgroundColor: '#D9D9D9' }}>
                        <Typography gutterBottom variant="body2" >

                            View Transactions without going to Amhara
                            Bank branches in person.

                        </Typography>
                        <Typography variant="body2" color="#000F9F" fontWeight='bold' fontFamily='Geez Able'>
                            በአካል ወደ የአማራ ባንክ
                            ቅርንጭፍ መሄድ ሳይጠበቅብዎ
                            ባሉበት ሆነው ገቢ ወጭዎን ይመልከቱ።
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}