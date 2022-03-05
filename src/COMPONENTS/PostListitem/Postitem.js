import React from 'react';
import '../PostListitem/post-list-item.css';

class Postitem extends React.Component {
    render() {
        const {label, onDelete,important,like,onToggleLiked,onToggleImportant} = this.props;

        let className = 'app-list-item d-flex justify-content-between';
        if(important) {
            className += ' important'
        }
        if(like) {
            className += ' like'
        }
        return (
            <li className={className}>
                <span onClick = {onToggleLiked} 
                className='app-list-item-label'>
                    {label}
                    </span>


                <div 
                className='d-flex justify-content-center align-item-center'>


                    <button
                    onClick = {onToggleImportant} 
                    className='btn-star btn-sm'>
                        <i className='fa fa-star'></i>
                    </button>


                    <button
                    onClick = {onDelete}
                    className='btn-trash btn-sm'>
                        <i 
                        className='fa fa-trash'></i>
                    </button>


                    <i 
                    className='fa fa-heart'>
                    </i>

                </div>

            </li>
        );
    }
}

export default Postitem;    