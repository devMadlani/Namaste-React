import React from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function RestaurantCard(props) {
  const { resData } = props;
  return (
    <Link to={"/restaurant/" + resData?.info.id}>
      <div className="bg-[#f0f0f0] w-[270px] min-h-[350px] hover:border border-black cursor-pointer m-2">
        <img
          src={CDN_URL + resData?.info.cloudinaryImageId}
          alt=""
          className=" h-[210px] w-[100%]"
        />
        <h1 className="text-center text-xl">{resData?.info.name}</h1>
        <h1 className="text-center text-sm">
          {resData?.info.cuisines.join(", ")}
        </h1>
        <h1 className="text-center text-sm">{resData?.info.avgRating}</h1>
        <h1 className="text-center text-sm">{resData?.info.costForTwo}</h1>
      </div>
    </Link>
  );
}

export default RestaurantCard;
