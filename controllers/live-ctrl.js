/**
 * Contains the controllers for the live site
 */

// Homepage controller
exports.getHomePage = (req, res, next) => {
  // this is an example of how we could do dynamic route creation.
  // The one thing we would add is we would query the database
  // to find content related to the pageTitle. If data was found for that
  // page title, we would send that in our JSON response. If no data
  // was found we would simply return a 404 error code.
  res.status(200).json({
    pageFound: true,
    pageLevel: 'Home',
    siteTitle: req.params.siteName,
  });
};

// level 1 subpage controller
exports.getSubpageOne = (req, res, next) => {
  res.status(200).json({
    pageFound: true,
    pageLevel: 'Subpage 1',
    siteTitle: req.params.siteName,
    subPageName: req.params.subPageOne,
  });
};
