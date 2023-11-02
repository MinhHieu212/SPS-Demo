import React from "react";
import './History.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'
import HistoryItem from './HistoryItem'
const files = [
  {
    fileName: 'coluuchat.pdf',
    printerId: '2113619',
    position: 'CS2, H6, 304',
    date: '12-03-2020',
    status: 'Đã xong'
  },
  {
    fileName: 'sucbenvatlieu.pdf',
    printerId: '2113620',
    position: 'CS1, B3, 201',
    date: '27-09-2020',
    status: 'Đã xong'
  },
  {
    fileName: 'hedieuhanh.pdf',
    printerId: '2113620',
    position: 'CS1, B3, 201',
    date: '02-12-2021',
    status: 'Đã xong'
  },
  {
    fileName: 'tangaidaicuong.pdf',
    printerId: '2113619',
    position: 'CS1, B3, 201',
    date: '01-11-2023',
    status: 'Đang đợi'
  },
  {
    fileName: 'coluuchat.pdf',
    printerId: '2113619',
    position: 'CS2, H6, 304',
    date: '12-03-2020',
    status: 'Đã xong'
  },
  {
    fileName: 'sucbenvatlieu.pdf',
    printerId: '2113620',
    position: 'CS1, B3, 201',
    date: '27-09-2020',
    status: 'Đã xong'
  },
  {
    fileName: 'hedieuhanh.pdf',
    printerId: '2113620',
    position: 'CS1, B3, 201',
    date: '02-12-2021',
    status: 'Đã xong'
  },
  {
    fileName: 'tangaidaicuong.pdf',
    printerId: '2113619',
    position: 'CS1, B3, 201',
    date: '01-11-2023',
    status: 'Đang đợi'
  }
]
const History = () => {
  return (
    <div className="History">
      <h2 className="text-2xl lg:text-4xl font-semibold text-[#066DCC] mt-4 history-title">LỊCH SỬ IN ẤN</h2>
      <div className="flex flex-col md:flex-row mt-4 wrapper">
        <div className="w-full md:w-1/2 relative">
          <div className="bg-[#3C8DBC] text-white text-center text-xl font-bold rounded-lg title-wrapper">TỔNG SỐ TRANG ĐÃ IN</div>
          <div className="bg-white flex flex-row text-base font-bold rounded-lg mt-2 content-wrapper">
            <div className="w-1/2 flex flex-col justify-evenly items-center">
              <p className="text-xl">Size A4</p>
              <p className="text-xl">300</p>
            </div>
            <div className="w-1/2 flex flex-col justify-evenly items-center">
              <p className="text-xl">Size A3</p>
              <p className="text-xl">300</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col input-wrapper">
          <div className="relative">
            <input type="text" className="w-full bg-white" placeholder="Tìm theo ID máy in" />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="absolute right-4 bottom-1/2 translate-y-1/2" />
          </div>
          <div className="relative">
            <input type="text" className="w-full" placeholder="Lọc kết quả" />
            <FontAwesomeIcon icon={faFilter} size="2x" className="absolute right-4 bottom-1/2 translate-y-1/2" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC] text-sm md:text-base lg:text-lg font-bold py-3 px-4 mt-8 rounded-md print-section">
          <div>TÊN FILE</div>
          <div>ID MÁY IN</div>
          <div>VỊ TRÍ</div>
          <div>NGÀY IN</div>
          <div>TRẠNG THÁI</div>
          <div>TÙY CHỌN</div>
        </div>
        {files.map(file => (
          <HistoryItem
            fileName = {file.fileName}
            printerId = {file.printerId}
            position = {file.position}
            date = {file.date}
            status = {file.status}
          />
        ))}
      </div>

    </div>
  );
};

export default History;
