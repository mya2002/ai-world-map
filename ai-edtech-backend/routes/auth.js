const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// 註冊帳號
router.post("/register", async (req, res) => {
  try{
    const { username, email, password } = req.body;

  // 檢查帳號是否存在
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "帳號已存在" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ message: "註冊成功" });
}catch (err) {
    console.error(err);
    res.status(500).json({ message: "伺服器錯誤" });
  }
});

// 登入帳號
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "請先註冊帳號" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "密碼錯誤" });

  res.json({ message: "登入成功", user: { id: user._id, username: user.username } });
});

module.exports = router;
