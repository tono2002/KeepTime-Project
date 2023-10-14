import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401);
    throw new Error('Un-Authorized no authorization header');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
  } catch (err) {
    res.status(401);
    if (err.name === 'TokenExpiredError') {
      throw new Error(err.name);
    }
    throw new Error(`Un-Authorized other error ${err}`);
  }

  return next();
};
