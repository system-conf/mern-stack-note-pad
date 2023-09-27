import Kullanici from "../models/kullaniciModel.js";
import Jwt from "jsonwebtoken";

const tokenOlustur = (_id) => {
  return Jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

const loginKullanici = async (req, res) => {
  const { email, parola } = req.body;

  try {
    const kullanici = await Kullanici.login(email, parola);

    const token = tokenOlustur(kullanici._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

const signupKullanici = async (req, res) => {
  const { email, parola } = req.body;

  try {
    const kullanici = await Kullanici.signup(email, parola);

    const token = tokenOlustur(kullanici._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

export { signupKullanici, loginKullanici };
