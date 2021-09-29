import styled from 'styled-components'

const ItemTitle = styled.span`
  font-family: ${({ theme }) => theme.fontStyle.default};
  margin-left: ${({ theme, mode }) =>
    mode === 'selected' ? theme.spacing.s15 : theme.spacing.s30};
`
export default ItemTitle
