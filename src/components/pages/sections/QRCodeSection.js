import React, { useEffect } from 'react'
import QRCode from 'qrcode'
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact'

const QRCodeSection = ({text, scale, width, margin, light_color, dark_color}) => {

    useEffect(()=>{
      QRCode.toCanvas(document.getElementById('qr-code-canvas'), text?.length ? text : ' ',{ text, scale, width, margin, color:{light: light_color, dark: dark_color} }, (error) => error ? console.error(error) : console.log('success!') )
    })

    return (
        <MDBCol>
          <MDBCard>
            <MDBCardHeader>QR Code Generated</MDBCardHeader>
            <MDBCardBody style={{width: '100%', height: '100%', display: 'flex'}}>
              <div style={{width: '100%', height: '56vh',border:'2px dashed black', alignSelf: 'center'}}>
                <canvas id="qr-code-canvas" ></canvas>
              </div>
            </MDBCardBody>
            </MDBCard>
          </MDBCol>
    )
}

export default QRCodeSection;