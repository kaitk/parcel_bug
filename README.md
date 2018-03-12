# Parcel with ReduxToastr

## Current Behaviour
`npm start` or `npm run build` fails with default config. The project builds, when one removes (or comments out) ReduxToastr related code in RootReducer.js and Root.jsx.

## Expected Behaviour
Parcel honors the dependencies (react-redux-toastr) babel config and builds it.

## Environment

| Software         | Version(s) |
| ---------------- | ---------- |
| Parcel           | 1.6.0 - 1.6.2 
| Node             | 8.9.1 
| npm/Yarn         | 5.5.1 
| Operating System | macOS 10.13.3 