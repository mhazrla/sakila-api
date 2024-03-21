const model = require("../model/auth.model");

const hasAccess = (permissionCode) => {
  return async (req, res, next) => {
    try {
      const { nik } = req.user;
      const userPermissions = await model.getUserPermission(nik);
      const permissionsArray = userPermissions[0].permissions.split(',');
      const permissionFound = permissionsArray.some(permission => permission === permissionCode);

      if (permissionFound) {
        next();
      } else {
        res.status(403).json({ error: "Forbidden" });
      }
    } catch (error) {
      console.error("Error checking permissions:", error);
      throw new Error("Internal Server Error");
    }
  };
};

module.exports = { hasAccess };
