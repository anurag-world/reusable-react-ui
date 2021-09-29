import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import ItemContainer from './ItemContainer'
import Item from './Item'
import ItemTitle from './ItemTitle'
import PropTypes from 'prop-types'

const MenuItems = ({ select, data, mode }) => {
  return (
    <ItemContainer
      mode={mode === 'light' ? 'light' : mode === 'dark' ? 'dark' : 'light'}
    >
      {data.map((item) => (
        <Item
          key={item.id}
          mode={
            item.selected
              ? 'selected'
              : mode === 'light'
              ? 'light'
              : mode === 'dark'
              ? 'dark'
              : 'light'
          }
          onClick={() => select(item.id)}
        >
          {item.selected && <CheckIcon fontSize="inherit" />}
          <ItemTitle
            mode={
              item.selected
                ? 'selected'
                : mode === 'light'
                ? 'light'
                : mode === 'dark'
                ? 'dark'
                : 'light'
            }
          >
            {item.title}
          </ItemTitle>
        </Item>
      ))}
    </ItemContainer>
  )
}

MenuItems.propTypes = {
  data: PropTypes.array.isRequired,
  mode: PropTypes.string,
  select: PropTypes.func,
}

export default MenuItems
