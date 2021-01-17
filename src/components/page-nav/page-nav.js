import React from 'react';
import './page-nav.less';
import { AremoresLogo } from '../header/aremores-logo';
import { Tab, ListGroup } from 'react-bootstrap';

export const PageNav = ({page}) => {

	return (
		<div className={'page-nav-wrapper'}>
			<AremoresLogo/>
			<div className={'page-nav-content'}>
				<h1 className={'page-title'}>{ page.label }</h1>
				<ListGroup>
					{ page.categoriesAll && page.categoriesAll.map(category => {
						const categoryData = page.categoriesByName[category];
						return <ListGroup.Item action key={category} href={ categoryData.link }>{ categoryData.label }</ListGroup.Item>
					})}
				</ListGroup>
			</div>
		</div>
	)
}