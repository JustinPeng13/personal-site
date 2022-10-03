import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClientOnly from './ClientOnly';


const ConicDiv = styled.div`
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  position: relative;
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  
  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -75%;
    top: -75%;
    width: 250%;
    height: 250%;
    background-color: ${props => props.dark ? 'rgb(17, 24, 39);' : 'rgb(250, 250, 250);'}
    // background-color: rgb(250, 250, 250);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(transparent, rgba(99, 102, 241, 1), transparent 75%);
    animation: rotate 5s linear infinite;
  }
    
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    // background: #000;
    border-radius: 5px;
  }
`

export default function Conic({ children }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <ClientOnly>
      <ConicDiv dark={isDark}>
        { children }
      </ConicDiv>
    </ClientOnly>
  )
}