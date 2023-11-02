import { Router, Response, Request } from "express";
import { check } from "express-validator";
import multer from "multer";
import { validateFields } from "../middleware";
import { responseSuccess } from "../helpers/responses";

const router = Router();
const upload = multer();

router.post(
  "/sendemail",
  [
    upload.any(),
    check("email", "Please use a valid email address.").isEmail(),
    validateFields,
  ],
  (req: Request, res: Response) => {
    return responseSuccess(res, 200, "Form sent and saved successfully");
  }
);
router.get("/", (req: Request, res: Response) => {
  res.render(
    "index",
    {
      title: "Express",
      h1Title: "Hi there!",
      h2Title:
        "please visit http://localhost:" +
        process.env.PORT +
        "/sendemail via Post.",
      content: "",
    },
    function (err, html) {
      console.log(err);
    }
  );
});

export default router;
