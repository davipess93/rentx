import { SendFortPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendFortPasswordMailController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);

export { passwordRoutes };
