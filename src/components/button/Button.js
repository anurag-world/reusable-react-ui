import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../style/theme'

/**
 * The only true button.
 *
 * @visibleName The Best Button Ever 🐙
 */

const Btn = styled.button(({ theme, color }) => ({
  display: 'inline-block',
  backgroundColor:
    color === 'light'
      ? theme.colors.light
      : color === 'primary'
      ? theme.colors.primary
      : color === 'secondary'
      ? theme.colors.secondary
      : color === 'success'
      ? theme.colors.success
      : color === 'danger'
      ? theme.colors.danger
      : color === 'warning'
      ? theme.colors.warning
      : color === 'info'
      ? theme.colors.info
      : color === 'dark'
      ? theme.colors.dark
      : theme.colors.greyFour,
  color:
    color === 'light'
      ? theme.colors.fontDark
      : color === 'warning'
      ? theme.colors.fontDark
      : color === 'info'
      ? theme.colors.fontDark
      : theme.colors.fontLight,
  fontSize: theme.fontSize.base,
  fontWeight: theme.fontWeight.regular,
  lineHeight: theme.lineHeight,
  textAlign: 'center',
  textDecoration: 'none',
  border: 'none',
  borderRadius: theme.borderRadius,
  padding: '.375rem .75rem',
  transition:
    'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  cursor: 'pointer',
}))

const ButtonVariant = styled(Btn)`
  &:hover {
    background-color: ${({ theme, color }) =>
      color === 'light'
        ? theme.colors.greyTwo
        : color === 'primary'
        ? theme.colors.darkPrimary
        : color === 'secondary'
        ? theme.colors.darkSecondary
        : color === 'success'
        ? theme.colors.darkSuccess
        : color === 'danger'
        ? theme.colors.darkDanger
        : color === 'warning'
        ? theme.colors.warningHover
        : color === 'info'
        ? theme.colors.infoHover
        : color === 'dark'
        ? theme.colors.darkHover
        : theme.colors.greyFour};
  }
`

export const Button = ({ color, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonVariant color={color}>{children}</ButtonVariant>
    </ThemeProvider>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.oneOf([
    '',
    'light',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
  ]),
  children: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  color: '',
}
