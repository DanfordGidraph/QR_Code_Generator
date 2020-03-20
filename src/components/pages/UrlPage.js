import React, {useState} from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import TextInputSection from './sections/TextInputSection'
import QRCodeConfigSection from './sections/QRCodeConfigSection'
import QRCodeSection from './sections/QRCodeSection'

const UrlPage =  () => {
  const [text, setQRText] = useState(' ')
  const [scale, setQRScale] = useState(4)
  const [margin, setQRMargin] = useState(4)
  const [width, setQRWidth] = useState(300)
  const [light_color, setQRLightColor] = useState('#fff')
  const [dark_color, setQRDarkColor] = useState('#000')

  return (
    <React.Fragment>
      <MDBRow>

        <MDBCol size="6">
          <TextInputSection setText={setQRText} />
          <QRCodeConfigSection setScale={setQRScale} setMargin={setQRMargin} setWidth={setQRWidth} setLightColor={setQRLightColor} setDarkColor={setQRDarkColor} />
        </MDBCol>

        <MDBCol size="6">
          <QRCodeSection text={text} scale={scale} width={width} margin={margin} light_color={light_color} dark_color={dark_color} />
        </MDBCol>

      </MDBRow>
    </React.Fragment>
  )
}

export default UrlPage;