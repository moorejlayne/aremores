import React from 'react';
import './section-title.less';

export const SectionTitle = ({ id, title }) => {
	return (
		<h2 id={id} className={'section-title'}>{ title }</h2>
	)
}