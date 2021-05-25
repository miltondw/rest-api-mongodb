import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  res.json({ message: "Welcome my application" });
});
export default router;
