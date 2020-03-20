import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

class TopNavigation extends Component {
    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling style={{background: '#3C8DBC'}}>
                <MDBNavbarBrand href="/">
                    <strong style={{color: '#f9f9f9'}}>QR CODE MANIA</strong>
                </MDBNavbarBrand>
                <MDBCollapse navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink style={{color: '#f9f9f9'}} to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a style={{color: '#f9f9f9'}} rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://0.0.0.0:3000" target="_blank">API</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a style={{color: '#f9f9f9'}} className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com"><MDBIcon fab icon="facebook" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a style={{color: '#f9f9f9'}} className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com"><MDBIcon fab icon="twitter" /></a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;