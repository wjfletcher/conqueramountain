import React, { Component }  from 'react';

class MountainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  conquerClick(id) {
    let fetchBody = {
      id : id
    }
    fetch(`/api/v1/mountains`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
               },
      credentials: 'same-origin',
      body: JSON.stringify(fetchBody)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}
        (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      this.props.getMountains();
    });
  }

  render() {
    return(
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="panel panel-default">
          <div className={"panel-body" + this.props.panelClass}>
            <h1>{this.props.mountain.name}</h1>
            <h3>Elevation: {this.props.mountain.elevation}</h3>
            <button className="conquer-button"
            onClick={() => {this.conquerClick(this.props.mountain.id) }}>Conquered!</button>
          </div>
        </div>
      </div>
    )
  }

}

export default MountainPanel;
