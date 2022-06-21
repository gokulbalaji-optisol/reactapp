import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sagaActions from "redux/sagaActions";
import { bannerSelector } from "redux/slices/banner-slice";
const HomePage = () => {
  const imgUrl = "http://localhost:3100/images/";
  const dispatch = useDispatch();
  const { banners, loading, hasErrors } = useSelector(bannerSelector);

  useEffect(() => {
    //fetchData();
  }, [loading]);
  useEffect(() => {
    //fetchData();
    dispatch({ type: sagaActions.FETCH_BANNER });
  }, []);
  return (
    <>
      {banners.length > 0 && (
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 h-30 carosel-img"
                  src={imgUrl + banners[0].img}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 carosel-img"
                  src={imgUrl + banners[1].img}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 carosel-img"
                  src={imgUrl + banners[2].img}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      )}
      {/* <div className="ml-5 mt-5 display-4">Recently Added</div>
        {success &&
        <CardSlider key ={1} data={recentAddedData}/>
        }
        <div className="ml-5 display-4">Top Sellers</div>
        {success &&
        <CardSlider key={2} data={recentAddedData}/>
        } */}
    </>
  );
};
export default HomePage;
