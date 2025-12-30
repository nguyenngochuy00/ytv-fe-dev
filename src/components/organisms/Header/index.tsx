"use client";

import { HeaderTopBar } from "./components/HeaderTopBar";
import { HeaderLogo } from "./components/HeaderLogo";
import { HeaderSearch } from "./components/HeaderSearch";
import { HeaderUserActions } from "./components/HeaderUserActions";
import { HeaderNav } from "./components/HeaderNav";
import { HeaderHotSearches } from "./components/HeaderHotSearches";

export function Header() {
  return (
    <>
      <HeaderTopBar />

      {/* Main Header */}
      <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-[1232px] mx-auto px-4 pt-4 pb-2">
          {/* Top Row: Logo, Search, User Actions */}
          <div className="flex items-center gap-8 lg:gap-12">
            <HeaderLogo />
            <HeaderSearch />
            <HeaderUserActions />
          </div>

          <HeaderHotSearches />
        </div>

        <HeaderNav />
      </header>
    </>
  );
}
