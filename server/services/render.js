exports.homeRoutes = (req, res) => {
  res.render('index');
}

exports.addUser = (req, res) => {
  res.render('addUser');
}

exports.updateUser = (req, res) => {
  res.render('updateUser');
}