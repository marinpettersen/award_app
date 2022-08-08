import React, { useState } from "react";
import { Card } from "../../components/card/Card";
import { data } from "../../components/dummy/Data";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { MenuAlt2Icon, AdjustmentsIcon } from "@heroicons/react/outline";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Filter } from "../../components/filter/Filter";

const Awards = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  function convertInputPrice(number) {
    const formatNumber = number
      .toString()
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formatNumber;
  }
  return (
    <>
      {showMenu && <Sidebar onClick={() => setShowMenu((prev) => !prev)} />}
      {showFilter && (
        <Filter onClickClose={() => setShowFilter((prev) => !prev)} />
      )}
      <div className="flex flex-1 justify-between p-5">
        <div>
          <MenuAlt2Icon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>

        <div className="font-bold">Awards</div>

        <div>
          <AdjustmentsIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setShowFilter((prev) => !prev)}
          />
        </div>
      </div>

      <div className="mb-8">
        {data.map((award) => (
          <div key={award.id}>
            <Card>
              <div className="flex flex-1 justify-end">
                <label
                  className={`
                  ${award.type === "Vouchers" && "bg-blue-500"} 
                  ${award.type === "Products" && "bg-emerald-700"}
                  ${award.type === "Giftcard" && "bg-orange-600"}
                   p-3 rounded-md text-white font-medium text-xs`}
                >
                  {award.type}
                </label>
              </div>

              <div className="relative h-20 w-20">
                <LazyLoadImage 
                src={award.img} 
                height={35}
                width={140}
                effect="blur"
                layout="fill" />
              </div>

              <div className="mt-3">
                <label>{convertInputPrice(award.point)} poin</label>
              </div>
            </Card>

            <div className="px-5">
              <label>{award.name}</label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
