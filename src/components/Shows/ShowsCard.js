const ShowsCard = (props) => {
  return (
    <>
      <h4>{props.show.showdate} - {props.show.venue} - {props.show.location}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.show.shownotes }} />
      <button onClick={() => props.deleteShow(props.show._id)}>Delete</button>{'  '}
      <button>Update</button>
      <hr />
    </>
  );
};

export default ShowsCard;
