import React from 'react';

class Searchbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchWords: ""
    }
    this.setSearchWords = this.setSearchWords.bind(this)
  }
  setSearchWords(word){
    this.setState({ searchWords: word })
  }
  render(){
    
    return(
      <div className="container">
        <div className="input-group mb-3 row justify-content-center">
        <input 
          type="text" 
          className="form-control col-5" 
          placeholder="請輸入使用者名稱" 
          aria-label="Recipient's username" 
          aria-describedby="button-addon2" 
          onChange={(e) => this.setSearchWords(e.target.value)}
          />
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary" 
            type="button" 
            id="button-addon2"
            onClick={() => this.props.onFetchData(this.state.searchWords)}
            >
              送出
            </button>
        </div>
      </div>
      </div>
    )
  }
}

export default Searchbar;
