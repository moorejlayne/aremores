import React from 'react';
import logo from '../../assets/aremores-logo.jpeg';
import { basePath } from '../../paths';

export const AremoresLogo = () => {

    return (
        <div className={ 'aremores-header' }>
            <div className={ 'aremores-logo' }>
               <a href={ basePath }>
                   <img alt={ 'AREMORES, LLC. Family Tree Farm & Cabin Rentals'} src={ logo } nopin={'nopin'} />
               </a>
            </div>
        </div>
    )
}