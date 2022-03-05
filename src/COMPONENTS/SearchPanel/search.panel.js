import React from 'react';
import '../SearchPanel/search-panel.css';

class SearchPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) =>{
        const term = e.target.value
        this.setState({term})
        this.props.onSearchSelect(term)
    }
    render(){
        return(
            <input
            style={{
                width:'50px',
                height:'40px'
            }}
                className='input-group w-100'
                onChange={this.onUpdateSearch}
                type = 'text' 
                placeholder = 'Поиск по записи'
            />
        );
    };
};

export default SearchPanel;