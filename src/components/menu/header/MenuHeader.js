import React from 'react'
import 'styled-components/macro'
import MenuContainer from './MenuContainer'
import MenuTitle from './MenuTitle'
import ExpandMore from '@material-ui/icons/ExpandMore'
import PropTypes from 'prop-types'

const MenuHeader = ({ toggle, data, mode }) => {
  // Show selected menu header
  // Filter selected menu object
  const listSelected = data.filter((item) => item.selected === true)

  // Get title for selected menu object
  const menuTitle = listSelected.map((item) => item.title)

  return (
    // Menu Header
    <MenuContainer onClick={() => toggle()} mode={mode}>
      <MenuTitle>{menuTitle}</MenuTitle>
      <ExpandMore
        fontSize="small"
        css={`
          padding: 0;
          color: ${mode === 'light' ? '#6e7492' : '#ffffff'};
          margin-left: 12px;
        `}
      />
    </MenuContainer>
  )
}

MenuHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
}

MenuContainer.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default MenuHeader
