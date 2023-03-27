import React from 'react'
import { SideNavMenu } from '../Data/NavMenu';
import '../styles/Layout.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Layout = ({ children }) => {
    const location = useLocation();
    const { user } = useSelector((state) => state.user)
    // console.log(user);
    return (
        <>
            <div className='main'>
                <div className="layout">
                    <div className="sidebar">
                        <div className="logo">
                            <h6>doctor_app</h6>
                            <hr />
                        </div>
                        <div className="menu">
                            {
                                SideNavMenu.map((menu, index) => {
                                    const isActive = location.pathname === menu.path
                                    console.log(index);
                                    return (
                                        <>
                                            <div className={`menu_item  ${isActive && 'active'}`} >
                                                <i className={menu.icon} ></i>
                                                <Link to={menu.path} key={index}>{menu.name}</Link>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="content">
                        <div className="header">
                            <div className="header_content">

                                <i className="fa-sharp fa-solid fa-bell"></i>
                                <Link>{user?.name}</Link>
                            </div>
                        </div>
                        {/* <h3>Header</h3> */}
                        <div className="body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
