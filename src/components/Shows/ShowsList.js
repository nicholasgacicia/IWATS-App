import ShowsCard from './ShowsCard';

const GamesList = (props) => {
  return props.shows.map((showsObj) => {
    return <ShowsCard key={showsObj._id} show={showsObj} />
  });
};

export default GamesList;
