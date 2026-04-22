const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const PINATA_API_KEY = "98a738aa6e7201c09ee4";
const PINATA_SECRET_KEY = "de22e5a26947e8e219d9f6a6b399e223b5431c17bc6e46ecd781f307c3d53b70";

async function uploadFile() {
    console.log("Uploading file...");

    const data = new FormData();
    data.append("file", fs.createReadStream("test.txt"));

    try {
        const res = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data,
            {
                maxBodyLength: "Infinity",
                headers: {
                    ...data.getHeaders(),
                    pinata_api_key: PINATA_API_KEY,
                    pinata_secret_api_key: PINATA_SECRET_KEY,
                },
            }
        );

        console.log("✅ Upload Successful!");
        console.log("📌 CID:", res.data.IpfsHash);

    } catch (err) {
        console.log("❌ ERROR OCCURRED:");
        console.log(err.response ? err.response.data : err.message);
    }
}

uploadFile();