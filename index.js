const express = require("express")
const path = require("path")

const app = express()

// Serve the public directory as a static directory
app.use("/", express.static(path.join(__dirname, "public")))

// Handle other routes or middleware as needed
// ...

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
