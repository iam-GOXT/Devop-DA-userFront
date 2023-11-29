import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { useRouter } from "next/router";
import SchoolCard from "../../Components/Molecules/Cards/SchoolCard";
import Tabs from "../../Components/Templates/Tabs";
import Slider from "../../Components/Molecules/Slider";
import { SearchById } from "../../styles/SearchPage.module";

const SearchID = () => {
  const router = useRouter();
  const query = router.query.id;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    if (!query) return;

    (async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/da/record/${query}`);
        setData(response.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  if (isLoading) {
    return <div className="preloader"></div>;
  }
  return (
    <>
      <SearchById>
        <SchoolCard data={data?.data} />
        <Tabs data={data?.data} />
        <Slider data={data?.similar} />
      </SearchById>
    </>
  );
};

export default SearchID;
