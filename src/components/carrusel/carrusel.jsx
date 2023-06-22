import Carousel from 'react-bootstrap/Carousel';

export function MyCarousel({images}) {
  return (
    <Carousel> 

        {images.map((image, index)=>{
            return(
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            )
        })}
    </Carousel>
  );
}