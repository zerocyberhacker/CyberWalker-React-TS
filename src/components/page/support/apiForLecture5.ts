/** @format */

import axios, { AxiosResponse } from "axios";

export const getRandomDogImage = async () => {
  const response: AxiosResponse<any, any> = await axios.get(
    `https://dog.ceo/api/breeds/image/random`
  );
  return response.data;
};

export const getHkUniversityList = async () => {
  const response: AxiosResponse<any, any> = await axios.get(
    `http://universities.hipolabs.com/search?country=Hong+Kong`
  );
  return response.data;
};

export const getPeopleByName = async (name: string) => {
  const response: AxiosResponse<any, any> = await axios.get(
    `https://api.agify.io/?name=${name}`
  );
  return response.data;
};
