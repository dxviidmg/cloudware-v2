import "./ImageGallery.css";

export function ImageGallery({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Galería ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
