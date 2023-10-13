import styled from 'styled-components';
import searchIcon from '../img/search-icon.svg'

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #808080;
  border-radius: 15px;
  background-color: #808080;
  font-size: 16px;
  outline: none;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SearchBarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 77px;
 padding: 33px;
  color: #696969;
  background-color: #696969;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;
  background-color: #696;
  border-radius: 8px;
  overflow: hidden;
`
export const SearchButton = styled.button`
  display: inline-block;
  border-radius: 15px;
  margin: 10px;
  width: 48px;
  height: 38px;
  border: 0;
  background-image: url(${searchIcon});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;`