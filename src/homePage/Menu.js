import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function BasicMenu()
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) =>
    {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () =>
    {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button sx={{ display: { sm: 'none' }, color: '#F2C519', fontWeight: 'bold', position: 'relative', right: '1%', top: '3%' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <Menu


                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ display: { sm: 'none' } }}
            >
                <MenuItem sx={{ color: '#F2C519' }} onClick={handleClose}>Home</MenuItem>
                <MenuItem sx={{ color: '#F2C519' }} onClick={handleClose}>ABaIB Services</MenuItem>
                <MenuItem sx={{ color: '#F2C519' }} onClick={handleClose}>Contact Us</MenuItem>
                <MenuItem sx={{ color: '#F2C519' }} onClick={handleClose}>ABa Website</MenuItem>
            </Menu>
        </div>
    );
}