import React from 'react';

class RepoItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: ""
    }
    this.changeUrl = this.changeUrl.bind(this)
  }

  componentDidMount(){
    let repo_name = this.props.data.name
    let name = this.props.data.owner.login
    // https://github.com/Holychung/2019summer_Nplus
    let repo_url = `https://github.com/${name}/${repo_name}`
    this.changeUrl(repo_url)
  }

  changeUrl(new_url){
    this.setState({ url: new_url })
  }
  
  render(){
    
    return(
      <div className="container mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.data.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.data.pushed_at}
            </h6>
            <a href={this.state.url} className="card-link">Link</a>
          </div>
        </div>
      </div>
    )
  }
}

export default RepoItem;
