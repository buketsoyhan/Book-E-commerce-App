import Users from "model/user";

export async function getUserByEmail(req, res) {
  try {
    console.log(req.params);
    const users = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!users) return res.status(404).json({ message: "Data not found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({ error: "form data empty" });
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      Users.create(formData, function (err, data) {
        return res.status(200).json(data);
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
