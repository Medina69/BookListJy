import React from 'react';
import '../PostStatusFilter/post-status-filter.css';

class PostStatusFiter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buttons: [
                {label: 'Все', name: 'all'},
                {label: 'Понравилось', name: 'like'}
            ]
        }
    }
    render(){
        const {filter,onFilterSelect} = this.props
        const buttons = this.state.buttons.map(({name, label})=>{
            const active = filter === name;
            const clazz = active ? 'btn-primary' : 'btn-outline-secondary'
            return(
                <header 
                className={`btn ${clazz}`}
                key = {name}
                type={'button'}
                onClick = {()=> onFilterSelect(name)}
                >
                    {label}
                </header>
            )
        })
        return(
            <div className='btn-group'>
                {buttons}
            </div>
        );
    };
};

export default PostStatusFiter;