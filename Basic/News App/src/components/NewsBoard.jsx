import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        axios.get(url)
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    }, [category])
  return (
    <div className="text-center">
      <h2>Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
      </div>
  )
}

export default NewsBoard