import React, { useState, useEffect } from 'react';
import { TwitterPicker } from 'react-color'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBInputGroup, MDBBtn} from 'mdbreact'

const QRCodeConfigSection = ({setScale, setMargin, setWidth, setLightColor, setDarkColor }) => {
  const [light_picker_shown, setLightPickerState] = useState(false)
  const [dark_picker_shown, setDarkPickerState] = useState(false)
  const [light_color, setLightColorLocal] = useState('#FFFFFF')
  const [dark_color, setDarkColorLocal] = useState('#000000')

  useEffect(() => {
    setLightColor(light_color)
    setDarkColor(dark_color)
  },[light_color,dark_color])

  return (
      <MDBCol style={{marginTop: '20px'}}>
        <MDBCard>
          <MDBCardHeader>Configure QR Code Looks</MDBCardHeader>
          <MDBCardBody style={{width: '100%', height: '28vh'}} className="text-center">
            <div className="input-group">
                <MDBInputGroup onChange={e => setScale(Number(e?.target?.value?.slice(0,1) || 5))} containerClassName="mb-3" prepend="QR Code Scale" hint="Example 5" />
                <MDBInputGroup onChange={e => setWidth(Number(e?.target?.value?.slice(0,3) || 250))} containerClassName="mb-3" prepend="QR Code Width" hint="Example 400" />
                <MDBInputGroup onChange={e => setMargin(Number(e?.target?.value?.slice(0,2) || 10))} containerClassName="mb-3" prepend="QR Code Margin" hint="Example 5" />
                <MDBRow style={{width: '100%', height: '8vh'}}>
                <MDBCol size="6">
                  <MDBBtn onClick={() => setLightPickerState(!light_picker_shown)} color="yellow">Set Light Color</MDBBtn>
                  {light_picker_shown && <TwitterPicker color={ light_color } onChangeComplete={ ({hex}) => setLightColorLocal(hex) } />}
                </MDBCol>

                <MDBCol size="6">
                  <MDBBtn onClick={() => setDarkPickerState(!dark_picker_shown)} color="elegant">Set Dark Color</MDBBtn>
                  {dark_picker_shown && <TwitterPicker color={ dark_color } onChangeComplete={ ({hex}) => setDarkColorLocal(hex) } />}
                </MDBCol>
                </MDBRow>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  )
}

export default QRCodeConfigSection

