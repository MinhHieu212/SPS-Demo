import {
  HomeIcon,
  HistoryIcon,
  PrintingIcon,
  SupportIcon,
  ConfigIcon,
  MangageIcon,
  ReportIcon,
  ActivitiesIcon,
  NoticeIcon,
} from "../../Assets/Icons/Icons";
import Notice from "../../Pages/Notice/Notice";

export const StudentSideBarOption = [
  { title: "Trang chủ", icon: <HomeIcon />, to: "/Home" },
  { title: "In Tài Liệu", icon: <PrintingIcon />, to: "/Printing" },
  { title: "Lịch sử", icon: <HistoryIcon />, to: "/History" },
  { title: "Hướng dẫn", icon: <SupportIcon />, to: "/Support" },
];

export const SPSOSideBarOption = [
  { title: "Trang chủ", icon: <HomeIcon />, to: "/Home" },
  { title: "Hệ thống máy in", icon: <MangageIcon />, to: "/ManageSpso" },
  { title: "Cấu hình hệ thống", icon: <ConfigIcon />, to: "/Config" },
  { title: "Hoạt động In Ấn", icon: <ActivitiesIcon />, to: "/Activities" },
  { title: "Báo cáo", icon: <ReportIcon />, to: "/Report" },
  { title: "Thông báo", icon: <NoticeIcon />, to: "/Notice" },
  { title: "Hướng dẫn", icon: <SupportIcon />, to: "/Support" },
];

export const StaffSideBarOption = [
  { title: "Trang chủ", icon: <HomeIcon />, to: "/Home" },
  { title: "Hệ thống máy in", icon: <MangageIcon />, to: "/ManageStaff" },
  { title: "Hướng dẫn", icon: <SupportIcon />, to: "/Support" },
];
