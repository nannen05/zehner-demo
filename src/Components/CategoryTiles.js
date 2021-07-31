import React from 'react';
import styled from 'styled-components'

import arrow from '../Assets/arrow.png'

const Wrapper = styled.div `
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
`

const Tile = styled.div `
    height: 150px;
    width: 100%;
    background: #F2F2F2;
    position: relative;
    margin-bottom: 8px; 

    &:nth-child(odd) {
        @media (min-width: 768px) {
            margin-right: 8px;
        }
    }

    @media (min-width: 768px) {
        height: 520px;
        width: calc(50% - 8px);
    }

    &:nth-child(3) {
        > div {
            top: 30px;
            right: -23px;
            width: 200px;

            @media (min-width: 768px) {
                max-width: 500px;
                width: 500px;
                top: 0px;
                right: 0px;
            }
        }
    }
`

const TileBackground = styled.div `
    background-image: url("${props => props.image ? props.image : ""}");
    background-position: center;
    max-width: 100%;
    margin: 0 0 0 auto;
    height: 120px;
    width: 120px;
    background-repeat: no-repeat;
    background-size: contain;
    top: 15px;
    right: 18px;
    position: relative;

    @media (min-width: 768px) {
        background-position: ${props => props.position ? props.position: "center"};
        max-width: ${props => props.width ? props.width: "100%"};
        width: ${props => props.width ? props.width: "100%"};
        margin: 0 auto;
        height: 520px;
        top: 0px;
        right: 0px;
    }
`

const TileLink = styled.a `
    position: absolute;
    top: 50%;
    left: 18px;
    z-index: 1;
    cursor: pointer;
    font-family: Century Gothic, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.05em;
    transform: translateY(-50%);

    &:hover {
        text-decoration: underline;
    }

    &:before {
        content: "";
        position: absolute;
        width: 9px;
        height: 20px;
        background-size: 9px 20px;
        background-image: url(${arrow});
        right: -30px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: 768px) {
        top: 35px;
        left: 40px;
        transform: translateY(0);
    }
`

const CategoryTile = ( props ) => {
    const { image, ctaCopy, ctaURL, width, position } = props
    return (
        <Tile>
            <TileBackground image={image} width={width} position={position}></TileBackground>
            <TileLink href={ctaURL}>
                {ctaCopy}
            </TileLink>
        </Tile>
    )
}

class CategoryTiles extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    const tiles = this.props.data;

    return <section>
                <Wrapper>
                    {tiles.map(({ index, ...otherItemProps }) => (
                            <CategoryTile key={index} {...otherItemProps} />
                        ))
                    }
                </Wrapper>
            </section>
  }
}

export default CategoryTiles;