import React from 'react'

const Book = (props) => (
 	<div className="book">
    <h2 className="bookAuthor">
    	{ props.author }
    </h2>
    	{ props.children }
 	</div>
);

export default Book