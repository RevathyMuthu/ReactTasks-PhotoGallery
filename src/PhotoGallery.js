// PhotoGallery.js
import React, { useState } from 'react';
//import Modal from 'react-modal';
import photos from './data';
import './PhotoGallery.css';

const PhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
        setIsModalOpen(false);
    };

    return (
        <div className="photo-gallery">
            {photos.map((photo) => (
                <div key={photo.id} className="photo" onClick={() => openModal(photo)}>
                    <img src={photo.imageUrl} />

                </div>
            ))}
            <div isOpen={isModalOpen} onRequestClose={closeModal} className="modal">
                {selectedPhoto && (
                    <div className="modal-content">
                        <img src={selectedPhoto.imageUrl} />

                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoGallery;
