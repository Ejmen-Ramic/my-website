export const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
export const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
export const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

const requiredEmailJSVars = [
  'REACT_APP_EMAILJS_SERVICE_ID',
  'REACT_APP_EMAILJS_TEMPLATE_ID',
  'REACT_APP_EMAILJS_PUBLIC_KEY'
];

requiredEmailJSVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});