import React from 'react';


class SignupPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    fetch('http://localhost:4000/api/users', {
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

        //? this.props.history.push('/shows');

      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="email">Email: </label><br />
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="password">Password: </label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="password2">Confirm Password: </label><br />
          <input
            type="password"
            id="password2"
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
          /><br /><br/>

          <button type="submit">Signup</button>
        </form>

      </div>
    );
  }
}

export default SignupPage;
