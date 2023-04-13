import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
function Room({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7">
        <h1><b>{room.name}</b></h1>
        <div className="roomLeft">
          <b>{room.maxcount} Rooms Left</b>
        </div>
        <p><b>Phone Number : {room.phonenumber}</b></p>
        <span class="badge bg-warning text-dark">{room.type}</span>
        <div className="rent">{room.rentperday}</div>
        <div style={{ float: "right" }}>
          <br></br>
          <button className="btn btn-primary" onClick={handleShow}>
            View Details
          </button>
          
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img className="d-md-block w-100" src={room.imageurls[0]}/>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-md-block w-100" src={room.imageurls[1]}/>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-md-block w-100" src={room.imageurls[2]}/>
            </Carousel.Item>

          </Carousel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
