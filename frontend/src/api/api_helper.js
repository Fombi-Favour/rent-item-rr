import axios from 'axios';

const baseUrl = 'https://api.countrystatecity.in/v1/countries';
const apiKey = 'azV6azlscm1CbnZ5U0RkV01Ib3h2cVNzdEIxaGVkc3FRT3F6b3R4eA==';

const getCountries = async () => {
  try {
    const response = await axios.get(baseUrl, {
      headers: { 'X-CSCAPI-KEY': apiKey },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCities = async (countryCode) => {
  if (!countryCode) {
    return [];
  }

  try {
    const response = await axios.get(`${baseUrl}/${countryCode}/cities`, {
      headers: { 'X-CSCAPI-KEY': apiKey },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export default getCountries;
