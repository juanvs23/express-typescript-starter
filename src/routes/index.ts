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
  async (req: Request, res: Response) => {
    const { name, email, phone, ib_tags, action, message } = req.body;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("ib_tags", ib_tags);
    formData.append("action", action);
    formData.append("message", JSON.stringify(message));
    const response = await fetch(
      "https://newsluxlifedev.wpengine.com/wp-admin/admin-ajax.php",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);

    return res.status(200).json(data);
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
