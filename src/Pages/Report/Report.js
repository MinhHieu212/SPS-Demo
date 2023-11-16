import React, { useEffect } from "react";
import ReportItem from "./ReportItem";
import PaperChart from "./PaperChart";
import { useNavigate } from "react-router";
import FIlterReportModal from "../../Modals/FIlterReportModal/FIlterReportModal";
const data = [2478, 5267, 734, 784, 433, 769, 892, 133, 788, 820, 110, 120];
const items = [
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
  {
    time: " 1/2021",
    id: "2113619",
    location: "CS2, H6, 311",
    frequency: 80,
    a3: 50,
    a4: 100,
    maintenance: 10,
  },
];
const Report = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Role") !== "SPSO") {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="Report mx-auto max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <div className="flex flex-row mt-8 border-b-4 border-black pb-2 md:pb-3 mb-4 items-center justify-between">
        <h2 className="text-3xl lg:text-4xl font-semibold printing-title text-[#066DCC]">
          BÁO CÁO HỆ THỐNG
        </h2>
        <div>
          <FIlterReportModal>
            <button className="text-sm md:text-base bg-[#40C0E7] font-semibold md:px-[30px] px-[10px] py-[5px] rounded-lg">Lọc báo cáo</button>
          </FIlterReportModal>

        </div>
      </div>
      <PaperChart data={data} />
      <h2 className="text-[16px] md:text-[20px] font-bold underline px-8 mt-[50px] mb-4">
        TẤT CẢ MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row px-8 gap-3  ">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 ">
          <p className="text-[16px] md:text-[20px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Tổng lượng giấy đã in:{" "}
            </span>
            2000
          </p>
          <p className="text-[16px] md:text-[20px]  text-black font-semibold">
            <span className="  text-[#1488db] font-semibold">
              Tổng lượng giấy A3 đã in:{" "}
            </span>
            120
          </p>
          <p className="text-[16px] md:text-[20px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Tổng lượng giấy A4 đã in:{" "}
            </span>
            1880
          </p>
          <p className="text-[16px] md:text-[20px]  text-black font-semibold">
            <span className="  text-[#1488db] font-semibold">
              Tổng số lần bảo trì:{" "}
            </span>
            13
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3 ">
          <p className="text-[16px] md:text-[20px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Trung bình lượng giấy A3 trên mỗi máy:{" "}
            </span>
            40
          </p>
          <p className="text-[16px] md:text-[20px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Trung bình lượng giấy A4 trên mỗi máy:{" "}
            </span>
            120
          </p>
          <p className="text-[16px] md:text-[20px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Trung bình số lần in trên mỗi máy:{" "}
            </span>
            20
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-scroll">
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC] text-base lg:text-lg font-bold py-3 px-4 mt-8 rounded-sm w-[714px]  md:w-[120%] text-white">
          <div className="min-w-[13%] text-center">THỜI GIAN</div>
          <div className="min-w-[13%] text-center">ID MÁY IN</div>
          <div className="min-w-[17%] text-center">VỊ TRÍ</div>
          <div className="min-w-[13%] text-center">SỐ LẦN IN</div>
          <div className="min-w-[17%] text-center">GIẤY A3 ĐÃ IN</div>
          <div className="min-w-[17%] text-center">GIẤY A4 ĐÃ IN</div>
          <div className="min-w-[10%] text-center">BẢO TRÌ</div>
        </div>
        {items.map((item, index) => (
          <ReportItem
            key={index}
            time={item.time}
            id={item.id}
            location={item.location}
            frequency={item.frequency}
            a3={item.a3}
            a4={item.a4}
            maintenance={item.maintenance}
          />
        ))}
      </div>
    </div>
  );
};

export default Report;
