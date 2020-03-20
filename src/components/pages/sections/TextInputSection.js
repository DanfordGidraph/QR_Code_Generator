import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader} from 'mdbreact'

const TextInputSection = ({setText}) => {
  return (
      <MDBCol>
        <MDBCard>
          <MDBCardHeader>Enter/Paste Text Below</MDBCardHeader>
          <MDBCardBody style={{width: '100%', height: '26vh'}} className="text-center">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                    <i className="fas fa-pencil-alt prefix"></i>
                    </span>
                </div>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={e => setText(e?.target?.value)}></textarea>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  )
}

export default TextInputSection

