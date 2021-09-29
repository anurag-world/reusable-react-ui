import React, { useState, useEffect, createRef } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../style/theme'
import MenuItems from './content/MenuItems'
import MenuHeader from './header/MenuHeader'
import PropTypes from 'prop-types'

const Menu = ({ mode, getData }) => {
  const [toggle, setToggle] = useState(false)

  const [data, setData] = useState(getData)

  const ref = createRef()
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false)
      }
    }

    // Bind the event listener
    document.addEventListener('click', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref])

  const select = (id) => {
    const newSelect = [...data]
    newSelect.forEach((arr) => (arr.selected = false))
    newSelect[id - 1].selected = true
    setData(newSelect)
    setToggle(false)
  }

  const modeInput =
    mode === 'light' ? 'light' : mode === 'dark' ? 'dark' : 'light'

  return (
    <div ref={ref}>
      <ThemeProvider theme={theme}>
        {/* Menu Header */}
        <MenuHeader
          toggle={() => setToggle(!toggle)}
          data={data}
          mode={modeInput}
        />

        {/* Menu Items */}
        {toggle && <MenuItems select={select} data={data} mode={modeInput} />}
      </ThemeProvider>
    </div>
  )
}

Menu.propTypes = {
  mode: PropTypes.string,
  getData: PropTypes.array.isRequired,
}

MenuHeader.propTypes = {
  data: PropTypes.array.isRequired,
  mode: PropTypes.string,
  toggle: PropTypes.func,
}

MenuItems.propTypes = {
  data: PropTypes.array.isRequired,
  mode: PropTypes.string,
  select: PropTypes.func,
}

export default Menu
