const res = require('express/lib/response');
const  Userdb = require('../models/model');

//create and save new user
exports.create = (req, res) => {
  //validate request
  if (!req.body){
    res.status(400).send({message: 'Invalid request'});
    return;
  }
  //new user created
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
  });
  // save user in the database
  user.save(user)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'some error occurred while creating a create operation'
    });
  });
}

//recover and return all users | recover and return a single user
exports.find = (req, res) => {
  Userdb.find()
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.status(500).send({message: err.message || 'Error occurred while retrieving user information'});
    });
};

//update a new identified user by user id
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400)
    .send({message: 'Data to update can not be empty'});
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
  .then(data => {
    if(!data) {
      res.status(404).send({message: `Cannot update user with ${id}. Maybe user not found`})
    }else {
      res.send(data);
    }
  })
  .catch(err => {
    res.status(500).send({message: 'Error update user information'})
  });
}

//delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
  .then(data => {
    if(!data) {
      res.status(404).send({message: `Cannot delete with id ${id}. Maybe id is wrong`});
    }else {
      res.send({message: 'User was deleted successfully'});
    }
  })
  .catch(err => {
    res.status(500).send({message: 'Could not delete user with id= '+id});
  });
}