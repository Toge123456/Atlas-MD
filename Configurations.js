require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "17245423663";   // You can replace this number with yours //
}


global.owner = gg.split("17245423663");
global.mongodb = process.env.MONGODB || "mongodb+srv://Etoundi:Benzimen@cluster0.lbapl7i.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `𝚈𝚄𝙼𝙴𝙺𝙾`;
global.author = process.env.AUTHOR || "by: 𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
