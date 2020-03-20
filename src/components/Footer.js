import React from 'react';
import { MDBFooter, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter style={{position:'absolute', bottom:0, width:'85vw', alignSelf: 'center'}} color="#1A2226" className="text-center font-small darken-2">
            <div className="pb-4">
                <MDBIcon fab icon="facebook" className="mr-3"/>
                <MDBIcon fab icon="twitter" className="mr-3"/>
                <MDBIcon fab icon="youtube" className="mr-3"/>
                <MDBIcon fab icon="google-plus" className="mr-3"/>
                <MDBIcon fab icon="dribbble" className="mr-3"/>
                <MDBIcon fab icon="pinterest" className="mr-3"/>
                <MDBIcon fab icon="github" className="mr-3"/>
                <MDBIcon fab icon="codepen" className="mr-3"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center" style={{background:"#1A2226"}}>
                &copy; {new Date().getFullYear()} Copyright:  A <a target="_blank" href="https://zaidimarvels.co.ke">ZaidiMarvels</a>  Creation by  <a target="_blank" href="https://profiles.zaidimarvels.co.ke/Gidraph_Danford">Gidraph Danford</a>
            </p>
        </MDBFooter>
    );
}

export default Footer;