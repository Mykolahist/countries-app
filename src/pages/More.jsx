import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../configs";
import { Button } from "../components/Button/Button";
import { InfoCountry } from "../components/InfoCountry/InfoCountry";

export const More = ({ match }) => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <InfoCountry {...country} />}
    </div>
  );
};