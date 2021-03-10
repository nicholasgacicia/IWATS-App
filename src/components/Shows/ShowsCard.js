import { Link } from 'react-router-dom';

const ShowsCard = (props) => {
  const token = {
    token: localStorage.getItem('token')
  };

  console.log('Token = ', token);

  function handleAttendShow() {
    // console.log('Attend Show Clicked');
    fetch(`http://localhost:4000/api/users/${props.show._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }

  let date = new Date(props.show.showdate).toDateString();
  return (
    <>
      <h4>{date} - {props.show.venue} - {props.show.location}</h4>

      <div dangerouslySetInnerHTML={{ __html: props.show.shownotes }} />
      <button onClick={() => props.deleteShow(props.show._id)}>Delete</button>{'  '}
      <Link to={`/editshow/${props.show._id}`}><button>Update</button></Link>{'  '}

      {/* TODO Add show button functionality */}



      <button onClick={handleAttendShow}>Attended</button>{'  '}






      <button>Listened</button>{'  '}
      <button>Add to Playlist</button>{'  '}

      <hr />
    </>
  );
};

export default ShowsCard;
