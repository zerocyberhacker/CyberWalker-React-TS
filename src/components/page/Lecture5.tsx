/** @format */

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  getHkUniversityList,
  getPeopleByName,
  getRandomDogImage
} from "./support/apiForLecture5";
import "./support/style/style.css";

type IPeople = {
  name: string;
  age: number;
  count: number;
};

type IDogImage = {
  message: string;
  status: string;
};

type School = {
  name: string;
  country: string;
  alpha_two_code: string;
  domains: string[];
  web_pages: string[];
  state_province: string | null;
};

const Lecture5: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [people, setPeople] = useState<IPeople | null>(null);
  const [universities, setUniversities] = useState<any[]>([]);
  const [imageUrl, setImageUrl] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHkUniversityList();
        setUniversities(data);
      } catch (error) {
        console.error("Error fetching university data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  const handleInputChange = (event: any) => {
    setName(event.target.value);
  };

  const handleGenerateImageSubmit = async (event: any) => {
    event.preventDefault();
    const data: IDogImage = await getRandomDogImage();
    setImageUrl(data.message);
  };

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const data = await getPeopleByName(name);
    setTimeout(() => {
      setLoading(false);
      setPeople(data);
    }, 2000);
  };

  return (
    <div>
      <div>
        <h1>This is Lecture 5.</h1>
        <p>
          <NavLink to={"/"}>back</NavLink>
        </p>
        <br />
        <h1>Example A API Generate Dog Image Component</h1>
        <form onSubmit={handleGenerateImageSubmit}>
          <button>Generate Dog Image</button>
          <br />
          <img src={imageUrl} width={"200px"} />
        </form>
      </div>
      <hr />
      <div>
        <h1>Example B API Search Component</h1>
        <form onSubmit={handleSearchSubmit}>
          <input type='text' onChange={handleInputChange} />
          <button>Search</button>
        </form>
        <br />
        {loading === true ? (
          <div className='loader'></div>
        ) : (
          people && (
            <div>
              <p>Name: {people.name}</p>
              <p>Age: {people.age}</p>
            </div>
          )
        )}
      </div>
      <hr />
      <div>
        <h1>Example C API List Component</h1>
        <ul>
          {universities.map((university) => (
            <div>
              <h2>{university.name}</h2>
              <p>Country: {university.country}</p>
              <p>Domains: {university.domains.join(", ")}</p>
              <p>URL: {university.web_pages}</p>
            </div>
          ))}
        </ul>
        <br />
      </div>
    </div>
  );
};

export default Lecture5;
