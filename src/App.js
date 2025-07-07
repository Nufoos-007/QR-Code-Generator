import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import QRCode from 'react-qr-code';
import './App.css';
function App() {
    const [url, setUrl] = useState('');
    const handleUrlChange = useCallback((e) => {
        setUrl(e.target.value);
    }, []);
    const handleClear = useCallback(() => {
        setUrl('');
    }, []);
    const isValidUrl = useCallback((string) => {
        if (!string.trim())
            return false;
        try {
            new URL(string);
            return true;
        }
        catch (_) {
            return false;
        }
    }, []);
    const showQR = url.trim().length > 0 && isValidUrl(url);
    const showError = url.trim().length > 0 && !isValidUrl(url);
    return (_jsx("div", { className: "app", children: _jsxs("div", { className: "container", children: [_jsxs("header", { className: "header", children: [_jsx("h1", { className: "title", children: "QR Code Generator" }), _jsx("p", { className: "subtitle", children: "Convert any URL into a QR code instantly" })] }), _jsxs("div", { className: "input-section", children: [_jsxs("div", { className: "input-container", children: [_jsx("input", { type: "text", value: url, onChange: handleUrlChange, placeholder: "Paste your URL here...", className: "url-input" }), url && (_jsx("button", { onClick: handleClear, className: "clear-button", children: "\u00D7" }))] }), showError && (_jsx("p", { className: "error-message", children: "Please enter a valid URL" }))] }), showQR ? (_jsxs("div", { className: "qr-section", children: [_jsx("div", { className: "qr-container", children: _jsx(QRCode, { value: url, size: 200, style: { height: "auto", maxWidth: "100%", width: "100%" }, viewBox: `0 0 200 200`, bgColor: "#ffffff", fgColor: "#000000" }) }), _jsxs("div", { className: "qr-info", children: [_jsx("p", { className: "qr-text", children: "QR Code generated for:" }), _jsx("p", { className: "qr-url", children: url })] })] })) : (_jsxs("div", { className: "placeholder", children: [_jsx("div", { className: "placeholder-icon", children: "\uD83D\uDCF1" }), _jsx("p", { className: "placeholder-text", children: "Enter a URL above to generate your QR code" })] }))] }) }));
}
export default App;
