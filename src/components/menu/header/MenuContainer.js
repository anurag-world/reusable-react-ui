import styled from 'styled-components'

const MenuContainer = styled.button`
  display: flex;
  align-content: flex-start;
  align-items: center;
  justify-content: space-between;
  width: 112px;
  height: 32px;
  background-color: ${({ theme, mode }) =>
    mode === 'light'
      ? theme.colors.light
      : mode === 'dark'
      ? theme.colors.dark
      : theme.colors.light};
  color: ${({ theme, mode }) =>
    mode === 'light'
      ? theme.colors.dark
      : mode === 'dark'
      ? theme.colors.light
      : theme.colors.dark};
  border: ${({ theme }) => theme.border};
  text-align: left;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  padding: 0 8px 0 12px;
  margin-bottom: 4px;
`

export default MenuContainer
