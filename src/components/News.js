import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import {iex} from '../config/iex.js';
const News = (props) => {
    const [articles, setarticles] = useState([])
    const [data1, setdata] = useState({})
    const [loading, setloading] = useState(true)
    const [totalResults, settotalResults] = useState(0)
    const [pageNo, setpageNo] = useState(1)
    const [pageSize, setpageSize] = useState(8)
   

 
  
    const updateNews = async () => {
        try {
            // 81deb2b103374136b11a2fa29468a681
            // 7cef68035e5243c981f6ef71fadd76aa
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81deb2b103374136b11a2fa29468a681&page=${pageNo}&pageSize=${pageSize}&q=${props.q}`;
            setloading(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setarticles(data.articles);
            settotalResults(data.totalResults);
            setloading(false);
            props.setcountry(props.country)
        }
        catch (e) {
            console.log("something is not working");
        }
    }


    useEffect(() => {
        const s=`${iex.base_url}/stock/am/intraday-prices?chartLast=1&token=${iex.api_token}`
        fetch(s)
        .then((response) => response.json())
        .then((data) => {
        setdata(data [data. length - 1]);})

        updateNews();
    }, [])
    const handleNext = async () => {

        setpageNo(pageNo + 1);

        try {
            // 81deb2b103374136b11a2fa29468a681
            // 7cef68035e5243c981f6ef71fadd76aa
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cef68035e5243c981f6ef71fadd76aa&page=${pageNo + 1}&pageSize=${pageSize}&q=${props.q}`;
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
            // 81deb2b103374136b11a2fa29468a681
            // 7cef68035e5243c981f6ef71fadd76aa
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cef68035e5243c981f6ef71fadd76aa&page=${pageNo - 1}&pageSize=${pageSize}&q=${props.q}`;
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

            <marquee loop="100" width="100%" direction="left" height="25px" style={{background:"red",color:"white"}}>
           
<b> Amazon</b> ${data1.open+89}(+1.6%)<i class="fa-solid fa-arrow-trend-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b> Zomato</b> ${data1.open+60}(-0.1%)<i class="fa-solid fa-arrow-trend-down"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b> Paytm</b> ${data1.open+56}(-4.0%)<i class="fa-solid fa-arrow-trend-down"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b> Reliance</b> ${data1.open+24}(+2.7%)<i class="fa-solid fa-arrow-trend-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b>  Mrf</b> ${data1.open+23}(-1.3%)<i class="fa-solid fa-arrow-trend-down"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b>  Bitcoin</b> ${data1.open+806}(+0.9%)<i class="fa-solid fa-arrow-trend-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b>  Gold</b> ${data1.open+1990}(+0.6%)<i class="fa-solid fa-arrow-trend-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b>  Wipro</b> ${data1.open+271}(-0.6%)<i class="fa-solid fa-arrow-trend-down"></i>&nbsp;&nbsp;&nbsp;&nbsp;
<b>  Jubliant Food</b> ${data1.open+28}(+7.6%)<i class="fa-solid fa-arrow-trend-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;

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