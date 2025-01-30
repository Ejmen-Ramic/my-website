export const serviceId = process.env.EMAILJS_SERVICE_ID as string;
export const templateId = process.env.EMAILJS_TEMPLATE_ID as string;
export const publicKey = process.env.EMAILJS_PUBLIC_KEY as string;

const requiredEmailJSVars = [
  'EMAILJS_SERVICE_ID',
  'EMAILJS_TEMPLATE_ID',
  'EMAILJS_PUBLIC_KEY'
];

requiredEmailJSVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});