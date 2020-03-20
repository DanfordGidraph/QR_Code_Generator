import React from 'react';
import logo from "../assets/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed"  style={{background: '#1A2226'}}>
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="QR Code Mania Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink style={{marginTop: 20, width: '12vw'}} exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        TEXT to QR
                    </MDBListGroupItem>
                </NavLink>

                <NavLink style={{marginTop: 20, width: '12vw'}} to="/url" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        URL to QR
                    </MDBListGroupItem>
                </NavLink>

                <NavLink style={{marginTop: 20, width: '12vw'}} to="/json" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        JSON to QR
                    </MDBListGroupItem>
                </NavLink>

            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;