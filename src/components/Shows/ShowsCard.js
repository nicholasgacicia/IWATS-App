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
    <div className="container-md">
      <div className="d-flex align-center">
        <button className="btn btn-sm btn-success text-black-50 shadow-2-strong mx-3" onClick={handleAttendShow}>Attended</button>

        <h6>{props.show.showdate.split('T')[0]} - {props.show.artist} - {props.show.venue} - {props.show.location}</h6>
      </div>

      <div>
        <p>{props.show.shownotes}</p>
        <div className="">
          <button className="btn btn-sm btn-danger text-black mx-1 shadow-2-strong" onClick={() => props.deleteShow(props.show._id)}>Delete</button>

          <Link to={`/editshow/${props.show._id}`}><button className="btn btn-sm btn-info text-black shadow-2-strong mx-1">Update</button></Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ShowsCard;
