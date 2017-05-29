import React, { Component }  from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountains: null
    };

    this.getMountains = this.getMountains.bind(this);
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
        mountains: body.mountains
      });
    });
  }

  render() {

    let mountains = this.state.mountains;
    if (mountains != null){
      mountains = mountains.map((mountain, i) => {
        return (
          <h1 key={i}>{mountain.name}</h1>
        )
      })
    }
    return(
      <div>
        Conquer a Mountain!
        {mountains}
      </div>
    )
  }
}

export default Home;
