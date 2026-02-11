const { TextEncoder, TextDecoder } = require("util");

// Ensure global TextEncoder/TextDecoder exist in the Jest environment
if (typeof global.TextEncoder === "undefined") global.TextEncoder = TextEncoder;
if (typeof global.TextDecoder === "undefined") global.TextDecoder = TextDecoder;

// Optional: make these available on globalThis too
if (typeof globalThis.TextEncoder === "undefined")
  globalThis.TextEncoder = global.TextEncoder;
if (typeof globalThis.TextDecoder === "undefined")
  globalThis.TextDecoder = global.TextDecoder;
