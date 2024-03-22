
import { useContext, useState } from 'react';
import { myContext } from '../../../context/GlobalContext';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

export default function IconLogin() {
    const context = useContext(myContext);
    const navigate = useNavigate()
    const handleLogout = async () => {
        await context?.logout()
        navigate('/')
    }
    return (
        <div className='w-full'>
            <Dropdown>
                <MenuButton sx={{ outline: 'none', background: 'none', border: 'none', '&:hover': { background: 'none' } }}> <Avatar
                    className="text-white"
                    id="basic-button"
                    sx={{
                        bgcolor: "#ff1744",
                        color: "white",
                        cursor: "pointer",
                        fontSize: '16px'
                    }}
                >
                    {context?.currentUser?.firstName[0].toUpperCase()}{context?.currentUser?.lastName[0].toUpperCase()}
                </Avatar></MenuButton>
                <Menu>
                    <MenuItem onClick={()=>navigate(context?.currentUser?.role=="admin"?'/admin':'/player')}>{context?.currentUser?.role=="admin"?'Admin Page':'Player Page'}</MenuItem>
                    <MenuItem sx={{ color: 'red' }} onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Dropdown>

        </div>
    );
}