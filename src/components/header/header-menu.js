import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { SubMenu, Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { basePath } from '../../pages/page-details';
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export const HeaderMenuComponent = ({ categoriesAll, categoriesData, history }) => {

    const minWidth = 1025;
    const isMenuInitiallyCollapsed = () => {
        return window.innerWidth <= minWidth;
    }

    const [isCollapsed, setCollapsed] = useState(isMenuInitiallyCollapsed())


    useEffect(() => {
        function handleResize() {
            setCollapsed(window.innerWidth <= minWidth)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })


    const handleClick = (category, route) => {
        history.push(route)
    }

    const getSubcategories = (subcategoriesAll, subcategoriesData, route) => {
        return subcategoriesAll.map(subcategory => {
            const newRoute = `${route}${subcategoriesData[subcategory].route}`
            if (subcategoriesData[subcategory].hasSubcategories) {

                const submenuLabel = (
                    <>
                        <IoIosArrowBack />
                        { subcategoriesData[subcategory].label }
                    </>
                )

                return (
                    <SubMenu key={ `${subcategory}-outer` } label={ submenuLabel }>
                        {
                            getSubcategories(subcategoriesData[subcategory].subcategoriesAll, subcategoriesData[subcategory].subcategoriesData, newRoute)
                        }
                    </SubMenu>

                )
            } else {
                return (
                    <MenuItem
                        key={ `${subcategory}-inner` }
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
                align={'end'}
                menuButton={
                    <div className={'hamburger-menu'}>
                        <MenuButton className={'hamburger-menu-button'}>
                            <IoMenu />
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
                            align={'end'}
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