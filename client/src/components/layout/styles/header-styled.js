import styled from "styled-components";

const Header = styled.div`
  display: block;
  height: 75px;
  z-index: 5;
  &.sticky-header {
    background-color: #ffffff;
    -webkit-box-shadow: 0 0 10px rgb(204 204 204 / 34%);
    -moz-box-shadow: 0 0 10px rgba(204, 204, 204, 0.34);
    -ms-box-shadow: 0 0 10px rgba(204, 204, 204, 0.34);
    -o-box-shadow: 0 0 10px rgba(204, 204, 204, 0.34);
    box-shadow: 0 0 10px rgb(204 204 204 / 34%);
    padding: 0 20px;
    width: 100%;

  &.sticked {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export default Header;
