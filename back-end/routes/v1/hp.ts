import * as express from "express";
import HyperPay from "../../controller/paymentHyperPay";
const route = express.Router();

route.post("/", HyperPay.initForm);
route.post("/token", HyperPay.makeTokenOperation);
route.post("/status", HyperPay.getStatusPayment);
export default route;
