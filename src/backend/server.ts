import express, { Request, Response } from 'express';  
import cors from 'cors';  
import bodyParser from 'body-parser';  
import mailchimp from '@mailchimp/mailchimp_marketing';  
import dotenv from 'dotenv';  

dotenv.config();  

const app = express();  
const PORT = process.env.PORT || 5000;  

// Middleware  
app.use(cors());  
app.use(bodyParser.json());  

// Mailchimp Configuration  
mailchimp.setConfig({  
  apiKey: process.env.MAILCHIMP_API_KEY as string,  
  server: process.env.MAILCHIMP_SERVER_PREFIX as string, // e.g., 'us21'  
});  

// Define the request body type  
interface SubscribeRequestBody {  
  email: string;  
}  

// Endpoint to Add Subscriber  
app.post('/subscribe', async (req: Request<{}, {}, SubscribeRequestBody>, res: Response) => {  
  const { email } = req.body;  

  if (!email) {  
    return res.status(400).json({ error: 'Email is required' });  
  }  

  try {  
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID as string, {  
      email_address: email,  
      status: 'subscribed', // You can also use 'pending' for double opt-in  
    });  

    res.status(200).json({ message: 'Subscription successful!', data: response });  
  } catch (error: any) {  
    console.error('Error subscribing user:', error);  
    res.status(500).json({ error: error.response?.text || 'An error occurred' });  
  }  
});  

// Start Server  
app.listen(PORT, () => {  
  console.log(`Server running on http://localhost:${PORT}`);  
});  