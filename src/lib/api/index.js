const axios = require('axios').default;

export default {
  login: (email, password) =>  {
    return axios.get('https://vauth.mobiotics.com/betav1/provider/v1/login?email='+email+'&servicename=vcms&password='+password)
  },
  getPin: (search) => {
    return axios.get('https://api.cloud.altbalaji.com/media/videos?query='+search+'&tags[]=&limit=10&offset=0&domain=IN');
  }
};


