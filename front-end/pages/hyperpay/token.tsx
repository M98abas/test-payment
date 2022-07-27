import { useEffect, useState } from "react";
import { hyperpayTokenization } from "../../api";
import { message } from "antd";
import { Spin } from "antd";
import Script from "next/script";
import { useRouter } from "next/router";
const Tokenazation = () => {
  const router = useRouter();
  const [data, setData]: any = useState([]);
  const values: any = {
    amount: 82.0,
    currency: "IQD",
  };
  useEffect(() => {
    hyperInitForm();
  }, [router]);

  const hyperInitForm = async () => {
    await hyperpayTokenization(values, async (token: any, error: any) => {
      if (error) return message.error(error);
      await setData(token);
    });
  };

  //   console.log(data.dataId);

  return (
    <>
      {data.length != 0 ? (
        <div>
          <Script
            src={`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${data.dataId}`}
          ></Script>
          <form
            action={`/hyperpay/${data.dataId}`}
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          ></form>
        </div>
      ) : (
        <div className="container">
          <div className="spiner-content">
            <Spin size="large" />
          </div>
        </div>
      )}
    </>
  );
};

export default Tokenazation;
