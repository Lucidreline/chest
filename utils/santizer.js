const objectSanitizer = _req => {
  try {
    Object.keys(_req.body).forEach(key => {
      // eslint-disable-next-line no-param-reassign
      _req.body[key] = _req.sanitize(_req.body[key]).trim();
    });
    return _req.body;
  } catch (err) {
    return { successful: false, err };
  }
};

module.exports = objectSanitizer;
