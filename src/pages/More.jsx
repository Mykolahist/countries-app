import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../configs";
import { Button } from "../components/Button/Button";
import { InfoCountry } from "../components/InfoCountry/InfoCountry";

export const More = ({ match }) => {
  const { name } = useParams();
  const { push, goBack } = useHistory();
  const [country, setCountry] = useState(null);
  
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <InfoCountry push={push} {...country} />}
    </div>
  );
};