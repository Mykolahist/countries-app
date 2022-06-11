import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../configs";

export const More = ({ match }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  navigate(-1);
  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)
      .then(({data}) => setCountry(data[0])));
  }, [name]);
  
  return (
    <div>
      <button onClick={navigate}>
        <IoArrowBack /> Back
      </button>
      {name}
    </div>
  );
};