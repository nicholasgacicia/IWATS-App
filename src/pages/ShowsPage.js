import React from 'react';
import ShowsList from '../components/Shows/ShowsList';

class ShowsPage extends React.Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    fetch('http://localhost:4000/api/shows')
      .then((res) => res.json())
      .then((jsonData) => {
        // console.log(jsonData);
        this.setState({
          shows: jsonData
        });
      })
      .catch()
  }

  render() {
    return (
      <div>
        <h1>Shows Index</h1>
        <ShowsList shows={this.state.shows} />
      </div>
    );
  }
};

export default ShowsPage;
