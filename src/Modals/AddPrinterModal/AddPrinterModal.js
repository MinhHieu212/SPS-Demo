import React, { useEffect, useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import "./AddPrinterModal.scss";
import { InfoField2 } from "../../Utils/InfoField";
import filled from "@material-tailwind/react/theme/components/timeline/timelineIconColors/filled";

export const AddPrinterModal = ({ children }) => {
  const [openAPModal, setOpenAPModal] = useState(false);
  const handleClose = () => {
    setOpenAPModal(false);
  };

  const [values_AP, setValues_AP] = useState({
    ID: "0953",
    brand: "",
    model: "",
    location: { facility: "", department: "", room: "" },
    description: "None",
  });

  const [ID, setID] = useState(values_AP.ID);
  const [brand, setBrand] = useState(values_AP.brand);
  const [type, setType] = useState(values_AP.type);

  const [location, setLocation] = useState(values_AP.location);
  const [facilities, setFacilities] = useState("");
  const [departments, setDepartments] = useState([]);
  const [rooms, setRooms] = useState([]);

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
  const onChangeDep = (val) => {
    if (facilities === "Cơ sở 1") {
      setDepartments(["B1", "B2", "B3"]);
      location.department = "";
      location.room = "";
    } else if (facilities === "Cơ sở 2") {
      setDepartments(["H1", "H3", "H6"]);
      location.department = "";
      location.room = "";
    }
  };

  // console.log(location);
  const [desc, setDesc] = useState(values_AP.description);
  const [checked, setChecked] = useState("active");

  const onChange = (e) => {
    setValues_AP({ ...values_AP, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="bg-red-100 flex float-right align-middle"
        onClick={() => setOpenAPModal(true)}
      >
        {children}
      </div>
      <CenterModal open={openAPModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#367FA9] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[3.75rem] w-full">
            THÊM MÁY IN
          </div>
          <div className="w-full flex flex-col justify-between md:px-[62px] px-[12px] py-[24px] mb-[16px]">
            <div className="flex flex-row items-center justify-start gap-[8px] mb-[22px]">
              <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                ID:{" "}
              </p>
              <div className="flex-1">
                <input
                  type="text"
                  className="block w-full"
                  value={ID}
                  readOnly
                />
              </div>
            </div>
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
                  {departments.map((dep) => {
                    return <option value={dep}>{dep}</option>;
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
                  {rooms.map((rm) => {
                    return <option value={rm}>{rm}</option>;
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
              <div className="flex flex-row items-end">
                <div>
                  <div className="flex items-center mb-[4px] gap-[22px]">
                    <input
                      checked={checked === "active"}
                      onChange={(e) => setChecked(e.target.value)}
                      id="active"
                      type="radio"
                      value="active"
                      name="statusPrinter"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="active"
                      className="text-[16px] md:text-[20px] font-semibold p-0"
                    >
                      Hoạt động
                    </label>
                  </div>
                  <div className="flex items-center gap-[22px]">
                    <input
                      checked={checked === "inactive"}
                      onChange={(e) => setChecked(e.target.value)}
                      id="inactive"
                      type="radio"
                      value="inactive"
                      name="statusPrinter"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="inactive"
                      className="text-[16px] md:text-[20px] font-semibold p-0"
                    >
                      Không hoạt động
                    </label>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="ml-auto bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500  p-2 w-[154px] rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center"
                >
                  Hoàn tất
                </button>
              </div>
            </div>
          </div>
        </div>
      </CenterModal>
    </>
  );
};
export default AddPrinterModal;
