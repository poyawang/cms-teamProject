/**
 * Contains the controllers for the live site
 */

// Homepage route
exports.getHomePage = (req, res, next) => {
  res.status(200).json({
    pageFound: true,
    pageLevel: 'Home',
    siteTitle: req.params.siteName,
  });
};

exports.getSubpageOne = (req, res, next) => {
  res.status(200).json({
    pageFound: true,
    pageLevel: 'Subpage 1',
    siteTitle: req.params.siteName,
    subPageName: req.params.subPageOne,
  });
};
