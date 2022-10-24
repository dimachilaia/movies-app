import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function Trending() {
  return (
    <Splide options={ { rewind: true } } aria-label="React Splide Example">
      <SplideSlide>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Image 1" style={{width:'500px'}}/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Image 1" style={{width:'505px'}}/>
      </SplideSlide>
    
    </Splide>
  );
}