import React from 'react';
import { HeaderMenu } from './header-menu';
import { AremoresHeader } from './aremores-header';

import './header.less';
import { headerMenuCategories } from '../../data/header-menu-data';

export const Header = () => (
    <div className={ 'header-wrapper' }>
        <div className={ 'header' }>
            <HeaderMenu className={ 'main' } categories={ headerMenuCategories.menuCategoriesAll } categoriesData={ headerMenuCategories.menuCategoriesByName }/>
            <AremoresHeader />
        </div>
    </div>
)