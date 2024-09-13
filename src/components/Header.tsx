'use client'
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    width: 100%;
    color: ${({ theme }) => theme.text?.[50]};
    position: absolute;
`

const LogoContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 128px;
`

const CircularTextContainer = styled.div`
    position: absolute;
    width: 128px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CircularText = styled(motion.div)`
    position: absolute;
    width: 128px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CircularLetter = styled(motion.span)`
    position: absolute;
    font-size: 16px;
    white-space: nowrap;
`

const ActionsContainer = styled.div`
    display: flex;
    gap: 16px;
`

const ActionButton = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.primary?.[500]};
    color: ${({ theme }) => theme.text?.[950]};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.primary?.[600]};
        color: ${({ theme }) => theme.text?.[100]};
    }

    &:focus {
        outline: none;
    }
`

const LogoImage = styled(Image)`
    border-radius: 50%;
`

const Header: React.FC = () => {
  const text = 'Rodando em círculo ao redor do logo'
  const radius = 75

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src="/logo.jpeg" alt="logo" width={128} height={128} />
        <CircularTextContainer>
          <CircularText
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
          >
            {Array.from(text).map((letter, index) => {
              const angle = (index / text.length) * 2 * Math.PI
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <CircularLetter
                  key={index}
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${angle + Math.PI / 2}rad)`,
                  }}
                >
                  {letter}
                </CircularLetter>
              )
            })}
          </CircularText>
        </CircularTextContainer>
      </LogoContainer>
      <ActionsContainer>
        <ActionButton>Início</ActionButton>
        <ActionButton>Valores</ActionButton>
        <ActionButton>Contato</ActionButton>
        <ActionButton>Sobre</ActionButton>
      </ActionsContainer>
    </HeaderContainer>
  )
}

export default Header
