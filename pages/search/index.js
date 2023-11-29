import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";
import axios from "axios";
import config from "../../config";
import ReactPaginate from "react-paginate";
import Courses from "../../Components/Molecules/Courses";
import {
  Icon,
  SearchBody,
  SearchInput,
  SearchSelect,
  Select,
} from "../../styles/SearchPage.module";
// import List from "../../Components/Database/schools";

const Search = () => {
  const router = useRouter();
  const query = router.query.query;
  const location = router.query.location;
  const courseType = router.query.courseType;

  const [pageCount, setPageCount] = useState(0);
  const perPage = 6;
  const [queryResult, setQueryResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(null);
  const [getDropdownMenuData, setGetDropdownMenuData] = useState();
  const [selectedValue, setSelectedValue] = useState({
    institution: "",
    courseType: "",
    city: "",
    beginning: "",
    tuitionFee: "",
  });

  useEffect(() => {
    if (!query) return;
    (async () => {
      try {
        const response = await axios.get(
          `${config.apiUrl}/da/record/search?keyword=${query}&perPage=${perPage}&page=0&courseType=${courseType}&location=${location}`
        );
        // setQueryResult(response.data.numPages);
        setPageCount(response.data.numPages);
        setQueryResult(response.data);
      } catch (error) {
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setGetDropdownMenuData(queryResult.getDropdownMenuData);
  }, [queryResult]);

  const handlePageClick = async (event) => {
    const active = event.selected;
    try {
      const response = await axios.get(
        `${config.apiUrl}/da/record/search?keyword=${
          searchQuery || query
        }&perPage=${perPage}&page=${active}&schoolName=${
          selectedValue.institution
        }&courseType=${selectedValue.courseType}&city=${
          selectedValue.city
        }&beginning=${selectedValue.beginning}&fee=${selectedValue.tuitionFee}`
      );
      // const response = await axios.get(
      //   `${config.apiUrl}/da/record/search?keyword=${
      //     searchQuery || query
      //   }&perPage=${perPage}&page=${active}`
      // );
      setQueryResult(response.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    try {
      const response = await axios.get(
        `${
          config.apiUrl
        }/da/record/search?keyword=${searchQuery}&perPage=${perPage}&page=${0}&schoolName=${
          selectedValue.institution
        }&courseType=${selectedValue.courseType}&city=${
          selectedValue.city
        }&beginning=${selectedValue.beginning}&fee=${selectedValue.tuitionFee}`
      );
      setQueryResult(response.data);
      setPageCount(response.data.numPages);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="preloader"></div>;
  }

  return (
    <>
      <SearchBody>
        <form onSubmit={(e) => handleSearch(e)}>
          <Icon>
            <GoSearch color="#969696" />
          </Icon>

          <SearchInput
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for universities"
          />
        </form>

        <SearchSelect>
          {
            <Select
              onChange={(e) =>
                setSelectedValue({
                  ...selectedValue,
                  institution: e.target.value,
                })
              }
            >
              <option value="" hidden>
                Institution
              </option>
              <option value="">All</option>
              {getDropdownMenuData?.schoolName?.map((option, key) => (
                <option key={key} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          }
          {
            <Select
              onChange={(e) =>
                setSelectedValue({
                  ...selectedValue,
                  courseType: e.target.value,
                })
              }
            >
              <option value="" hidden>
                Course type
              </option>
              <option value="">All</option>
              {getDropdownMenuData?.degree?.map((option, key) => (
                <option key={key} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          }

          {
            <Select
              onChange={(e) =>
                setSelectedValue({ ...selectedValue, city: e.target.value })
              }
            >
              <option value="" hidden>
                City
              </option>
              <option value="">All</option>
              {getDropdownMenuData?.city?.map((option, key) => (
                <option key={key} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          }

          {
            <Select
              onChange={(e) =>
                setSelectedValue({
                  ...selectedValue,
                  beginning: e.target.value,
                })
              }
            >
              <option value="" hidden>
                Beginning
              </option>
              <option value="">All</option>
              {getDropdownMenuData?.beginning?.map((option, key) => (
                <option key={key} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          }

          {
            <Select
              onChange={(e) =>
                setSelectedValue({
                  ...selectedValue,
                  tuitionFee: e.target.value,
                })
              }
            >
              <option value="" hidden>
                Tuition Fees
              </option>
              <option value="">All</option>
              {getDropdownMenuData?.fee?.map((option, key) => (
                <option key={key} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          }
        </SearchSelect>

        <Courses data={queryResult?.data} total={queryResult?.total} />

        <div style={{ margin: "auto", width: "fit-content" }}>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            activeLinkClassName="activeLink"
            renderOnZeroPageCount={null}
          />
        </div>
      </SearchBody>
    </>
  );
};

export default Search;
