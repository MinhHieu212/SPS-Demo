import React from "react";

const Skeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
        margin: " 0 auto",
      }}
    ></div>
  );
};

export function PrintingSkeleton() {
  return (
    <div className="PrintingItem mt-3">
      <div className="bg-[#e8e7e7] hover:shadow-lg hover:bg-[#d7d7db] transition-all duration-100 cursor-pointer flex rounded-md justify-evenly w-[100] shadow-md">
        <div className="w-[30%] my-3 mx-1 md:m-3 shadow-md bg-white py-2 px-1 rounded-lg text-center item flex flex-col justify-center items-center border-2 border-[#1488db] ">
          <Skeleton height={"70px"} width={"80px"} radius={"3px"}></Skeleton>
          <p className="text-[16px] lg:text-[18px] font-bold mt-1 text-[#1488db]">
            <Skeleton height={"27px"} width={"80px"} radius={"3px"}></Skeleton>
          </p>
        </div>

        <div className="w-[30%] my-3 mx-1 md:m-3 shadow-md bg-white py-2 px-1 md:py-4 md:px-2 rounded-md item text-center flex flex-col border-2 border-[#1488db]  justify-evenly">
          <Skeleton height={"27px"} width={"120px"} radius={"3px"}></Skeleton>

          <p className="text-[16px] lg:text-[18px] text-[#1488db] font-semibold ">
            <Skeleton height={"27px"} width={"120px"} radius={"3px"}></Skeleton>
          </p>
          <p className="text-[16px] lg:text-[18px] text-[#1488db] font-semibold ">
            <Skeleton height={"27px"} width={"120px"} radius={"3px"}></Skeleton>
          </p>
        </div>

        <div className="w-[30%] my-3 mx-1 md:m-3 shadow-md bg-white py-2 px-1 md:py-4 md:px-2 rounded-md item flex flex-col justify-evenly border-2 border-[#1488db] ">
          <p className="text-[16px] lg:text-[18px] text-[#1488db] text-center font-semibold">
            <Skeleton height={"27px"} width={"120px"} radius={"3px"}></Skeleton>
          </p>
          <p className="text-[16px] lg:text-[18px] text-[#1488db] text-center font-semibold">
            <Skeleton height={"27px"} width={"120px"} radius={"3px"}></Skeleton>
          </p>
        </div>
      </div>
      <hr className="sm-hr mt-3" />
    </div>
  );
}

export function ActivitySkeleton() {
  return (
    <div className="min-w-[800px] md:w-full max-h-[60px] ActivityItem flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-3 px-4 mt-2 rounded-sm border-b-2 border-black ">
      <div className=" w-[18%] truncate overflow-clip ">
        <Skeleton height={"27px"} radius={"3px"}></Skeleton>
      </div>
      <div className="text-center truncate overflow-clip  w-[15%]">
        <Skeleton height={"27px"} radius={"3px"}></Skeleton>
      </div>
      <div className=" w-[22%] truncate overflow-clip pl-3">
        <Skeleton height={"27px"} radius={"3px"}></Skeleton>
      </div>
      <div className="text-center truncate overflow-clip  w-[15%]">
        <Skeleton height={"27px"} radius={"3px"}></Skeleton>
      </div>
      <div className=" w-[15%] text-center  truncate overflow-clip">
        <Skeleton height={"27px"} radius={"3px"}></Skeleton>
      </div>
      <div className=" flex justify-center w-[10%] truncate overflow-clip ">
        <Skeleton height={"27px"} radius={"3px"}></Skeleton>
      </div>
    </div>
  );
}

export function HistorySkeleton() {
  return (
    <div className=" flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-semibold py-3 px-4 mt-2 min-w-[800px] md:w-full max-h-[60px] border-b-2 border-black rounded-sm ">
      <div className="truncate overflow-clip w-[25%] ">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="text-center w-[15%]">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="text-center w-[15%]">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="text-center w-[15%]">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="text-center w-[15%]">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center w-[15%]">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
    </div>
  );
}

export function ManageSPSOItem() {
  return (
    <div className="ManageSpsoItem flex flex-row justify-between items-center bg-[#ffffff] shadow-md text-[16px] lg:text-[18px] font-semibold  py-[12px] px-4 mt-2 rounded-sm border-b-2 border-black min-w-[800px] md:w-full max-h-[60px]">
      <div className=" text-center w-[10%]">
        <Skeleton height={"31px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className=" text-center w-[15%]">
        <Skeleton height={"31px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className=" text-center w-[15%]">
        <Skeleton height={"31px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className=" text-center w-[15%]">
        <Skeleton height={"31px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className=" text-center w-[5%]">
        <Skeleton height={"31px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className=" w-[25%] flex flex-row justify-center items-center gap-2">
        <Skeleton height={"31px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="w-[15%] flex flex-row justify-between px-0 md:px-2 items-center">
        <Skeleton height={"31px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
    </div>
  );
}

export function ReportItemSkeleton() {
  return (
    <div className="min-w-[800px] md:w-full max-h-[60px] ActivityItem flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-3 px-4 mt-2 rounded-sm border-b-2 border-black ">
      <div className="min-w-[10%] text-center">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="min-w-[15%] text-center">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="min-w-[25%] text-center">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="min-w-[10%] text-center">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="min-w-[15%] text-center">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="min-w-[15%] text-center">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
      <div className="min-w-[10%] text-center">
        <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
      </div>
    </div>
  );
}

export function ManageItemSkeleton() {
  return (
    <>
      <div className="ManageItem  flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-[12px] px-4 mt-2 rounded-sm border-b-2 border-black min-w-[800px] md:w-full max-h-[60px]">
        <div className="min-w-[10%]">
          <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
        </div>
        <div className="min-w-[35%] flex flex-row   items-center justify-center gap-4 px-5">
          <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
        </div>
        <div className="min-w-[20%] flex justify-center items-center">
          <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
        </div>
        <div className="w-[30%] flex flex-row justify-between px-0 md:px-2 items-center">
          <Skeleton height={"27px"} width={"80%"} radius={"3px"}></Skeleton>
        </div>
      </div>
    </>
  );
}
