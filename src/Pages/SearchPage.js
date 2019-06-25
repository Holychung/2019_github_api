import React from 'react';
import axios from 'axios';

import Searchbar from '../Components/Searchbar'
import RepoBox from '../Components/RepoBox'
import RepoItem from '../Components/RepoItem'

class SearchPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      repoList: []
    }
    this.fetchData = this.fetchData.bind(this)
    this.changeRepoList = this.changeRepoList.bind(this)
  }
  fetchData(userName){
    let url = `https://api.github.com/users/${userName}/repos`
    axios.get(url)
    .then(response => this.changeRepoList(response.data))
    .catch(err => console.log(err))
  }
  changeRepoList(data){
    this.setState({ repoList: data})
  }
  render(){
    return(
      <div>
        <Searchbar onFetchData={this.fetchData} />
        <RepoBox data={this.state.repoList} />
      </div>
    )
  }
}

export default SearchPage;


const fake_data = 
{
  "data": 
  [
    { 
      "id": 1, 
      "name": "github_repo" 
    },
    { 
      "id": 2,
      "name": "repo2" 
    },
    {
      "id": 3,
      "name": "repo3" 
    }
  ]
}