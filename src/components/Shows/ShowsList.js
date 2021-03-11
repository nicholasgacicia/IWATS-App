// import ShowsCard from './ShowsCard';
import ShowAccordian from './ShowAccordian';

const GamesList = (props) => {
  return props.shows.map((showsObj) => {
    return (
      <ShowAccordian
        key={showsObj._id}
        show={showsObj}
        deleteShow={props.deleteShow}
      />
    )
  });
};

export default GamesList;
