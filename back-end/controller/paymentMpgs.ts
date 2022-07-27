import { Request, Response } from "express";
import { errRes, okRes } from "../utils/util.service";
import axios from "axios";
import { validate } from "validate.js";
// import { PrismaClient } from "@prisma/client";
// import Validate from "../utils/validate";
// import querystring from "querystring";
import https from "https";
// const prisma = new PrismaClient();
let idPayment: any;
export default class MpgsPayment {
  static async initForm(req: Request, res: Response): Promise<object> {
    const body: any = req.body;
    const data: any = await createSesstion(body);
    return okRes(res, { data: data.session.id });
  }
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static async statusForm(req: Request, res: Response): Promise<object> {
    const result: any = await getStatusPayment();
    console.log(result);
    if (result)
      return okRes(res, {
        data: result.transaction,
      });
    return errRes(res, { msg: "There is An error Occured" });
  }

  // static async refundPayment(req:Request,res:Response): Promise<object>{
    
  // }
}

/**
 *
 * @param paymentData
 * @returns
 */
const createSesstion = async (paymentData: any) => {
  function uid() {
    return Date.now().toString(36) + "-" + Math.random().toString(36).substr(2);
  }
  idPayment = paymentData.data;
  var data = JSON.stringify({
    apiOperation: "INITIATE_CHECKOUT",
    interaction: {
      operation: "PURCHASE",
    },
    order: {
      amount: "100.0",
      currency: "USD",
      description: "Ordered goods",
      id: paymentData.data,
    },
  });

  var config = {
    method: "post",
    url: "https://switch.mtf.gateway.mastercard.com/api/rest/version/64/merchant/TEST90006000/session",
    headers: {
      Authorization:
        "Basic bWVyY2hhbnQuVEVTVDkwMDA2MDAwOmZiMTY5NGQzNzFhYjEwYWIxNmJlZTZlMjhlNDczZjVi",
      "Content-Type": "application/json",
    },
    data: data,
  };

  let dataResive: any = axios(config)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return dataResive;
};
const getStatusPayment = async () => {
  var config = {
    method: "get",
    url: `https://switch.mtf.gateway.mastercard.com/api/rest/version/64/merchant/TEST90006000/order/l5uo40g6-849hhg5np9l`,
    headers: {
      Authorization:
        "Basic bWVyY2hhbnQuVEVTVDkwMDA2MDAwOmZiMTY5NGQzNzFhYjEwYWIxNmJlZTZlMjhlNDczZjVi",
      "Content-Type": "application/json",
    },
  };

  let dataResive: any = axios(config)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return dataResive;
};
