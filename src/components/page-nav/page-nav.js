import React from 'react';
import './page-nav.less';
import { ListGroup } from 'react-bootstrap';

export const PageNav = ({page}) => {

	const handleClick = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const elementLocation = element.getBoundingClientRect();
			window.scrollTo(0,elementLocation.top-160)
		}
	}

	return (
		<div className={'page-nav-wrapper'}>
			<div className={'page-nav-content'}>
				<h1 className={'page-title'}>{ page.label }</h1>
				<ListGroup>
					{ page.categoriesAll && page.categoriesAll.map(category => {
						const categoryData = page.categoriesByName[category];
						return <ListGroup.Item action key={category} onClick={() => handleClick(category)}>{ categoryData.label }</ListGroup.Item>
					})}
				</ListGroup>
			</div>
		</div>
	)
}