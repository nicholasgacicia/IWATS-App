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

  handleDeleteShow = (showId) => {
    fetch(`http://localhost:4000/api/shows/${showId}`, {
      method: 'DELETE'
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        const stateCopy = { ...this.state };
        const updatedShows = stateCopy.shows.filter((showObj) => {
          return showObj._id !== showId
        });
        this.setState({
          shows: updatedShows
        })
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Shows Index</h1>
        <ShowsList shows={this.state.shows} deleteShow={this.handleDeleteShow} />
      </div>
    );
  }
};

export default ShowsPage;
