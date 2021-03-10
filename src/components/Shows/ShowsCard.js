import { Link } from 'react-router-dom';

const ShowsCard = (props) => {
  const token = {
    token: localStorage.getItem('token')
  };


  function handleAttendShow() {
    fetch(`http://localhost:4000/api/users/${props.show._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        alert(jsonData.message);
      })
      .catch((err) => console.log(err));
  }


  // let date = new Date(props.show.showdate).toDateString();
  return (
    <>
      <h4>{props.show.showdate.split('T')[0]} - {props.show.artist} - {props.show.venue} - {props.show.location}</h4>
      {/* <div dangerouslySetInnerHTML={{ __html: props.show.shownotes }} /> */}
      <button onClick={() => props.deleteShow(props.show._id)}>Delete</button>{'  '}
      <Link to={`/editshow/${props.show._id}`}><button>Update</button></Link>{'  '}
      <button onClick={handleAttendShow}>Attended</button>{'  '}
      <hr />
    </>
  );
};

export default ShowsCard;
