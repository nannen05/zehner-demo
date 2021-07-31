import React from 'react';
import styled from 'styled-components'

const HeroWrapper = styled.div `
    background: #E5E5E5;

    @media (min-width: 768px) {
        background: #E9E9E9;
    }
`

const HeroContainer = styled.div `
    height: 550px;
    width: 100%;
    position: relative;
    background: #E5E5E5;
    display: flex;
    align-items: flex-start;
    text-align: center;

    @media (min-width: 768px) {
        background: #E9E9E9;
        height: 620px;
        text-align: right;
        justify-content: flex-end;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
    }

    ${props => props.contentAlignment === 'right' ? `
        justify-content: flex-end;
        text-align: right` : ""
    }
`

const HeroBackground = styled.div `
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    z-index: 0;
    max-width: 1400px;
    transform: translateX(-50%);

    img {
        width: 100%;
        height: 550px;
        object-fit: contain;

        @media (min-width: 768px) {
            height: 620px;
            object-fit: cover;
        }
    }
`

const HeroContent = styled.div `
    position: relative;
    z-index: 1;
    max-width: 580px;
    margin: 0 30px;

    @media (min-width: 768px) {
        margin: 0 180px;

    }
`

const HeroTitle = styled.h1 `
    font-family: Century Gothic;, sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    max-width: 490px;
    margin-left: auto;

    @media (min-width: 768px) {
        font-size: 44px;
        line-height: 62px;
    }
`   

const HeroCopy = styled.h5 `
    font-family: Century Gothic;, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.05em;
    margin-bottom: 60px;
`

const HeroCta = styled.a `
    font-family: Century Gothic;, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.05em;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background: #000;
    border-radius: 10px;
    padding: 15px 50px;
    transition: 300ms;

    &:hover {
        background: rgba(0, 0, 0, 0.75)
    }

`

class Hero extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    const hero = this.props.data;

    return <section>
                <HeroWrapper>
                    <HeroContainer>
                        <HeroBackground>
                            <picture>
                                <source media="(max-width: 767px)" srcSet={hero.imageMobile}/>
                                <source media="(min-width: 768px)" srcSet={hero.image}/>
                                <img src={hero.image} alt="Hero Image"/>
                            </picture>
                        </HeroBackground>
                        <HeroContent contentAlignment={hero.contentAlignment}>
                            <HeroTitle>{hero.title}</HeroTitle>
                            <HeroCopy>{hero.copy}</HeroCopy>
                            <HeroCta href={hero.ctaUrl}>{hero.ctaCopy}</HeroCta>
                        </HeroContent>
                    </HeroContainer>
                </HeroWrapper>
            </section>
  }
}

export default Hero;