import React, { Component }  from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountains: null,
      displayedMountains: null
    };

    this.getMountains = this.getMountains.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getMountains();
  }

  getMountains() {
    fetch(`/api/v1/mountains`, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        mountains: body.mountains,
        displayedMountains: body.mountains
      });
    });
  }

  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();
    let displayedMountains = this.state.mountains.filter((el) => {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({
      displayedMountains: displayedMountains
    });
  }

  render() {

    let mountains = this.state.displayedMountains;
    if (mountains != null){
      mountains = mountains.map((mountain, i) => {
        return (
          <div className="col-sm-6 col-md-6 col-lg-4" key={i}>
            <div className="panel panel-default">
              <div className="panel-body">
                <h1>{mountain.name}</h1>
                <h3>Elevation: {mountain.elevation}</h3>
              </div>
            </div>
          </div>
        )
      })
    }
    return(
      <div>
        Search <input type="text" className="search-field" onChange={this.handleSearch} /><br /><br />
        {mountains}
      </div>
    )
  }
}

export default Home;
