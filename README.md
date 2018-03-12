# Parcel with ReduxToastr

## Current Behaviour
`npm start` or `npm run build` fails in default config. Works if removing (or commenting out) ReduxToastr related code in RootReducer and Root.jsx.

## Expected Behaviour
Parcel honors the dependencies (react-redux-toastr) babel config and builds it.

## Environment

| Software         | Version(s) |
| ---------------- | ---------- |
| Parcel           | 1.6.0 - 1.6.2 
| Node             | 8.9.1 
| npm/Yarn         | 5.5.1 
| Operating System | macOS 10.13.3 