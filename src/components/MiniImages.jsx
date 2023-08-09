import React, { useState } from "react";
import Modal from "react-modal"; 
import "../css/miniImages.css";
import closeIcon from '../images/icon-close-image.svg'

export default function MiniImages(props) {
  const [isOpen, setIsOpen] = useState(false);
  // Initialize with 0 or any other index as the default
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpenModal = (index) => {
    setIsOpen(true);
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleNextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % props.image.length);
  };

  const handlePreviousImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? props.image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel flex space">
      {props.thumbnail.map((thumb, index) => (
        <div className="img-container" key={index}>
          <img
            src={thumb}
            className="mini-img"
            onClick={() => handleOpenModal(index)}
            alt="thumbnail"
          />
        </div>
      ))}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="custom-modal"
      >
        <div className="popup">
            <img src={closeIcon}  alt="" className="closeIcon" onClick={handleCloseModal}/>
            <img className="popupImg" src={props.image[selectedImage]} alt="" />
            <div className="arrows">
                <div className="arrow-container" onClick={handlePreviousImage}>
                  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path className="previous" d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div className="arrow-container" onClick={handleNextImage}>
                  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path  className="next" d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                  </svg>
              </div>
            </div>
            <div className="carousel flex space">
              {props.thumbnail.map((thumb, index) => (
                <div className="img-container" key={index}>
                  <img
                    src={thumb}
                    className="mini-img"
                    onClick={() => handleOpenModal(index)}
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
        </div>
      </Modal>
    </div>
  );
}
