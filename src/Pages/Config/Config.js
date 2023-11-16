import React, { useState } from "react";
import "./Config.scss"
import {AiOutlineDelete} from 'react-icons/ai'

const Config = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="Config max-w-[1280px] px-[15px] md:px-[32px] lg:px-[70px] mx-auto mb-5 bg-[#E5E5E5] shadow-sm min-h-[93vh]">
      <h1 className="text-3xl lg:text-4xl text-[#066dcc] font-semibold mt-4 border-b-4 border-black pb-2 md:pb-3">
        CẤU HÌNH HỆ THỐNG
      </h1>
      <div className="Form_quanlyvatlieu flex item-center justify-center bg-cover bg-center mx-auto my-10 ">
        <form onSubmit={handleSubmit} className="bg-white py-0 px-[3.75rem] w-[35.625rem]">
          <h2 className="text-xl lg:text-2xl text-[#1488DB] text-center font-semibold mt-4 border-b-4 border-[#1488DB] pb-2 md:pb-3 mb-2 md:mb-6">Quản lý Vật Liệu Học Tập và Cấp Phát Tài Liệu</h2>
            <div className="formInput flex flex-col">
              <label>{inputs[0].label}</label>
              <div>
                  <input placeholder={inputs[0].placeholder} onChange={onChange}/> 
              </div>
              <span className="Err">{errorMessage}</span>
            </div>

            <div className="formInput flex flex-col">
              <label>{inputs[1].label}</label>
              <div>
                  <input type="date" name="date" id="datepicker" required onChange={onChange}/> 
              </div>
              <span className="Err">{errorMessage}</span>
            </div>

            <div className="formInput flex flex-col">
              <label>{inputs[2].label}</label>
              <div>
                  <input type="date" name="date" id="datepicker" required onChange={onChange}/> 
              </div>
              <span className="Err">{errorMessage}</span>
            </div>
            
            <div className="formInput flex flex-col">
              <label>{inputs[3].label}</label>
              <div>
                  <input placeholder={inputs[3].placeholder} onChange={onChange}/> 
                  <span className="font-bold text-xl w-1/3 "> (vnđ)</span>
              </div>
              <span className="Err">{errorMessage}</span>
            </div>
          <button className="Submit flex float-right items-center justify-center my-4 mx-[0.5rem]" type="submit">Áp dụng</button>
          <button className="Todefault flex float-right items-center justify-center my-4 mx-[0.5rem]" type="button" onClick={setDefault}>Mặc định</button>
        </form>
      </div>
      

      <div className="Form_fileduocphep flex item-center justify-center bg-cover bg-center mx-auto my-10">
          <form onSubmit={handleSubmit} className="bg-white py-0 px-[3.75rem] w-[35.625rem]">
            <h2 className="text-xl lg:text-2xl text-[#1488DB] font-semibold mt-4 border-b-4 border-[#1488DB] pb-2 md:pb-3">Cấu hình các loại file được in</h2>
            <div className="selectlist my-[1.5rem] mx-0" > 
              <select className="w-[60%] h-[2.5rem] py-0 px-2 rounded-[0.1875rem]" onChange={updateInputType}>
                <option selected = "true" disabled="disable" value="">Chọn loại tệp để thêm...</option>
                <option value=".pptx">.pptx</option>
                <option value=".pdf">.pdf</option>
                <option value=".png">.png</option>
                <option value=".doc">.doc</option>
                <option value=".docx">.docx</option>
                <option value=".jpg">.jpg</option>
                <option value=".xlsx">.xlsx</option>
              </select>

              <button className="float-right" type="submit" onClick={() => handleAdd(selectedValue)}>Thêm</button>
              {errorMessage && <div>
                {errorMessage}
                {setTimeout(() => {setErrorMessage(null)},3000)}
                </div>}
            </div>

            <h3 className="text-xs lg:text-xl font-semibold mt-4 pb-2 md:pb-3 relative"><span className="border-b-2 border-black">Loại file được phép in trong hệ thống</span></h3>
            <div className="currentlist_wrapper scroll shadow-md shadow-slate-600 mb-[1.3125rem]" style={{ overflowY: 'auto', maxHeight: '12rem' }}>
              <div className="current_list flex flex-col">
                {(() => {
                    if (allItem.length === 0) {
                      return <div className="italic text-gray-400">Bạn hiện chưa thêm loại file nào.</div>;
                    }
                })()}
                {allItem.map((item, key) => {
                  return (
                    <div className="current_list_item flex flex-row my-[0.5rem] py-[0.5rem] px-[1rem]" key={key}>
                      <p>{item.fileType}</p>
                      <div>
                        <AiOutlineDelete className="icon text-2xl cursor-pointer" onClick={()=>handleDelete(item.id)} title="Delete?"/>
                      </div>
                    </div>
                  )
                })}
              </div>
           </div>

          </form>
      </div>
    </div>
  );
};

export default Config;
