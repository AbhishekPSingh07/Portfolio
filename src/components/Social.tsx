import React from 'react';
import styled from 'styled-components';
import config from '../config';
import Side from './Side';
import Icon, { IconName } from './icons/icon';

// Define the type for the props
interface SocialProps {
  isHome?: boolean;
}

// Define the styled component
const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social: React.FC<SocialProps> = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {config.socialMedia &&
        config.socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name as IconName}/>
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

export default Social;