import {
  BriefcaseMedical,
  Stethoscope,
  Building2,
  TestTube,
  Microscope,
  Baby,
  ClipboardList,
} from "lucide-react";
import { Category } from "@/types/category";

export const CATEGORIES: Category[] = [
  {
    id: "ytgd",
    name: "Y tế gia đình",
    icon: <BriefcaseMedical size={20} />,
    children: [
      {
        id: "may-do",
        name: "Máy đo huyết áp & Phụ kiện",
        icon: "vit",
        items: [
          "Máy đo huyết áp bắp tay",
          "Máy đo huyết áp cổ tay",
          "Phụ kiện máy đo huyết áp",
        ],
      },
      {
        id: "nhiet-ke",
        name: "Nhiệt kế & Phụ kiện",
        icon: "sl",
        items: [],
      },
    ],
    bestSellers: [],
  },
  {
    id: "cs_cs",
    name: "Chăm sóc cuộc sống",
    icon: <Stethoscope size={20} />,
    children: [],
    bestSellers: [],
  },
  {
    id: "yt_bv",
    name: "Y tế bệnh viện",
    icon: <Building2 size={20} />,
    children: [],
    bestSellers: [],
  },
  {
    id: "vt_bv",
    name: "Vật tư bệnh viện",
    icon: <TestTube size={20} />,
    children: [],
    bestSellers: [],
  },
  {
    id: "vt_lab",
    name: "Vật tư phòng Lab",
    icon: <Microscope size={20} />,
    children: [],
    bestSellers: [],
  },
  {
    id: "me_be",
    name: "Mẹ và Bé",
    icon: <Baby size={20} />,
    children: [],
    bestSellers: [],
  },
  {
    id: "sp_bc",
    name: "Sản phẩm bán chạy",
    icon: <ClipboardList size={20} />,
    children: [],
    bestSellers: [],
  },
];
