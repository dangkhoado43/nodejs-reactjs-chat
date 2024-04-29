class AuthController {
  async login(req, res, next) {
    const { username, secret } = req.body;

    // Fetch this user from Chat Engine in this project!
    try {
      const r = await axios.get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": "XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX",
          "User-Name": username,
          "User-Secret": secret,
        },
      });
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  }

  async signup(req, res, next) {
    const { username, secret, email, first_name, last_name } = req.body;

    // Store a user-copy on Chat Engine!
    try {
      const r = await axios.post(
        "https://api.chatengine.io/users/",
        { username, secret, email, first_name, last_name },
        { headers: { "Private-Key": "XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  }
}
module.exports = new AuthController();
