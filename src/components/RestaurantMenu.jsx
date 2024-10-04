import React, { useState } from "react";
import { useEffect } from "react";
import ShimmerUi from "./shimmerUi";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
function RestaurantMenu() {
  const [resInfo, setResInfo] = useState([]);
  const [itemCards, setItemCards] = useState([]);
  const { resId } = useParams();
//   console.log(resId)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResInfo(json.data?.cards[2].card.card.info);
    setItemCards(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };
  const listOfMenu = itemCards?.map((item) => item.card.info);
//   console.log(listOfMenu);
  return resInfo?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="">
      <h1 className="text-3xl font-medium mt-5">{resInfo?.name}</h1>
      {/* <img src={CDN_URL + resInfo?.cloudinaryImageId} alt="img" className="w-[220px]" /> */}
      <h2 className="">
        {resInfo?.cuisines.join(", ")} - {resInfo?.costForTwoMessage}
      </h2>

      <h2 className="">
        {resInfo?.avgRating}({resInfo?.totalRatings} Ratings)
      </h2>
      <h2 className="">{resInfo?.city}</h2>
      <h2 className="">
        Outlet -{" "}
        {resInfo?.locality.slice(0, 1).toUpperCase() +
          resInfo?.locality.slice(1).toLowerCase()}
        , {resInfo?.areaName}
      </h2>
      <h2 className=""></h2>

      <h2 className="text-2xl font-medium text-center">Menu</h2>
      {listOfMenu?.map((item) => (
        <div key={item.id} className="flex flex-col  mx-auto">
          <h1 className="text-xl">
            -- {item.name} - Rs.{item.price / 100 || item.defaultPrice / 100}
          </h1>
          <h1>{item.category}</h1>
          <h1>{item.description}</h1>
          <h1>{item.imageId}</h1>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
