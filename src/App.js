// import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import './App.css';
import Header from './COMPONENTS/Header/Header';
import PostList from './COMPONENTS/Post.list/PostList';
import PostAddForm from './COMPONENTS/PostAddForm/Postaddform';
import PostStatusFiter from './COMPONENTS/PostStatusFilter/postStatus';
import SearchPanel from './COMPONENTS/SearchPanel/search.panel';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          label: 'Hello world', important: false, id:1, like: false
        },
        {
          label: 'To book', important: false, id:2, like: false
        },
        {
          label: 'Jyldyz Academy', important: false, id:3, like: false
        },
        {
          label: 'Hello Medina', important: false, id:4, like: false
        },
      ],
      filter:'all',
      term: '',
    }
    this.maxId = 5
  }

  onDeleteitem = (id) =>{
    console.log(id);
    this.setState(({data})=>{
      const index = this.state.data.findIndex(elem => elem.id === id); 
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return{
        data: newArr
      }
  })
}

onToggleLiked = (id) =>{
  console.log(id);
  this.setState(({data})=>{
    const index = data.findIndex(elem => elem.id === id);
    const old = data[index];
    const newItem = {...old, like: !old.like};
    const newArr =[...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return{
      data: newArr
    }
  })
} 

onToggleImportant = (id) =>{
  console.log(id);
  this.setState(({data})=>{
    const index = data.findIndex(elem => elem.id === id);
    const old = data[index];
    const newItem = {...old, important: !old.important};
    const newArr =[...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return{
      data: newArr
    }
  })
} 
filterPost = (items,filter) =>{
  if (filter === 'like'){
    return items.filter(elem => elem.like)
  }else{
    return items;
  }
}
onFilterSelect = (filter) =>{
  this.setState({filter})
}
onNewPostAdd = (body) =>{
  const newItem = {
    label: body,
    important: false,
    like: false,
    id: this.maxId++
  }
  this.setState(({data})=>{
    const newArr = [...data, newItem]
    return{
      data: newArr
    }
  }) 
}
searchPost = (items,term) =>{
  if(term.length === 0){
    return items
  }
  return items.filter(item =>{
    return item.label.indexOf(term) > -1
  })
}
onSearchSelect = (term) =>{
  this.setState({term})
}
  render(){
    const {data,filter,term} = this.state
    const allPost = this.state.data.length
    const Liked = this.state.data.filter(elem => elem.like).length;
    const visitablePost = this.filterPost(this.searchPost(data,term), filter)
    return(
      <div className='app'>
        <Header 
        allPost={allPost}
        Liked={Liked}/>
        <div className='search-panel d-flex'>
          <SearchPanel
          onSearchSelect={this.onSearchSelect}
          />
          <PostStatusFiter
          filter={filter}
          onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList 
        onToggleImportant={this.onToggleImportant}
        onToggleLiked={this.onToggleLiked}
        onDelete={this.onDeleteitem}
        data={visitablePost}/>  
        <PostAddForm onNewPostAdd={this.onNewPostAdd}/>
      </div>
    );
  };
};

export default App;