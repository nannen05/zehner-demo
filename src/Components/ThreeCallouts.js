import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components'

const Wrapper = styled.div `
    max-width: 1400px;
    margin: 0 auto;
    display: block;
    padding-top: 60px;
    padding-bottom: 60px;
    overflow: hidden;

    @media (min-width: 768px) {
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        justify-content: space-evenly;
    }
`

const Callout = styled.div `
    max-width: 240px;
    margin: 0 auto 30px;
    padding: 0 15px;
    &:last-child {
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        margin: 0 auto;

        &:last-child {
            margin: 0 auto;
        }
    }
`

const CalloutImage = styled.div `
    img {
        max-width: 90px;
        height: 50px;
        object-fit: cover;
        display: block;
        margin: 0 auto;

        @media (min-width: 768px) {
            height: 70px;
        }
    }
`

const CalloutTitle = styled.h5 `
    font-family: Century Gothic, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 15px;
`

const CalloutCopy = styled.p `
    font-family: Century Gothic, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-align: center;
`

const CalloutItem = ( props ) => {
    const { image, title, copy } = props
    return (
       <Callout>
           <CalloutImage ><img src={image}/></CalloutImage>
           <CalloutTitle>{title}</CalloutTitle>
           <CalloutCopy>{copy}</CalloutCopy>
       </Callout>
    )
}

class ThreeCallouts extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    const callouts = this.props.data;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

    return <section>
                <Wrapper>
                    <Slider {...settings}>
                        {callouts.map(({ index, ...otherItemProps }) => (
                                <CalloutItem key={index} {...otherItemProps} />
                            ))
                        }
                    </Slider>
                </Wrapper>
            </section>
  }
}

export default ThreeCallouts;