import { Link } from 'react-router-dom';

const ShowsCard = (props) => {
  let date = new Date(props.show.showdate).toDateString();
  // console.log(date);
  
  return (
    <>
      <h4>{date} - {props.show.venue} - {props.show.location}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.show.shownotes }} />
      <button onClick={() => props.deleteShow(props.show._id)}>Delete</button>{'  '}
      <Link to={`/editshow/${props.show._id}`}><button>Update</button></Link>
      <hr />
    </>
  );
};

export default ShowsCard;
