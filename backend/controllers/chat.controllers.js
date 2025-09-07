import { GoogleGenerativeAI } from "@google/generative-ai";
// console.log(process.env.OPENAI_API_KEY);

const genAI = new GoogleGenerativeAI({
  apiKey:
    process.env.OPENAI_API_KEY || "AIzaSyDeVTGqr3myTRAx4VreY8ec_4laq-x7rZo",
});

const AiChat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Use Gemini 2.5 Pro or Flash
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const response = await model.generateContent("say hi from gemini");

    res.json({ reply: response.response.text() });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message });
  }
};

export { AiChat };
