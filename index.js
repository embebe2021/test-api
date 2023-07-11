const express = require("express")
const https = require("https")
const fs = require("fs")

const KEY_PATH =
  "/home/thangsm/ssl/keys/bfd89_723b7_0b73a8d55b1a92a06be144ac0a5e7f4a.key"
const CERT_PATH =
  "/home/thangsm/ssl/certs/shopify_magezon_com_bfd89_723b7_1720596676_ae07023a03e4ddb559ad43346a66c6bd.crt"

const httpsOptions = {
  key: fs.readFileSync(KEY_PATH),
  cert: fs.readFileSync(CERT_PATH)
}

const app = express()

app.get("/demo", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Hello from shopify.magezon.com !" })
})

https.createServer(httpsOptions, app).listen(443)
