import styled from 'styled-components'

const ItemContainer = styled.div`
  background-color: ${({ theme, mode }) =>
    mode === 'light'
      ? theme.colors.light
      : mode === 'dark'
      ? theme.colors.dark
      : theme.colors.light};
  width: fit-content;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
`

export default ItemContainer
