import styled from 'styled-components'

const Item = styled.button`
  display: flex;
  align-content: flex-start;
  background-color: ${({ mode, theme }) =>
    mode === 'light'
      ? theme.colors.light
      : mode === 'dark'
      ? theme.colors.dark
      : mode === 'selected'
      ? theme.colors.primary
      : theme.colors.light};
  color: ${({ mode, theme }) =>
    mode === 'light'
      ? theme.colors.dark
      : mode === 'dark' || mode === 'selected'
      ? theme.colors.light
      : theme.colors.dark};
  font-size: 12px;
  padding: 4px 16px 4px 12px;
  margin-top: 2px;
  width: 100%;
  height: ${({ theme }) => theme.spacing.s30};
  cursor: pointer;
  border: none;

  :hover {
    background-color: ${({ theme, mode }) =>
      mode === 'light'
        ? theme.colors.greyTwo
        : mode === 'dark'
        ? theme.colors.greyFour
        : mode === 'selected'
        ? theme.colors.darkPrimary
        : theme.colors.greyTwo};
  }

  :last-child {
    margin-bottom: 2px;
  }
`
export default Item
