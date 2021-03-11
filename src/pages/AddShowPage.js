import React from 'react';

class AddShowPage extends React.Component {
  state = {
    showdate: '',
    artist: '',
    venue: '',
    location: '',
    tourname: '',
    link: '',
    shownotes: '',
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
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        this.props.history.push('/shows');
      })
      .catch((err) => console.log(err));
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

          <label className="mt-2" htmlFor="artist">Artist: </label><br />
          <input
            type="text"
            id="artist"
            name="artist"
            placeholder="Ex: Phish"
            value={this.state.artist}
            onChange={this.handleChange}
          /><br />

          <label className="mt-2" htmlFor="venue">Venue: </label><br />
          <input
            type="text"
            id="venue"
            name="venue"
            placeholder="Ex: Madison Square Garden"
            value={this.state.venue}
            onChange={this.handleChange}
          /><br />

          <label className="mt-2" htmlFor="location">Location: </label><br />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Ex: New York, NY, USA"
            value={this.state.location}
            onChange={this.handleChange}
          /><br />

          <label className="mt-2" htmlFor="tourname">Tour: </label><br />
          <input
            type="text"
            id="tourname"
            name="tourname"
            placeholder="Ex: Post-COVID Tour"
            value={this.state.tourname}
            onChange={this.handleChange}
          /><br />

          <label className="mt-2" htmlFor="link">URL: </label><br />
          <input
            type="text"
            id="link"
            name="link"
            placeholder="Ex: www.example.com"
            value={this.state.link}
            onChange={this.handleChange}
          /><br />

          <label className="mt-2" htmlFor="shownotes">Show Notes: </label><br />
          <textarea
            type="textarea"
            id="shownotes"
            name="shownotes"
            value={this.state.shownotes}
            onChange={this.handleChange}
          /><br />

          <button className="btn btn-primary btn-sm mt-2" type="submit">Add Show</button>
        </form>

      </div>
    );
  }
}

export default AddShowPage;
