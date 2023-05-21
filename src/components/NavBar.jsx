import React, { useEffect } from "react";
// import {SearchNewsByCategories } from "../axios/fetchNews";
import { useGlobalContext } from "./context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaSun,FaMoon } from "react-icons/fa";
const catUrl = `https://newsapi.org/v2/top-headlines?`;
const url = `https://newsapi.org/v2/everything?`;
const NavBar = () => {
  const {
    searchByCatKeyword,
    setCategoriesByNews,
    setSearchByCatKeyword,
    searchInput,
    setSearchInput,
    darkTheme,
    toggleDarkTheme
  } = useGlobalContext();
  // console.log(darkTheme)
  const fetchData = () => {
    const resp = useQuery({
      queryKey: ["news", searchByCatKeyword],
      queryFn: async () => {
        const result = await axios.get(
          `${catUrl}category=${searchByCatKeyword}&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        // console.log(result.data.articles);
        setCategoriesByNews(result.data.articles);
        return result.data;
      },
    });

    if (resp.isLoading) {
      return (
        <section className="container">
          <h4>Loading....</h4>
        </section>
      );
    }

    if (resp.isError) {
      return (
        <section className="container">
          <h4>There was a error....</h4>
        </section>
      );
    }
  };
  const fetchSearchData = () => {
    const resp = useQuery({
      queryKey: ["news", searchInput],
      queryFn: async () => {
        const result = await axios.get(
          `${url}q=${searchInput}&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        // console.log(result.data.articles);
        setCategoriesByNews(result.data.articles);
        return result.data;
      },
    });

    if (resp.isLoading) {
      return (
        <section className="container">
          <h4>Loading....</h4>
        </section>
      );
    }

    if (resp.isError) {
      return (
        <section className="container">
          <h4>There was a error....</h4>
        </section>
      );
    }
  };
  fetchSearchData();
  fetchData();
  // console.log(searchInput)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value)
    setSearchInput(e.target[0].value);
  };
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary sticky-top'  data-bs-theme={`${darkTheme?'dark':''}`}>
      <div className="container-fluid">
        <i
          className="fa-solid fa-newspaper fa-beat-fade fa-xl"
          style={{ color: "#3cd35a" }}
        >
          <a
            style={{ margin: "5px" }}
            className="navbar-brand cat"
            onClick={() => setSearchByCatKeyword("business")}
          >
            news-app
          </a>
        </i>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active cat"
                aria-current="page"
                // onClick={() => SearchNewsByCategories("business")}
                onClick={() => setSearchByCatKeyword("business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active cat"
                aria-current="page"
                // onClick={() => SearchNewsByCategories("entertainment")}
                onClick={() => setSearchByCatKeyword("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active cat"
                aria-current="page"
                // onClick={() => SearchNewsByCategories("general")}
                onClick={() => setSearchByCatKeyword("general")}
              >
                General
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active cat"
                aria-current="page"
                // onClick={() => SearchNewsByCategories("health")}
                onClick={() => setSearchByCatKeyword("health")}
              >
                health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active cat"
                aria-current="page"
                // onClick={() => SearchNewsByCategories("science")}
                onClick={() => setSearchByCatKeyword("science")}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active cat"
                aria-current="page"
                // onClick={() => SearchNewsByCategories("sports")}
                onClick={() => setSearchByCatKeyword("sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active cat"
                aria-current="page"
                // onClick={() => SearchNewsByCategories("technology")}
                onClick={() => setSearchByCatKeyword("business")}
              >
                Technology
              </a>
            </li>
          </ul>
          <button className="btn" type="button" onClick={toggleDarkTheme} >{darkTheme?<FaSun/>:<FaMoon/>}</button>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
