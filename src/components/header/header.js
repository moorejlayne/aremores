import React from 'react';
import { HeaderMenu } from './header-menu';
import './header.less';
import { pageDetails } from '../../pages/page-details';
import { AremoresLogo } from './aremores-logo';

export const Header = () => (
    <div className={ 'header-wrapper' }>
        <div className={ 'header' }>
            <AremoresLogo />
            <HeaderMenu categoriesAll={ pageDetails.categoriesAll } categoriesData={ pageDetails.categoriesData }/>
        </div>
    </div>
)