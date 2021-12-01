import * as COLORS from './colors.json'
import styled from '@emotion/styled'
import { MdPowerSettingsNew } from 'react-icons/md'

const respWidth = () =>
  window.innerWidth < 540
    ? '150px'
    : window.innerWidth < 900
    ? '200px'
    : window.innerWidth < 1400
    ? '250px'
    : '300px'

export const sideBarOpenWidth = respWidth()
export const sideBarWidth = '50px'

export const PortalDiv: any = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow: auto;
  box-shadow: inset 0 3px 3px 3px rgba(255, 255, 255, 0.5);
  ${(props: any) => {
    if (props.embed) {
      return `width: '100vw'`
    }
    return `
      margin-left: ${props.menuOpen || !props.hasSidebar ? '0px' : '50px'};
      width: calc(100vw - ${
        props.sidebar
          ? props.menuOpen
            ? sideBarOpenWidth
            : sideBarWidth
          : '0px'
      });
    `
  }};
  @media (max-width: 425px) {
    height: unset;
    min-height: 100%;
    margin-left: 0;
  }
`
export const SideBarDiv: any = styled.div`
  display:flex;
  top: 0;
  bottom: 0;
  overflow: hidden auto;
  padding-top: 25px;
  background: #1a243c;
  transition: 0.4s linear;
  ${(props: any) => `
    z-index: ${props.theme.global.zIndex.sidebar};
    position: ${props.menuOpen ? 'relative' : 'absolute'};
    width: ${props.menuOpen ? sideBarOpenWidth : sideBarWidth};
    span {
      opacity: 0;
      overflow: hidden;
      transition: 0s;
    }
    .icon {
      margin-right: ${props.menuOpen ? '10px' : '-109px'};
    }
    .chevron {
      opacity: 0;
      margin-left: auto;
      margin-right: ${props.menuOpen ? '15px' : 0};
    }
    .active-child {
      background: ${props.menuOpen ? '#4285f5;' : 'inherit'};
    }
  `}

  &:hover {
    width: ${sideBarOpenWidth};
    transition: 0.4s linear;
    span {
      opacity: 1;
      transition: 0.3s ease;
    }
    .icon {
      margin-right: 10px;
    }
    .chevron {
      opacity: 1;
      margin-right: 15px;
    }
    .active-child {
      background: #4285f5;
    }
    .hover .active-sub-menu {
      transform: scale(1, 1);
      height: auto;
    }

    @media only screen and (max-width: 425px) {
      width: ${(props: any) => (props.menuOpen ? '300px' : 0)};
      position: absolute;
    }
  }

  @media only screen and (max-width: 425px) {
    width: ${(props: any) => (props.menuOpen ? '300px' : 0)};
    position: absolute;
  }
`

export const MenuLevel: any = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    opacity: 0.7;
    &.active-child,
    &.active {
      opacity: 1;
    }
  }
  &:hover {
    > a {
      opacity: 1;
    }
  }
  &.hover {
    > a {
      .chevron {
        transform: rotateZ(180deg);
      }
    }
  }
  > div {
    height: 0px;
    overflow: hidden;
  }
`

export const Anchor: any = styled.a`
  color: white;
  display: flex;
  align-items: center;
  padding: 12px 0 12px 15px;
  font-size: 14px;
  letter-spacing: 0.8px;
  text-decoration: none;
  overflow: hidden;
  &.active {
    background: #20242f;
  }
  > span {
    ${(props: any) => `
      transition: 0s;
      opacity: ${props.menuOpen ? '1' : '0'};
    `}
  }
`

export const LogoutIcon = styled(MdPowerSettingsNew)`
  color: white;
  cursor: pointer;
  margin-right: 10px;
`

export const ErrorBoundaryDiv = styled.div`
  padding: 10px 20px;
  text-align: center;
  margin-top: 10%;
`
