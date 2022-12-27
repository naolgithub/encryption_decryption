import { useState } from "react";
const pad = require("one-time-pad");

function OTP() {
    const [text, setText] = useState("");
    const [screen, setScreen] = useState("encrypt");

    const [encrptedData, setEncrptedData] = useState("");
    const [decrptedData, setDecrptedData] = useState("");

    const secretPass = "XkhZG4fW2t2W";

    const encryptData = () => {


        const data = pad.encrypt(text, secretPass);

        setEncrptedData(data);
    };

    const decryptData = () => {

        const data = pad.decrypt(text, secretPass);
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
        <div className="container2">
            <h1 className="App2-header">OTP</h1>
            <div>
                <button
                    className="btn btn-left"
                    style={{
                        backgroundColor: screen === "decrypt" ? "cyan" : "cyan",
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
                        backgroundColor: screen === "encrypt" ? "cyan" : "cyan",
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

export default OTP;