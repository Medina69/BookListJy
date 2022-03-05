import React from 'react';
import Postitem from '../PostListitem/Postitem';

class PostList extends React.Component {
    render() {
        const {data,onDelete,onToggleLiked,onToggleImportant} = this.props;
        const elements = data.map(item=>{
            const {id, ...itemsProps} = item
            return (
                <Postitem 
                onToggleImportant = {()=> onToggleImportant(id)}
                onToggleLiked = {()=> onToggleLiked(id)}
                onDelete = {()=> onDelete(id)}
                key={item.id} 
                {...itemsProps}/>
            )
        });
        return (
            <ul className='app-list list-group'>
                {elements}
            </ul>
        );
    }
}

export default PostList;