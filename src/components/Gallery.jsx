import { images } from "../data/imgs";

import '../styles/components/gallery.sass';

const Gallery = () => {
    return (
        <session className='gallery'>
            {images.map((image, i) => (
                <div className="gallery__card" id={`card-${i + 1}`} style={{ backgroundImage: `url(${image.src})` }}>
                    <h2 className="gallery__card--title">{image.name}</h2>
                    <a href="#" className="gallery__card--btn">Mais fotos</a>
                </div>
            ))}
        </session>
    );
};

export default Gallery;