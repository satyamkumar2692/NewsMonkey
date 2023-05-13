import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [totalResults, settotalResults] = useState(0);
    const [pageNo, setpageNo] = useState(1);
    const [pageSize, setpageSize] = useState(8);

    useEffect(() => {
        updateNews();
    }, [props.q, props.country, props.category])

    useEffect(() => {
        updateNews();
    }, [])

    const updateNews = async () => {
        try {
            // 81deb2b103374136b11a2fa29468a681
            // 7cef68035e5243c981f6ef71fadd76aa
            // 5c57decd21334b5e96056c7a42fc8675
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f981e3e57d994b0a9731a9c0c18dcf82&page=${pageNo}&pageSize=${pageSize}&q=${props.q}`;
            setloading(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setarticles(data.articles);
            settotalResults(data.totalResults);
            setloading(false);

        }
        catch (e) {
            console.log("something is not working");
        }
    }


    const handleNext = async () => {

        setpageNo(pageNo + 1);

        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f981e3e57d994b0a9731a9c0c18dcf82&page=${pageNo + 1}&pageSize=${pageSize}&q=${props.q}`;
            setloading(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setarticles(data.articles);
            settotalResults(data.totalResults);
            setloading(false);
        }
        catch (e) {
            console.log("something is not working");
        }
    }
    const handlePrev = async () => {

        setpageNo(pageNo - 1);

        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f981e3e57d994b0a9731a9c0c18dcf82&page=${pageNo - 1}&pageSize=${pageSize}&q=${props.q}`;
            setloading(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setarticles(data.articles);
            settotalResults(data.totalResults);
            setloading(false);
        }
        catch (e) {
            console.log("something is not working");
        }

    }

    return (
        <div>
            <h2 className="my-8 mx-0 text-center" style={{ marginTop: '80px' }}>NewsMonkey-Top {props.heading} Headlines</h2>

            <marquee loop="100" width="100%" direction="left" height="25px" style={{ background: "red", color: "white" }}>
                {articles.map((element) => {
                    return <span>
                        {(element.title)}
                    </span>
                }
                )}
            </marquee>

            {loading && <div className="text-center">
                <Spinner />
            </div>}

            {!loading && <div className="row mx-5" >
                {articles.map((element) => {
                    return <div className='col-md-3' key={element.url}>
                        <NewsItem imgUrl={element.urlToImage} title={element.title} mode={props.mode} emode={props.emode}
                            description={element.description} source={element.source.name} newsUrl={element.url} author={element.author} newsDate={element.publishedAt}
                        />
                    </div>
                }
                )}
                <div className="d-flex justify-content-between">
                    <button disabled={pageNo <= 1} type="button" className="btn btn-dark mx-3 my-3" onClick={handlePrev}>&#8592;Previous</button>
                    <button disabled={pageNo + 1 > Math.ceil(totalResults / pageSize)} type="button" className="btn btn-dark mx-3 my-3" onClick={handleNext}>Next &#8594;</button>
                </div>
                {!loading && <p className='mx-3 my-3 text-center'>Page {pageNo} of {Math.ceil(totalResults / pageSize)}</p>}
            </div>}


        </div>
    )
}
export default News;