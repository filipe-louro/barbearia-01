'use client'
import Header from '@/components/Header'
import styled from 'styled-components'
import SectionOne from '@/components/SectionOne'
import React from 'react'
import LogoAnimation from '@/components/LogoAnimation'

const MainContainer = styled.div``

const Main = () => {
  return (
    <MainContainer>
      <LogoAnimation />
      <Header />
      <SectionOne />
    </MainContainer>
  )
}

export default Main
