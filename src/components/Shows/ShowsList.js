import ShowsCard from './ShowsCard';

const GamesList = (props) => {
  return props.shows.map((showsObj) => {
    return (
      <ShowsCard key={showsObj._id} show={showsObj} deleteShow={props.deleteShow} />
    )
  });
};

export default GamesList;
