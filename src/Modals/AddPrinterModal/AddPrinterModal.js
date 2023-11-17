import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import "./AddPrinterModal.scss"
import { InfoField2 } from "../../Utils/InfoField";



export const AddPrinterModal = ({ children }) => {
  const [openAPModal, setOpenAPModal] = useState(false);
  const handleClose = () => {
    setOpenAPModal(false);
  };
  const [values_AP, setValues_AP] = useState({
    ID: '',
    brand: "",
    model: "",
    position: "",
    description: "None"
  });
  const onChange = (e) => {
    setValues_AP({...values_AP, [e.target.name]: e.target.value});
  }
  const ToggleSwitch = () => {
    const [activeButt, setActiveButt] = useState('ena_butt');
    const switchEnable = () => {
      setActiveButt('ena_butt');
    }
    const switchDisable = () => {
      setActiveButt('disa_butt');
    }
    return (
      <div className="inputAdd state">
        <label>Trạng thái:</label>
        <input type="button" name="enable" className={`toggle_butt ${activeButt == 'ena_butt'? 'active' : 'inactive'}`} onClick={()=>switchEnable} />
        <span className="font-bold inline-block">Hoạt động</span>
        {/* </input> */}
        <input type="button" name="disable" className={`toggle_butt ${activeButt == 'disa_butt'? 'active bg-red' : 'inactive'}`} onClick={()=>switchDisable} />
        <span className="font-bold block">Vô hiệu hóa</span>
        {/* </input> */}
      </div>
    )
  }
  

  return (
    <>
        <div className="bg-red-100 flex float-right align-middle" onClick={() => setOpenAPModal(true)}> {children}</div>
        <CenterModal open={openAPModal} handleClose={handleClose}>
          <div className="w-[23.75rem] md:w-[37.5rem] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
            <div className="header bg-[#066DCC] text-white text-[22px] pt-1 font-bold flex items-center justify-center h-[3.75rem] w-full">
              THÊM MÁY IN
            </div>
            <div className="w-full h-[34rem] flex justify-start py-2 gap-2 items-center flex-col text-[16px] md:text-[20px] overflow-y-scroll">
              <div className="inputAdd ID flex flex-row">
                <label>ID máy in:</label>
                <input type="text" placeholder="Nhập ID..." value={values_AP.ID} name="ID" onChange={onChange}/>
              </div>
              <div className="inputAdd brand flex flex-row">
                <label>Nhãn hiệu:</label>
                <input type="text" placeholder="Nhập nhãn hiệu..." value={values_AP.brand} name="brand" onChange={onChange}/>
              </div>
              <div className="inputAdd model flex flex-row">
                <label>Mẫu máy:</label>
                <input type="text" placeholder="Nhập mẫu máy..." value={values_AP.model} name="model" onChange={onChange}/>
              </div>
              <div className="inputAdd pos flex flex-row">
                <label>Vị trí:</label>
                <input type="text" placeholder="Nhập vị trí..." value={values_AP.pos} name="position" onChange={onChange}/>
              </div>
              <div className="inputAdd description flex flex-col">
                <label>Mô tả:</label>
                <input type="text" placeholder="Nhập mô tả..." value={values_AP.description} name="description" onChange={onChange}/>
              </div>
              {/* <div className="inputAdd state">
                <label>Trạng thái:</label>
                <div>
                  <button type="button"> </button><span>Hoạt động</span>
                </div>
                <div>
                  <button type="button"> </button><span>Vô hiệu hóa</span>
                </div>
                
              </div> */}
              <ToggleSwitch />
              <button className="hoantat flex float-right items-center justify-center my-[0.25rem] mx-[0.25rem]" type="submit">Hoàn tất</button>
              
            </div>
          </div>

        </CenterModal>
    </>
  )
}
export default AddPrinterModal;
