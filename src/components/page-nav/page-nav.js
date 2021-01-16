import React from 'react';
import './page-nav.less';
import { AremoresLogo } from '../header/aremores-logo';

export const PageNav = ({page}) => {

	return (
		<div className={'page-nav-wrapper'}>
			<AremoresLogo/>
			<div className={'page-nav-content'}>
				<h1 className={'page-title'}>{ page.label }</h1>
			</div>
		</div>
	)
}