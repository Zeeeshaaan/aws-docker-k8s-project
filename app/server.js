const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

let visitorCount = 0;

app.get("/", (req, res) => {
    visitorCount++;

    res.send(`
        <html>
        <head>
            <title>AWS Docker Kubernetes Project</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    padding-top: 50px;
                    background-color: #f4f4f4;
                }

                .container {
                    background: white;
                    width: 60%;
                    margin: auto;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
                }

                h1 {
                    color: #0077cc;
                }

                p {
                    font-size: 20px;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>Node.js App Running on Kubernetes</h1>

                <p><strong>Timestamp:</strong> ${new Date()}</p>

                <p><strong>Container ID:</strong> ${os.hostname()}</p>

                <p><strong>Visitor Count:</strong> ${visitorCount}</p>
            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        timestamp: new Date(),
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});