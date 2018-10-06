import React from 'react'
import styled from 'styled-components'

const whenImageRight = `
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #d4dada;
  background-position-x: right;
`

const Wrapper = styled.div`
  height: calc(33.333vh - 2rem);
  min-height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('${props => props.image}') center;
  background-size: cover;
  ${props => props.imageRight ? whenImageRight : ''}
`

const Text = styled.span`
  padding: 1rem;
  color: white;
  font-weight: bold;
  font-size: ${props => props.size}rem;
  text-align: ${props => props.align};
  // font-size: ${props => props.size === 1 ? '1rem' : '2rem'}; // just for s
  color: white;
  text-shadow:
    -1px -1px 0 #262626,
    1px -1px 0 #262626,
    -1px 1px 0 #262626,
    1px 1px 0 #262626;
`

const Section = ({ image, textLeft, textRight, flip, imageRight }) =>
  <Wrapper image={image} imageRight={imageRight}>
    <Text size={flip ? 1.2 : 2} align='left'>{textLeft}</Text>
    <Text size={flip ? 2 : 1.2} align={flip ? 'left' : 'right'}>{textRight}</Text>
  </Wrapper>

export default Section