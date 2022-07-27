import * as express from "express";
import HyperPay from "../controller/paymentHyperPay";
import Mpgs from "../controller/paymentMpgs";
const route = express.Router();

route.post("/hp", HyperPay.initForm);
route.post("/mpgs", Mpgs.initForm);
export default route;
