import React from 'react';
class AddShowPage extends React.Component {
  state = {
    showdate: '',
    artist: '',
    link: '',
    location: '',
    venue: '',
    shownotes: '',
    tourname: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    fetch('http://localhost:4000/api/shows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });
  };

  render() {
    return (
      <div>
        <h1>Add New/Missing Show</h1>

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

          <button type="submit">Add Show</button>
        </form>

      </div>
    );
  }
}

export default AddShowPage;
