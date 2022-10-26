import TrendingMovie from "./TrendingMovie";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import styled from "styled-components";

const Trending = ({output}) => {

    return (
        <SpliderComponent >
            <h2>{output.title}</h2>
            <Splide
                options={{
                    fixedWidth: 700,
                    autoplay: true,
                    perMove: 1,
                    interval: 3500,
                    pagination: false,
                    arrows: true,
                    direction: 'ltr',
                    pauseOnFocus: true,
                    pauseOnHover: false,
                    start: 0,
                    gap: 40,
                    breakpoints: {
                        1920: {
                            fixedWidth: 600,
                            gap: 60,
                        },
                        1440: {
                            fixedWidth: 400,
                            gap: 30,
                        },
                        768: {
                            fixedWidth: 240,
                            gap: 16
                        }
                    }

                }}
                aria-label="Trending Movies"
            >   
            {output.filter(item => item.isTrending).map((item, index) =>
              
              <SplideSlide key={index}>
              <TrendingMovie item={item} />
              </SplideSlide>
              )}
              
            </Splide>
        </SpliderComponent >
    )
}

export default Trending;


const SpliderComponent = styled.div`
  margin-top:70px;
`