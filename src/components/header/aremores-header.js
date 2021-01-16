import React from 'react';
import { HeaderMenu } from './header-menu';
import { AremoresLogo } from './aremores-logo';
import { headerMenuFamilyCategories } from '../../data/header-menu-data';

export const AremoresHeader = () => {

    return (
        <div className={ 'aremores-header' }>
            <HeaderMenu className={ 'family' } categories={ headerMenuFamilyCategories.menuCategoriesAll } categoriesData={ headerMenuFamilyCategories.menuCategoriesByName }/>
            {/*<AremoresLogo />*/}
        </div>
    )
}