import React, { useState } from 'react';
import { HeaderMenu } from './header-menu';

export const HeaderMenuItem = ({ categoryData }) => {

    const hasSubCategories = categoryData.subcategoriesAll && categoryData.subcategoriesAll.length;
    const [isOpen, setIsOpen] = useState(false);


    const handleMenuClick = () => {
        if (hasSubCategories) {
            if (isOpen) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        } else {
            // route to where it should go
        }
    }

    return (
        <div className={ 'header-menu-item' }>
            <button
                className={ 'header-menu-button' }
                onClick={ ()=> handleMenuClick() }
            >
                { `${ categoryData.label || categoryData }` }
            </button>
            { isOpen && <HeaderMenu className={ 'subcategory' } categories={ categoryData.subcategoriesAll } categoriesData={ categoryData.subcategoriesByName }/> }
        </div>
    )
}