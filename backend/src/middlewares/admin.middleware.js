const adminMiddleware = (req, res, next) => {
  if (req.user?.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized! Admin access required" });
  }
};

export default adminMiddleware;
