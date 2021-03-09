const ShowsCard = (props) => {
  return (
    <>
      <div>{props.show.showdate} - {props.show.venue} - {props.show.location}</div>
      <button onClick={() => props.deleteShow(props.show._id)}>Delete</button>{'  '}
      <button>Update</button>
      <hr />
    </>
  );
};

export default ShowsCard;
