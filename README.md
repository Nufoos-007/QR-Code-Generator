🔳 QR Code Generator (React + TypeScript)

A simple, fast, and free QR Code generator built using React, TypeScript, and Vite — deployed live on Netlify, and now also available as an Android APK!


---

🔗 Links

🔗 Web App: qr-codegeneratorfree.netlify.app

📱 Android APK: Download app-debug.apk



---

🚀 Features

✅ Generate QR codes instantly from text

🎨 Minimal and responsive UI

🧠 Built with TypeScript + Vite

🌐 Deployed via Netlify

📲 Android-ready (Capacitor build)



---

🛠️ Tech Stack

React (with hooks)

TypeScript

Vite

qrcode.react (QR rendering)

Netlify (Web Hosting)

CapacitorJS (Android APK build)



---

🧪 Run Locally

git clone https://github.com/Nufoos-007/QR-Code-Generator.git
cd QR-Code-Generator
npm install
npm run dev


---

📱 Build APK for Android

npm install --save @capacitor/core @capacitor/cli @capacitor/android
npx cap init "React QR App" com.nufoos.qrapp
npm run build
npx cap add android
npx cap copy
npx cap open android

Then build your APK from Android Studio:

Open the project in Android Studio

Use Build > Build APK or Build Bundle(s) / APK(s)

Find APK in android/app/build/outputs/apk/debug/app-debug.apk



---

🎉 Done

Built by Nufoos-007

> This app works fully offline and is available for Android too!



