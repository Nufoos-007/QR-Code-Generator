import React, { useState, useCallback } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  const handleUrlChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setUrl('');
  }, []);

  const isValidUrl = useCallback((string: string) => {
    if (!string.trim()) return false;
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }, []);

  const showQR = url.trim().length > 0 && isValidUrl(url);
  const showError = url.trim().length > 0 && !isValidUrl(url);

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">QR Code Generator</h1>
          <p className="subtitle">Convert any URL into a QR code instantly</p>
        </header>

        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              placeholder="Paste your URL here..."
              className="url-input"
            />
            {url && (
              <button onClick={handleClear} className="clear-button">
                ×
              </button>
            )}
          </div>
          
          {showError && (
            <p className="error-message">Please enter a valid URL</p>
          )}
        </div>

        {showQR ? (
          <div className="qr-section">
            <div className="qr-container">
              <QRCode
                value={url}
                size={200}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 200 200`}
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>
            <div className="qr-info">
              <p className="qr-text">QR Code generated for:</p>
              <p className="qr-url">{url}</p>
            </div>
          </div>
        ) : (
          <div className="placeholder">
            <div className="placeholder-icon">📱</div>
            <p className="placeholder-text">Enter a URL above to generate your QR code</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;