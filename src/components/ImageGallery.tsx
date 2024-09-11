import React from 'react';

interface ImageGalleryProps {
  images: string[];
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClose }) => {
  return (
    <div className="gallery-overlay">
      <div className="gallery">
        <button className="close-btn" onClick={onClose}>Cerrar</button>
        <div className="image-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Proyecto ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
