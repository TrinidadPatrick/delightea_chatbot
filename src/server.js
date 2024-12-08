require('dotenv').config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";

let app = express();

//config body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' https://vercel.live; connect-src 'self' https://vercel.live; style-src 'self';"
    );
    next();
  });
//config view engine
configViewEngine(app);

//config web routes
initWebRoutes(app);

let port = process.env.PadORT || 8081;

app.listen(port, () => {
    console.log(`Messenger bot is running at the port ${port}`);
});
