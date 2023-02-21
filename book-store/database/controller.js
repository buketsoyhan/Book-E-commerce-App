import Users from "../model/userSchema";

// export async function getUserByEmail(req, res) {
//   try {
//     const users = await Users.findOne({
//       email: req.body.email,
//       password: req.body.password,
//     });

//     if (!users) return res.status(404).json({ message: "Data not found" });
//     res.redirect("/Home");
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// }

export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({ error: "form data empty" });

    const newUser = await Users.findOne({ email: req.body.email });
    if (!newUser) {
      Users.create(formData, function (err, data) {
        res.redirect("/SignIn");
      });
    }
    else{
        return res.status(405).json({message:"Email already exists"})
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
}
