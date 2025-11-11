export const authroleBuyer = async (req: any, res: any, next: any) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const role = req.user.role;

    if (role !== "buyer") {
      return res.json({
        success: false,
        message: "Access denied: only buyers can perform this action",
      });
    }

    next();
  } catch (err) {
    return res.json({
      success: false,
      message: "Error validating user role",
    });
  }
};


export const authroleSeller = async (req: any, res: any, next: any) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const role = req.user.role;

    if (role !== "seller") {
      return res.json({
        success: false,
        message: "Access denied: only sellers can perform this action",
      });
    }

    next();
  } catch (err) {
    return res.json({
      success: false,
      message: "Error validating user role",
    });
  }
};


export const authroleAdmin = async (req: any, res: any, next: any) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const role = req.user.role;

    if (role !== "admin") {
      return res.json({
        success: false,
        message: "Access denied: only admin can perform this action",
      });
    }

    next();
  } catch (err) {
    return res.json({
      success: false,
      message: "Error validating user role",
    });
  }
};


export const authroleCustomerCare = async (req: any, res: any, next: any) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const role = req.user.role;

    if (role !== "customer_service") {
      return res.json({
        success: false,
        message: "Access denied: only customer service can perform this action",
      });
    }

    next();
  } catch (err) {
    return res.json({
      success: false,
      message: "Error validating user role",
    });
  }
};
