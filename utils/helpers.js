
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };


//  function blogAccess(){
// Window.location.replace("/blogging")
//  }
//  blog.title.addEventlistener("click", blogAccess)
  
 module.exports = withAuth;
  









