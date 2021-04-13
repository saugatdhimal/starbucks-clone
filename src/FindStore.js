import React from "react";
import "./FindStore.css";
import { Link } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function FindStore() {
  return (
    <Link className="findStore">
      <LocationOnIcon />
      <h5>Find a store</h5>
    </Link>
  );
}

export default FindStore;
