import { Request, Response } from "express";
import { errRes, okRes } from "../utils/util.service";
import { validate } from "validate.js";
// import { PrismaClient } from "@prisma/client";
import Validate from "../utils/validate";
import https from "https";
import querystring from "querystring";
// const prisma = new PrismaClient();

export default class HyperPay {
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static async initForm(req: Request, res: Response): Promise<object> {
    const body: any = req.body;
    const notValide: any = validate(body, Validate.payment());
    if (notValide)
      return errRes(res, { msg: `message of wronge :< ${notValide} >` });
    const data: any = await createSesstion(body);
    console.log(data);

    return okRes(res, { dataId: data.id });
  }

  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static async makeTokenOperation(
    req: Request,
    res: Response
  ): Promise<object> {
    const body: any = req.body;
    const notValide: any = validate(body, Validate.payment());
    if (notValide)
      return errRes(res, { msg: `message of wronge :< ${notValide} >` });
    const data: any = await tokenazation(body);
    console.log(data);

    return okRes(res, { dataId: data.id });
  }

  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static async getStatusPayment(req: Request, res: Response): Promise<object> {
    const body: any = req.body;
    console.log(body);

    const notValide: any = validate(body, Validate.payment());
    if (notValide)
      return errRes(res, { msg: `message of wronge :< ${notValide} >` });
    const data: any = await getStatusTransaction(body.id);
    console.log(data);

    return okRes(res, { data });
  }
}

/**
 *
 * @param paymentData
 * @returns
 */
const createSesstion = async (paymentData: any) => {
  const path = "/v1/checkouts";
  const data = querystring.stringify({
    entityId: "8ac7a4c87a65d393017a70b0ebda0d1a",
    amount: "100.00",
    currency: "IQD",
    paymentType: "DB",
    testMode: "EXTERNAL",
    // For Tokenazation
    createRegistration: true,
    "standingInstruction.source": "CIT",
    "standingInstruction.mode": "INITIAL",
  });
  const options = {
    port: 443,
    host: "test.oppwa.com",
    path: path,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length,
      Authorization:
        "Bearer OGFjN2E0Yzg3YTY1ZDM5MzAxN2E3MGFmNjg3MzBkMTZ8UEplYVJSNkNXZg==",
    },
  };
  return new Promise((resolve, reject) => {
    const postRequest = https.request(options, function (res) {
      const buf: any = [];
      res.on("data", (chunk) => {
        buf.push(Buffer.from(chunk));
      });
      res.on("end", () => {
        const jsonString = Buffer.concat(buf).toString("utf8");
        try {
          resolve(JSON.parse(jsonString));
        } catch (error) {
          reject(error);
        }
      });
    });
    postRequest.on("error", reject);
    postRequest.write(data);
    postRequest.end();
  });
};
/**
 *
 * @param paymentData
 * @returns
 */
const tokenazation = async (paymentData: any) => {
  const path = "/v1/checkouts";
  const data = querystring.stringify({
    entityId: "8a8294174d0595bb014d05d82e5b01d2",
    amount: paymentData.amount,
    currency: paymentData.currency,
  });
  const options = {
    port: 443,
    host: "test.oppwa.com",
    createRegistration: true,
    standingInstruction: { source: "CIT", mode: "INITIAL" },
    path: path,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length,
      Authorization:
        "Bearer OGE4Mjk0MTc0ZDA1OTViYjAxNGQwNWQ4MjllNzAxZDF8OVRuSlBjMm45aA==",
    },
  };
  return new Promise((resolve, reject) => {
    const postRequest = https.request(options, function (res) {
      const buf: any = [];
      res.on("data", (chunk) => {
        buf.push(Buffer.from(chunk));
      });
      res.on("end", () => {
        const jsonString = Buffer.concat(buf).toString("utf8");
        try {
          resolve(JSON.parse(jsonString));
        } catch (error) {
          reject(error);
        }
      });
    });
    postRequest.on("error", reject);
    postRequest.write(data);
    postRequest.end();
  });
};

const getStatusTransaction = async (data: any) => {
  console.log(data);

  var path = `/v1/checkouts/${data}/payment`;
  path += "?entityId=8ac7a4c87a65d393017a70b0ebda0d1a";
  const options = {
    port: 443,
    host: "test.oppwa.com",
    path: path,
    method: "GET",
    headers: {
      Authorization:
        "Bearer OGFjN2E0Yzg3YTY1ZDM5MzAxN2E3MGFmNjg3MzBkMTZ8UEplYVJSNkNXZg==",
    },
  };
  return new Promise((resolve, reject) => {
    const postRequest = https.request(options, function (res) {
      const buf: any = [];
      res.on("data", (chunk) => {
        buf.push(Buffer.from(chunk));
      });
      res.on("end", () => {
        const jsonString = Buffer.concat(buf).toString("utf8");
        try {
          resolve(JSON.parse(jsonString));
        } catch (error) {
          reject(error);
        }
      });
    });
    postRequest.on("error", reject);
    postRequest.end();
  });
};
