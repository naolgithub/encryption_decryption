import CryptoJS from "crypto-js";
import { useState } from "react";

function TripleDES() {
    const [text, setText] = useState("");
    const [screen, setScreen] = useState("encrypt");

    const [encrptedData, setEncrptedData] = useState("");
    const [decrptedData, setDecrptedData] = useState("");

    const secretPass = "XkhZG4fW2t2W";

    const encryptData = () => {

        const data = CryptoJS.TripleDES.encrypt(
            JSON.stringify(text),
            secretPass
        ).toString();

        setEncrptedData(data);
    };

    const decryptData = () => {
        // const bytes = CryptoJS.AES.decrypt(text, secretPass);

        const bytes = CryptoJS.TripleDES.decrypt(text, secretPass);
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setDecrptedData(data);
    };



    const switchScreen = (type) => {
        setText("");
        setEncrptedData("");
        setDecrptedData("");
        setScreen(type);
    };

    const handleClick = () => {
        if (!text) return;

        if (screen === "encrypt") encryptData();
        else decryptData();
    };

    return (
        <div className="container">
            <h1 id="headers">TripleDES,AES and OTP </h1>
            <h1 className="app-header">AES</h1>
            <div>
                <button
                    className="btn btn-left"
                    style={{
                        backgroundColor: screen === "encrypt" ? "cyan" : "cyan",
                    }}
                    onClick={() => {
                        switchScreen("encrypt");
                    }}
                >
                    Encrypt
                </button>

                <button
                    className="btn btn-right"
                    style={{
                        backgroundColor: screen === "decrypt" ? "cyan" : "cyan",
                    }}
                    onClick={() => {
                        switchScreen("decrypt");
                    }}
                >
                    Decrypt
                </button>
            </div>

            <div className="card">
                <input
                    value={text}
                    onChange={({ target }) => {
                        setText(target.value);
                    }}
                    name="text"
                    type="text"
                    placeholder={
                        screen === "encrypt" ? "Enter Text" : "Copy the encrypted data"
                    }
                />

                <button className="btn submit-btn" onClick={handleClick}>
                    {screen === "encrypt" ? "Encrypt" : "Decrypt"}
                </button>
            </div>

            {encrptedData || decrptedData ? (
                <div className="content">
                    <label>{screen === "encrypt" ? "Encrypted" : "Decrypted"} Data</label>
                    <p>{screen === "encrypt" ? encrptedData : decrptedData}</p>
                </div>
            ) : null}
        </div>

    );
}

export default TripleDES;