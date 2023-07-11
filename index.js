const express = require("express")

const app = express()

app.get("/demo", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Hello from shopify.magezon.com !" })
})

app.listen(5111, () => console.log("Hello from shopify.magezon.com !"))
