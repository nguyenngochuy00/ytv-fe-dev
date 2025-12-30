import { NavItem } from "@/types";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "VỀ CHÚNG TÔI", hasDropdown: false, active: false, href: "/intro" },
  {
    label: "CÁC ĐỐI TÁC",
    hasDropdown: false,
    active: false,
    href: "/partners",
  },
  {
    label: "CHỨNG CHỈ - CHỨNG NHẬN",
    hasDropdown: false,
    active: false,
    href: "/certificates",
  },
  {
    label: "CHÍNH SÁCH BẢO HÀNH",
    hasDropdown: false,
    active: false,
    href: "/warranty",
  },
  { label: "LIÊN HỆ", hasDropdown: false, active: false, href: "/contact" },
  {
    label: "TIN TỨC SỨC KHỎE",
    hasDropdown: false,
    active: false,
    href: "/news",
  },
  {
    label: "TƯ VẤN SẢN PHẨM",
    hasDropdown: false,
    active: false,
    href: "/consult",
  },
];
