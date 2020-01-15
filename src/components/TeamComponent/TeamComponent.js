import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import { IconButton } from "@material-ui/core";
//import IconButton from "@material-ui/core/IconButton";

// import {  } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/fontawesome-svg-core";

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer
} from "mdbreact";

export const TeamComponent = props => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center" id="team">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          Our amazing team
        </h2>
        <p className="black-text w-responsive mx-auto mb-5">
          We are professional towards the outcome of this project
        </p>
        <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Makcik Kate
            </h4>
            <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
            <IconButton>
              <a href="#" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
            </IconButton>
            <IconButton>
              <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
            </IconButton>
            <IconButton>
              <a href="#" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>
            </IconButton>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
            <h6 className="text-uppercase grey-text mb-3">
              Front-end Developer
            </h6>
            <IconButton>
              <a href="#" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
            </IconButton>
            <IconButton>
              <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
            </IconButton>
            <IconButton>
              <a href="#" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>
            </IconButton>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Sarah Melyah
            </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
            <IconButton>
              <a href="#" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
            </IconButton>
            <IconButton>
              <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
            </IconButton>
            <IconButton>
              <a href="#" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>
            </IconButton>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};
