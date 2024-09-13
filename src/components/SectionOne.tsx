import React from 'react'
import styled from 'styled-components'

const SectionOneContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 80px;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const BackgroundGrid = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
    gap: 1px;
    background-color: #8f8f8f;
    pointer-events: none;
`

const Square = styled.div`
    position: relative;
    aspect-ratio: 1;
    width: 100px;
    height: 100px;
`

const BottomTriangle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid #afafaf;
`

const InnerBottomBottomTriangle = styled.div`
    position: absolute;
    bottom: -50px;
    left: -50px;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 20px solid #aaadac;
`

const InnerBottomLeftTriangle = styled.div`
    position: absolute;
    bottom: -50px;
    left: -100px;
    border-left: 50px solid transparent;
    border-top: 50px solid transparent;
    border-right: 50px solid #86969f;
`

const InnerBottomRightTriangle = styled.div`
    position: absolute;
    bottom: -50px;
    right: -100px;
    border-right: 50px solid transparent;
    border-top: 50px solid transparent;
    border-left: 50px solid #474749;
`

const TopTriangle = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    border-top: 50px solid #777777;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
`

const LeftTriangle = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 50px solid #595959;
    border-bottom: 50px solid transparent;
`

const RightTriangle = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 50px solid #303030;
    border-bottom: 50px solid transparent;
`

const InnerLeftTopTriangle = styled.div`
    position: absolute;
    left: -50px;
    top: -50px;
    border-left: 50px solid #424343;
    border-top: 50px solid transparent;
`

const InnerLeftBottomTriangle = styled.div`
    position: absolute;
    left: -50px;
    border-left: 50px solid #8c8d8b;
    border-top: 50px solid #8c8d8b;
`

const InnerLeftLeftTriangle = styled.div`
    position: absolute;
    left: -50px;
    top: -50px;
    border-left: 25px solid #adb6bd;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
`

const InnerRightBottomTriangle = styled.div`
    position: absolute;
    left: 50px;
    border-left: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-top: 50px solid #5a5e5e;
`

const InnerRightTopTriangle = styled.div`
    position: absolute;
    left: 50px;
    top: -50px;
    border-right: 50px solid #5a5e5e;
    border-top: 50px solid transparent;
`

const InnerRightRightTriangle = styled.div`
    position: absolute;
    left: 75px;
    top: -50px;
    border-right: 25px solid #3c3c3b;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
`


const InnerTopRightTriangle = styled.div`
    position: absolute;
    top: -50px;
    border-right: 50px solid transparent;
    border-top: 50px solid #5b5b59;
    border-bottom: 50px solid transparent;
`

const InnerTopLeftTriangle = styled.div`
    position: absolute;
    top: -50px;
    left: -50px;
    border-top: 50px solid #a4a8a7;
    border-left: 50px solid transparent;
`

const InnerTopTopTriangle = styled.div`
    position: absolute;
    top: -50px;
    left: -50px;
    border-right: 50px solid transparent;
    border-top: 25px solid #3b3a3b;
    border-left: 50px solid transparent;
`

const LeftSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const RightSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    z-index: 1;
`

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
`

const WhatsAppButton = styled.a`
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.primary?.[500]};
    color: white;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.primary?.[600]};
    }
`

const SectionOne: React.FC = () => {
  return (
    <SectionOneContainer>
      <BackgroundGrid>
        {Array.from({ length: 1000 }).map((_, index) => (
          <Square key={index}>
            <TopTriangle>
              <InnerTopRightTriangle />
              <InnerTopLeftTriangle />
              <InnerTopTopTriangle />
            </TopTriangle>
            <LeftTriangle>
              <InnerLeftTopTriangle />
              <InnerLeftBottomTriangle />
              <InnerLeftLeftTriangle />
            </LeftTriangle>
            <RightTriangle>
              <InnerRightBottomTriangle />
              <InnerRightTopTriangle />
              <InnerRightRightTriangle />
            </RightTriangle>
            <BottomTriangle>
              <InnerBottomLeftTriangle />
              <InnerBottomRightTriangle />
              <InnerBottomBottomTriangle />
            </BottomTriangle>
          </Square>
        ))}
      </BackgroundGrid>
      <LeftSide>
      </LeftSide>
      <RightSide>
        <Title>Bem-vindo ao Nosso Site!</Title>
        <Description>
          Descubra nossas soluções inovadoras para suas necessidades.
        </Description>
        <WhatsAppButton href="https://wa.me/5511999999999" target="_blank">
          Enviar Mensagem
        </WhatsAppButton>
      </RightSide>
    </SectionOneContainer>
  )
}

export default SectionOne
