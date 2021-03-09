import React from 'react';

class EditShowPage extends React.Component {
  state = {
    showdate: '',
    artist: '',
    link: '',
    location: '',
    venue: '',
    shownotes: '',
    tourname: '',
  };

  componentDidMount() {
    // match.params is passed to EditGamePage props by react-router-dom
    // You can console.log(this.props) in the render method below to see all the props passed to the EditGamePage container component.
    // the id param is set in the edit route in our config/routes.js
    console.log('Getting Show information')
    fetch(`http://localhost:4000/api/shows/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        this.setState(jsonData)
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/shows/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => this.props.history.push('/shows'))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Edit Show {this.state.showdate}</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="showdate">Date: </label><br />
          <input
            type="date"
            id="showdate"
            name="showdate"
            value={this.state.showdate}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="artist">Artist: </label><br />
          <input
            type="text"
            id="artist"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="link">Phish.Net URL: </label><br />
          <input
            type="text"
            id="link"
            name="link"
            value={this.state.link}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="location">Location: </label><br />
          <input
            type="text"
            id="location"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="venue">Venue: </label><br />
          <input
            type="text"
            id="venue"
            name="venue"
            value={this.state.venue}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="shownotes">Show Notes: </label><br />
          <textarea
            type="textarea"
            id="shownotes"
            name="shownotes"
            value={this.state.shownotes}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="tourname">Tour: </label><br />
          <input
            type="text"
            id="tourname"
            name="tourname"
            value={this.state.tourname}
            onChange={this.handleChange}
          /><br />

          <button type="submit">Edit Show</button>
        </form>

      </div>
    );
  }
}

export default EditShowPage;