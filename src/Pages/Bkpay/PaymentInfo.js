import "./BKPay.scss";
import { AiOutlinePrinter } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { makePayment } from "../../APIs/BKPayAPI/BKPayAPI";
import { useState } from "react";

function PaymentInfo(props) {
  console.log(props.remain);
  const [biCarDisplay, setBiCartDisplay] = useState(props.remain !== 0);

  const handleMakePayment = async () => {
    const data = {
      payment_id: props.payment_id,
    };
    await makePayment(data);
    setBiCartDisplay(false);
  };

  return (
    <div className="PaymentInfo">
      <h2 className="font-semibold semester-title mb-2 mt-2 text-xs lg:text-sm">
        HỌC KỲ {props.semester}
      </h2>
      <div className="text-xs lg:text-sm flex flex-row justify-between items-center text-black BKPay-item-1 py-3 px-2 bg-[#FFF8DC]">
        <div>{props.content}</div>
        <div>{props.batch}</div>
        <div>{props.type}</div>
        <div>{props.date}</div>
        <div>{props.total}</div>
        <div>{props.fee}</div>
        <div>{props.checkout}</div>
        <div>{props.remain}</div>
      </div>
      <div className="flex flex-row justify-between items-center text-[#1824C7] font-semibold BKPay-item-2 py-3 px-2 text-xs">
        <div>STT</div>
        <div>Nội dung ngắn</div>
        <div>Khoản thanh toán</div>
        <div>Số tiền</div>
        <div>Đã thanh toán</div>
        <div>Ngày thanh toán</div>
        <div>Còn lại</div>
        <div>Ngày dự kiến hết hạn</div>
        <div>Chọn thanh toán</div>
        <div>In</div>
      </div>
      <div className="flex flex-row justify-between items-center text-black BKPay-item-3 py-3 px-2 text-xs">
        <div>{props.order}</div>
        <div>{props.content}</div>
        <div>{props.id}</div>
        <div>{props.total}</div>
        <div>{props.checkout}</div>
        <div>{props.checkoutDate}</div>
        <div>{props.remain}</div>
        <div>{props.date}</div>
        <div>
          <div
            onClick={async () => {
              await handleMakePayment();
              await props.functionRenderList();
            }}
          >
            {biCarDisplay && <BiCart className="text-lg lg:text-2xl" />}
          </div>
        </div>
        <div>
          <AiOutlinePrinter className="text-lg lg:text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
