import React, { useState, useEffect } from "react";
import CenterModal from "../BaseModals/CenterModal";

const SPSOEditPrinterModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const [tabActivated, setTabActivated] = useState(0);
  const info = {
    id: "12345",
    status: 1,
    brand: "Canon",
    type: "PIXMA E4750",
    location: { facility: "CS2", department: "H6", room: "204" },
    description: "Tốc độ in tiêu chuẩn ISO (A4): 3.9 ipm đen/màu",
  };
  const [brand, setBrand] = useState(info.brand);
  const [type, setType] = useState(info.type);
  // info.status == 1 ? "enable" : "disable"

  const [location, setLocation] = useState({});
  const [facilities, setFacilities] = useState("");
  const [departments, setDepartments] = useState([]);
  const [rooms, setRooms] = useState([]);

  // const [location, setLocation] = useState(info.location);
  // const [facilities, setFacilities] = useState(info.location.facility);
  // const [departments, setDepartments] = useState([]);
  // const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   if (info.status === 1) {
  //     setChecked2("enable");
  //   }
  //   else
  //     setChecked2("disable");
  // }, []);
  useEffect(() => {
    if (location.facility === "Cơ sở 1") {
      setDepartments(["B1", "B2", "B3"]);
    } else if (location.facility === "Cơ sở 2") {
      setDepartments(["H1", "H3", "H6"]);
    }
  }, [location.facility]);

  useEffect(() => {
    if (location.department === "B1") {
      setRooms(["304", "305", "306"]);
    } else if (location.department === "B2") {
      setRooms(["404", "405", "406"]);
    } else if (location.department === "B3") {
      setRooms(["504", "505", "506"]);
    } else if (location.department === "H1") {
      setRooms(["704", "705", "706"]);
    } else if (location.department === "H3") {
      setRooms(["604", "605", "606"]);
    } else if (location.department === "H6") {
      setRooms(["204", "205", "206"]);
    }
  }, [location.department]);


  const handleSelectChange = (event, field) => {
    const value = event.target.value;
    if (field === "facility") {
      // Nếu chọn "Cơ sở," đặt giá trị department và room về giá trị mặc định
      setLocation({
        ...location,
        facility: value,
        department: "",
        room: "",
      });
      setFacilities(value);
    } else if (field === "department") {
      // Nếu chọn "Tòa," đặt giá trị room về giá trị mặc định
      setLocation({
        ...location,
        department: value,
        room: "",
      });
    } else {
      // Ngược lại, cập nhật giá trị của trường chỉ định (room)
      setLocation((prevLocation) => ({
        ...prevLocation,
        [field]: value,
      }));
    }
  };
  // const handleInputChange = (value) => {
  //   setChecked(value);
  //   // setInfo()
  // };
  // console.log(location);

  const [desc, setDesc] = useState(info.description);
  const [checked2, setChecked2] = useState(info.status == 1 ? "enable" : "disable");

  const handleSubmit = (e) => {
    // console.log(brand, type, location, desc, checked2);
    // console.log(info);
    e.preventDefault();
  };
  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9] min-h-[581px] md:min-h-[610px]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            THÔNG TIN MÁY IN VÀ TÙY CHỈNH
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold">
            <div
              className={`${
                !tabActivated
                  ? "border-[#1488db] text-black"
                  : "text-[#7d7b7b] border-white"
              } w-1/2 text-center py-[10px] text-[16px] lg:text-[18px] border-b-4 cursor-pointer`}
              onClick={() => {
                setTabActivated(0);
              }}
            >
              Thông tin máy in
            </div>
            <div
              className={`${
                tabActivated
                  ? "border-[#1488db] text-black"
                  : "text-[#7d7b7b] border-white"
              } w-1/2 text-center py-[10px] text-[16px] lg:text-[18px] border-b-4 cursor-pointer`}
              onClick={() => {
                setTabActivated(1);
              }}
            >
              Tùy chỉnh
            </div>
          </div>
          {tabActivated ? (
            <div className="w-full flex flex-col justify-between md:px-[62px] px-[12px] py-[24px] mb-[16px]">
              <div className="flex flex-row items-center justify-start gap-[8px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Nhãn hiệu:{" "}
                </p>
                <div className="flex-1">
                  <input
                    type="text"
                    className="block w-full"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px] mb-[16px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mẫu máy:{" "}
                </p>
                <div className="flex-1">
                  <input
                    type="text"
                    className="block w-full"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px] mb-[16px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Vị trí:{" "}
                </p>
                <div className="flex flex-1 gap-4">
                <select
                  value={location.facility}
                  className="w-[40%] h-[2.5rem] border-1 border-[black] focus:border-[black] focus:outline-none rounded-[0.5rem]"
                  name="facility"
                  id="facility"
                  onChange={(e) => handleSelectChange(e, "facility")}
                >
                  {" "}
                  <option selected="true" disabled="disable" value="">
                    Cơ sở...
                  </option>
                  <option value="Cơ sở 1">Cơ sở 1</option>
                  <option value="Cơ sở 2">Cơ sở 2</option>
                </select>

                <select
                  value={location.department}
                  className="w-[35%] h-[2.5rem] border-1 border-[black] focus:outline-none rounded-[0.5rem]"
                  name="department"
                  id="department"
                  onChange={(e) => handleSelectChange(e, "department")}
                >
                  <option selected="true" disabled="disable" value="">
                    Tòa...
                  </option>
                  {departments.map((dep, index) => {
                    return <option key={index} value={dep}>{dep}</option>;
                  })}
                </select>

                <select
                  value={location.room}
                  className="w-[40%] h-[2.5rem] border-1 border-[black] focus:outline-none rounded-[0.5rem]"
                  name="room"
                  id="room"
                  onChange={(e) => handleSelectChange(e, "room")}
                >
                  <option selected="true" disabled="disable" value="">
                    Phòng...
                  </option>
                  {rooms.map((rm, index) => {
                    return <option key={index} value={rm}>{rm}</option>;
                  })}
                </select>
              </div>
              </div>
              <div className="flex flex-col items-start gap-[8px] mb-[16px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mô tả:{" "}
                </p>
                <div className="flex-1 w-full">
                  <textarea
                    className="h-[84px] w-full border border-black rounded-md p-2 resize-none"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[124px] mb-[8px]">
                  Trạng thái:{" "}
                </p>
                <div className="flex flex-row items-end ">
                <div>
                  <div className="flex items-center mb-[4px] gap-[22px]">
                    <input
                      checked={checked2 === "enable"}
                      onChange={(e) => setChecked2(e.target.value)}
                      id="enable"
                      type="radio"
                      value="enable"
                      name="statusPrinter2"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="enable"
                      className="text-[16px] md:text-[20px] font-semibold p-0"
                    >
                      Hoạt động
                    </label>
                  </div>
                  <div className="flex items-center gap-[22px]">
                    <input
                      checked={checked2 === "disable"}
                      onChange={(e) => setChecked2(e.target.value)}
                      id="disable"
                      type="radio"
                      value="disable"
                      name="statusPrinter2"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="disable"
                      className="text-[16px] md:text-[20px] font-semibold p-0"
                    >
                      Không hoạt động
                    </label>
                  </div>
                </div>
                  <button
                    onClick={handleSubmit}
                    className="ml-auto bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500 hover:bg-blue-300 p-2 w-[154px] rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center"
                  >
                    Hoàn tất
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-between md:px-[62px] px-[12px] py-[24px] mb-[20px]">
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  ID máy in:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.id}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Nhãn hiệu:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.brand}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mẫu máy:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.type}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Vị trí:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.location.facility}, {info.location.department}, {info.location.room}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mô tả:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.description}
                </p>
              </div>
              <div className="flex flex-row justify-end mt-[90px]">
                <button className="bg-gradient-to-br from-[#ff7d7d]  outline-none to-[#b84949]  p-2 w-[154px] rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center">
                  Xóa máy in
                </button>
              </div>
            </div>
          )}
        </div>
      </CenterModal>
    </>
  );
};

export default SPSOEditPrinterModal;
