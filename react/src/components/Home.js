import React, { Component }  from 'react';
import MountainPanel from './MountainPanel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountains: null,
      displayedMountains: null,
      conqueredIds: null
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
        displayedMountains: body.mountains,
        conqueredIds: body.conqueredIds
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
    let conqueredIds = this.state.conqueredIds;
    if (mountains != null){
      mountains = mountains.map((mountain, i) => {
        let panelClass = '';
        if (conqueredIds.includes(mountain.id)) {
          panelClass = ' conquered';
        }
        return (
          <MountainPanel
            key = {i}
            mountain = {mountain}
            panelClass = {panelClass}
            getMountains = {this.getMountains}
          />
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
