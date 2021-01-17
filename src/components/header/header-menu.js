import React from 'react';
import { withRouter } from 'react-router-dom'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { allPaths } from '../../paths';


export const HeaderMenuComponent = ({ className, categories, categoriesData, history }) => {

    const handleClick = category => {
        history.push(allPaths[category])
    }

    const menu = categories.map(category => {
        const subcategoriesAll = categoriesData[category].subcategoriesAll

        if (subcategoriesAll.length) {
            const subcategoriesByName = categoriesData[category].subcategoriesByName
            const subcategories = subcategoriesAll.map(subcategory => {
                return (
                    <MenuItem
                        key={subcategory}
                        className={'subcategory-item'}
                        onClick={() => handleClick(subcategory)}
                    >
                        { subcategoriesByName[subcategory] }
                    </MenuItem>
                )
            })
            return (
                <Menu
                    key={category}
                    arrow={true}
                    align={'end'}
                    // className={'header-menu-item'}
                    menuButton={
                        <div className={'header-menu-item'}>
                            <MenuButton className={'header-menu-button'}>{ categoriesData[category].label }</MenuButton>
                        </div>
                    }
                >
                    { subcategories }
                </Menu>
            )
        }
        return (
            <div className={'header-menu-item'} key={category}>
                <MenuButton
                    className={'header-menu-button'}
                    onClick={() => handleClick(category)}
                >
                    { categoriesData[category].label }
                </MenuButton>
            </div>
        )
    })

    return (
        <div className={ `header-menu ${className}`}>
            { menu }
        </div>
    )
}

export const HeaderMenu = withRouter(HeaderMenuComponent);