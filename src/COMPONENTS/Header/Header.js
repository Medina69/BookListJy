import React from 'react';
import '../Header/app-header.css';

class Header extends React.Component{
    render(){
        const {allPost,Liked} = this.props
        return(
            <div className='app-header d-flex'>
                <h1>To Book</h1>
                <h2>{allPost} Записей из них понравилось {Liked}</h2>
            </div>
        );
    };
};

export default Header;