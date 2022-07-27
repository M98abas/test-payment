import * as express from "express";
import Mpgs from "../../controller/paymentMpgs";
const route = express.Router();

route.get("/status", Mpgs.statusForm);
route.post("/", Mpgs.initForm);

export default route;
