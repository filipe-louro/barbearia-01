'use client'

import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`

const Logo = styled(motion.img)`
    width: 150px;
    height: 150px;
`

const overlayVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
}

const logoVariants = {
  initial: { scale: 1, opacity: 1 },
  exit: { scale: 1, opacity: 0, transition: { duration: 1, ease: 'easeInOut' } },
}

const LogoAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1800)
  }, [pathname])

  return (
    <AnimatePresence>
      {isAnimating && (
        <Overlay
          variants={overlayVariants}
          initial="initial"
          exit="exit"
        >
          <Logo
            src="/logo.jpeg"
            alt="Logo"
            variants={logoVariants}
            initial="initial"
            exit="exit"
          />
        </Overlay>
      )}
    </AnimatePresence>
  )
}

export default LogoAnimation
