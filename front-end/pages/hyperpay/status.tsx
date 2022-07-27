import { useEffect, useState } from "react";
import { hyperpayGetStatus } from "../../api";
import { message, Spin } from "antd";
import { useRouter } from "next/router";
const indexPayment = () => {
  const router = useRouter();

  const { id } = router.query;
  console.log(id);

  const [data, setData]: any = useState([]);
  const values: any = {
    amount: 82.0,
    currency: "IQD",
    id,
  };

  useEffect(() => {
    hyperInitForm();
  }, [router, id]);

  const hyperInitForm = async () => {
    await hyperpayGetStatus(values, async (token: any, error: any) => {
      if (error) return message.error(error);
      console.log(token);

      await setData(token.data);
    });
  };

  console.log(data, id);

  return (
    <>
      {data ? (
        <div>
          <p>{`${JSON.stringify(data.resultDetails)}`}</p>
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

export default indexPayment;
