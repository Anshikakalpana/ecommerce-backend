// import pool from "../db/dbData.js";
export {};
// export const authorizeRoles = (...allowedRoles) => {
//   return async (req, res, next) => {
//     try {
//       const email = req.user.email; 
//       const userRolesQuery = await pool.query(
//         `SELECT r.name 
//          FROM roles r 
//          JOIN user_roles ur ON ur.role_id = r.id
//          JOIN users u ON u.id = ur.user_id
//          WHERE u.email=$1`,
//         [email]
//       );
//       const userRoles = userRolesQuery.rows.map(r => r.name);
//       const hasRole = allowedRoles.some(role => userRoles.includes(role));
//       if (!hasRole) {
//         return res.status(403).json({ success: false, message: "Access denied" });
//       }
//       next();
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ success: false, message: "Server error" });
//     }
//   };
// };
//# sourceMappingURL=authroles.js.map