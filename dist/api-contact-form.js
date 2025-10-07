"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKey = exports.templateId = exports.serviceId = void 0;
exports.serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
exports.templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
exports.publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
var requiredEmailJSVars = [
    'REACT_APP_EMAILJS_SERVICE_ID',
    'REACT_APP_EMAILJS_TEMPLATE_ID',
    'REACT_APP_EMAILJS_PUBLIC_KEY'
];
requiredEmailJSVars.forEach(function (varName) {
    if (!process.env[varName]) {
        throw new Error("Missing required environment variable: ".concat(varName));
    }
});
