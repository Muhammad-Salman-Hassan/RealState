import axios from "axios";


export const baseurl='https://bayut.p.rapidapi.com'

export const fetchapi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '061b5dddeemsh11bb888f0b1dbe1p141b1fjsna7c9f6fb65f4',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
      
    return data;
  }

// headers: {
//     'X-RapidAPI-Key': '061b5dddeemsh11bb888f0b1dbe1p141b1fjsna7c9f6fb65f4',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }