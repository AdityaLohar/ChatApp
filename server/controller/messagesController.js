const messageModel = require("../models/messageModel");

module.exports.addMessage = async (req, res, next) => {
  try {
    console.log("add message mai aaye hai hum");
    const { from, to, message } = req.body;
    // console.log("from hai isko ", from);  // from undefined hai
    // console.log("Request Body:", req.body); // Add this line for debugging
    const data = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) {
      return res.json({ msg: "Message added successfully" });
    } else {
      return res.json({ msg: "Failed to add message to the database" });
    }
  } catch (ex) {
    console.error("Error in addMessage:", ex);
    next(ex);
  }
};

module.exports.getAllMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await messageModel
      .find({
        users: {
          $all: [from, to], // Fetch messages where both users are present
        },
      })
      .sort({ updatedAt: 1 }); // Fix the typo in the sorting field name

    const projectMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectMessages);
  } catch (ex) {
    next(ex);
  }
};
