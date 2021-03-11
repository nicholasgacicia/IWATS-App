import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ShowAccordian = (props) => {
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
    <div className="container mx-5 justify-content-evenly center">
      <Accordion className="absolute-center">
        <div>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
            id="panel-header"
          >
            <Typography className="d-flex">
              <div className="d-flex float-right">
                <button className="btn btn-sm btn-success text-black shadow-2-strong mx-1" onClick={handleAttendShow}>Attended</button>

                <button className="btn btn-sm btn-danger text-black shadow-2-strong mx-1" onClick={() => props.deleteShow(props.show._id)}>Delete</button>

                <Link to={`/editshow/${props.show._id}`}><button className="btn btn-sm btn-info text-black shadow-2-strong mx-1">Update</button></Link>
              </div>

              <div className="text-center">
                <h5 className="text-black font-weight-bold shadow-2 mx-2 center">{props.show.showdate.split('T')[0]} - {props.show.artist} - {props.show.venue} - {props.show.location}</h5>
              </div>
            </Typography>
          </AccordionSummary>
        </div>

        <AccordionDetails className="absolute-center row-cols-1">
          <Typography className="align-content-lg-start text-black font-font-weight-normal"><div dangerouslySetInnerHTML={{ __html: props.show.shownotes }} /></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ShowAccordian;
