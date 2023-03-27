import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import axois from 'axios';
import { setUser } from '../redux/features/userSlice';

import { useEffect } from 'react';


const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { user } = useSelector(state => state.user)
    const getUser = async () => {
        try {
            dispatch(showLoading())
            const res = await axois.post('/api/v1/user/getUserData', {
                token: localStorage.getItem('token')
            },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch(hideLoading())
            if (res.data.success) {
                dispatch(setUser(res.data.data))
            }
            else {
                // navigate('/login')
                <Navigate to='/login' />
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (!user) {
            getUser()
        }
    }, [user, getUser])
    if (localStorage.getItem('token')) {
        return children
    } else {
        return <Navigate to='/login' />
    }

}

export default ProtectedRoute;
