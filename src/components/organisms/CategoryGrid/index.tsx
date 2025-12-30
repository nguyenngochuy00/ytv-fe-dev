"use client";

import {
  BriefcaseMedical,
  Stethoscope,
  Building2,
  TestTube2,
  Microscope,
  Baby,
  ClipboardList,
} from "lucide-react";
import { CategoryItem } from "@/components/molecules/CategoryItem";
import { CategoryGridHeader } from "./components/CategoryGridHeader";

const CATEGORIES = [
  {
    id: 1,
    name: "Y tế gia đình",
    icon: BriefcaseMedical,
  },
  {
    id: 2,
    name: "Chăm sóc cuộc sống",
    icon: Stethoscope,
  },
  {
    id: 3,
    name: "Y tế bệnh viện",
    icon: Building2,
  },
  {
    id: 4,
    name: "Vật tư bệnh viện",
    icon: TestTube2,
  },
  {
    id: 5,
    name: "Vật tư phòng Lab",
    icon: Microscope,
  },
  {
    id: 6,
    name: "Mẹ và Bé",
    icon: Baby,
  },
  {
    id: 7,
    name: "Sản phẩm bán chạy",
    icon: ClipboardList,
  },
];

export function CategoryGrid() {
  return (
    <section className="animate-slow-fade py-6">
      <CategoryGridHeader />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat) => (
          <CategoryItem key={cat.id} label={cat.name} icon={cat.icon} />
        ))}
      </div>
    </section>
  );
}
