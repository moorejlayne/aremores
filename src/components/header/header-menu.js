import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { SubMenu, Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { basePath } from '../../pages/page-details';
import menuIcon from '../../assets/menu-icon.svg';

export const HeaderMenuComponent = ({ categoriesAll, categoriesData, history }) => {

    const [isCollapsed, setCollapsed] = useState(true)

    const handleClick = (category, route) => {
        history.push(route)
    }

    const getSubcategories = (subcategoriesAll, subcategoriesData, route) => {
        return subcategoriesAll.map(subcategory => {
            const newRoute = `${route}${subcategoriesData[subcategory].route}`
            if (subcategoriesData[subcategory].hasSubcategories) {
                return (
                    <SubMenu label={ subcategoriesData[subcategory].label }>
                        {
                            getSubcategories(subcategoriesData[subcategory].subcategoriesAll, subcategoriesData[subcategory].subcategoriesData, newRoute)
                        }
                    </SubMenu>

                )
            } else {
                return (
                    <MenuItem
                        key={subcategory}
                        className={'subcategory-item'}
                        onClick={() => handleClick(subcategory, newRoute)}
                    >
                        { subcategoriesData[subcategory].label }
                    </MenuItem>
                )
            }
        })
    }


    const menu = isCollapsed
        ?   <Menu
                key={'hamburger'}
                arrow={true}
                align={'center'}
                menuButton={
                    <div className={'hamburger-menu'}>
                        <MenuButton
                            className={'hamburger-menu-button'}
                        >
                            <img src={ menuIcon } alt="Menu" />
                        </MenuButton>
                    </div>
                }
            >
                { getSubcategories(categoriesAll, categoriesData, basePath) }
            </Menu>
        :   categoriesAll.map(category => {
                const newRoute = `${basePath}${categoriesData[category].route}`
                if (categoriesData[category].hasSubcategories) {
                    const subcategories = getSubcategories(categoriesData[category].subcategoriesAll, categoriesData[category].subcategoriesData, newRoute)
                    return (
                        <Menu
                            key={category}
                            arrow={true}
                            align={'center'}
                            menuButton={
                                <div className={'header-menu-item'}>
                                    <MenuButton
                                        className={'header-menu-button'}
                                    >
                                        { categoriesData[category].label }
                                    </MenuButton>
                                </div>
                            }
                        >
                            { subcategories }
                        </Menu>
                    )
                } else {
                    return (
                        <div className={'header-menu-item'} key={category}>
                            <MenuButton
                                className={'header-menu-button'}
                                onClick={() => handleClick(category, newRoute)}
                            >
                                { categoriesData[category].label }
                            </MenuButton>
                        </div>
                    )
                }
            })

    return (
        <div className={ `header-menu` }>
            { menu }
        </div>
    )
}

export const HeaderMenu = withRouter(HeaderMenuComponent);