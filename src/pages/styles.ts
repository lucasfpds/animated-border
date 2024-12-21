import { keyframes, styled } from 'styled-components'

const borderAnimation = keyframes`
  0% {
    border-image-source: linear-gradient(90deg, #b990f2 0%, #ff6778 40%, #ffba71 72%, #ffffff 100%);
  }
  25% {
    border-image-source: linear-gradient(180deg, #b990f2 0%, #ff6778 40%, #ffba71 72%, #ffffff 100%);
  }
  50% {
    border-image-source: linear-gradient(270deg, #b990f2 0%, #ff6778 40%, #ffba71 72%, #ffffff 100%);
  }
  75% {
    border-image-source: linear-gradient(360deg, #b990f2 0%, #ff6778 40%, #ffba71 72%, #ffffff 100%);
  }
  100% {
    border-image-source: linear-gradient(90deg, #b990f2 0%, #ff6778 40%, #ffba71 72%, #ffffff 100%);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background:rgb(245, 242, 248);
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 40%;
`;

interface CustomCardProps {
  isCardAnimated: boolean;
}

export const CustomCard = styled(Card)<CustomCardProps>`
  padding: 16px 0;
  margin: 32px 0;
  border-radius: 8px;
  position: relative;

  & > * {
    padding: 0 24px;
    margin: 0;
  }

  hr {
    border-bottom-color: white;
    margin: 16px 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    ${({ isCardAnimated }) => `
      border: ${isCardAnimated ? '4px solid transparent' : 'none'};
    `}
    border-image-slice: 10;
    border-image-source: linear-gradient(90deg, #b990f2 0%, #ff6778 40%, #ffba71 72%, #ffffff 100%);
    border-radius: inherit;
    filter: blur(5px);
    pointer-events: none;
    animation: ${borderAnimation} 8s ease-out infinite;
  }
`;

export const Button = styled.button`
  background:rgb(255, 255, 255);
  color: black;
  padding: 16px 32px;
  margin: 0 24px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: bold;

  &:hover {
    background:rgb(227, 214, 234);
  }
`;
