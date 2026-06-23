import { Router } from 'express';
import { sendContactEmail, sendFeedback } from '../controllers/contact.controller';

const contactRouter = Router();

contactRouter.post('/', sendContactEmail);
contactRouter.post('/feedback', sendFeedback);

export default contactRouter;