const { registerUser, loginUser, getUserById, updateUserName} = require("./user.service");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.user.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await updateUserName(req.user.id, req.body.name);
    res.status(200).json({ message: "User name updated successfully", user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful", token: null });
  } catch (error) {
    res.status(500).json({ error: "Logout failed" });
  }
};

module.exports = { register, login, getUser, logout, updateUser };
