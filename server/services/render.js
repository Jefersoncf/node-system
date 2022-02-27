const axios = require('axios');

exports.homeRoutes = (req, res) => {
  //make get request to/api/users
  axios.get('http://localhost:3000/api/users')
    .then((response) =>{
      // console.log(response);
      res.render('index', {users: response.data});
    })
    .catch((err) => {
      res.send(err);
    })

}

exports.addUser = (req, res) => {
  res.render('addUser');
}

exports.updateUser = (req, res) => {
  axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
  .then((userData) => {
    res.render('updateUser', {user: userData.data})
  })
  .catch(err => {
    res.send(err);
  })
}