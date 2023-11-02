import React from "react";
import './Printing.scss'
import PrintingItem from "./PrintingItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'
const info = [
  {
    id: '2113619',
    base: 2,
    building: 'H6',
    room: 311,
    status: 'Hoạt động',
    request: 5
  },
  {
    id: '2113620',
    base: 2,
    building: 'H3',
    room: 202,
    status: 'Hoạt động',
    request: 12
  },
  {
    id: '2113621',
    base: 1,
    building: 'B3',
    room: 602,
    status: 'Hoạt động',
    request: 98
  }
]
const Printing = () => {
  return (
    <div className="Printing">
      <h2 className="text-2xl lg:text-4xl font-semibold text-[#066DCC] mt-4 printing-title">CHỌN MÁY IN</h2>
      <div className="flex flex-col md:flex-row mt-4 gap-4">
        <div className="w-full md:w-1/2 bg-white relative">
          <input type="text" className="w-full" placeholder="Tìm theo ID máy in" />
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="absolute right-4 bottom-1/2 translate-y-1/2"/>
        </div>
        <div className="w-full md:w-1/2 bg-white relative">
          <input type="text" className="w-full" placeholder="Lọc kết quả" />
          <FontAwesomeIcon icon={faFilter} size="2x" className="absolute right-4 bottom-1/2 translate-y-1/2"/>
        </div>
      </div>
      <hr className="sm-hr mt-4" />
      {info.map(printer => (
        <PrintingItem
          id = {printer.id}
          base = {printer.base}
          building = {printer.building}
          room = {printer.room}
          status = {printer.status}
          request = {printer.request}
        />
      ))}
    </div>
  );
};

export default Printing;
