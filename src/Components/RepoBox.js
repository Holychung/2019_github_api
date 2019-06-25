import React from 'react';
import RepoItem from './RepoItem'

class RepoBox extends React.Component {
  render(){
    return(
      <div className="container">
        {
          this.props.data.length === 0 ?
            <div className="text-muted text-center">Empty</div>
          : 
          <div>
            {
              // console.log(this.props.data)
              this.props.data.map(
                (repo) => <RepoItem 
                            key={repo.id} 
                            data={repo} 
                            />
              )
            }

          </div>
        }
      </div>  
    )
  }
}

export default RepoBox;
