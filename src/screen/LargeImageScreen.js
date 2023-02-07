import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchFrontImage } from "../redux/action";
import { MainImage } from "../data/Data";
import LargeImage from "../components/LargeImage";

const LargeImageScreen = () => {
  const data = useSelector((state) => state?.frontImage ?? []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFrontImage(MainImage));
  }, [dispatch]);

  return <LargeImage data={data} />;
};

export default LargeImageScreen;
