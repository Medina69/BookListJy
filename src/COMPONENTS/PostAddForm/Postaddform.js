import React from 'react';
import '../PostAddForm/post-add-form.css';

class PostAddForm extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                text: '',
            }
        }
        onValueChange1 = (e) =>{
            this.setState({
                text: e.target.value
            })
        }
        onValueSubmit = (e) =>{
            e.preventDefault()
            this.props.onNewPostAdd(this.state.text)
            this.setState({
                text: ''
            })
        }
        render() {
            return (
            <form
                onSubmit={this.onValueSubmit} 
                className='bottom-panel d-flex'>
                    <input 
                    onChange = {this.onValueChange1}
                    className='fotm-control new-post-label'
                    type = 'text'
                    placeholder = 'О чём вы думаете сейчас?'
                    value={this.state.text}    
                    />
                    <button 
                    type = 'submit'
                    className='btn btn-primary'>Добавить</button>
                </form>
            );
        }
}

export default PostAddForm;