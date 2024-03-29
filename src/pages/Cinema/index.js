import parallax7 from '~/assets/images copy/parallax/parallax7.jpg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cinema() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get('https://localhost:7168/api/v1/Movies')
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <div id="t3-mainbody" className="t3-mainbody">
                <div className="container">
                    <div className="row">
                        {/* MAIN CONTENT */}
                        <div id="t3-content" className="t3-content col-sm-12">
                            <div className="content-top wrap t3-sl t3-sl-content-top ">
                                <div className="row">
                                    <div className="moduletable center  col-sm-12">
                                        <div className="module_container">
                                            <div className="page_header">
                                                <h3 className="moduleTitle type1">
                                                    <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                        CINEMA
                                                    </span>{' '}
                                                    <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                                        CITY
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="mod_custom mod_custom__center">
                                                <h2>
                                                    <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                        WATCH
                                                    </span>{' '}
                                                    <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                        MOVIES
                                                    </span>{' '}
                                                    <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                        AT
                                                    </span>{' '}
                                                    <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                                        IT'S
                                                    </span>{' '}
                                                    <span className="item_title_part_4 item_title_part_odd item_title_part_second_half item_title_part_last">
                                                        BEST
                                                    </span>
                                                </h2>
                                                <p>
                                                    Cube is your best shopping experience in the center of the city,
                                                    special offers and season sales. If you like to shop for all your
                                                    clothes and things in one place, welcome to Cube shopping mall! In
                                                    addition to the huge number of popular stores inside, we have
                                                    entertainment and dining zones where you can have some rest.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section
                                className="page-blog page-blog__"
                                itemScope=""
                                itemType="http://schema.org/Blog"
                            ></section>
                        </div>
                        {/* //MAIN CONTENT */}
                    </div>
                </div>
            </div>
            <div className="position-1 wrap t3-sl t3-sl-1 ">
                <div className="container container-fullwidth">
                    <div className="row">
                        <div className="moduletable type1 right ">
                            <div className="module_container">
                                <div
                                    id="mod_tm_parallax_313"
                                    className="parallax-container mod_tm_parallax__type1 right"
                                >
                                    <div className="mod_tm_parallax">
                                        <img src={parallax7} alt="" />
                                    </div>
                                    <div className="parallax-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="moduletable   col-sm-6 col-sm-offset-6">
                                                    <div className="module_container">
                                                        <div className="page_header">
                                                            <h4 className="moduleTitle">
                                                                <i
                                                                    class="fa-solid fa-video"
                                                                    style={{
                                                                        fontSize: 30,
                                                                        marginBottom: 10,
                                                                        color: '#f39a4a',
                                                                    }}
                                                                />{' '}
                                                                <br />
                                                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                                    A
                                                                </span>{' '}
                                                                <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                                                    wide
                                                                </span>{' '}
                                                                <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                                                    library
                                                                </span>{' '}
                                                                <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                                                    of
                                                                </span>{' '}
                                                                <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                                                    movie
                                                                </span>{' '}
                                                                <span className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">
                                                                    titles
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div
                                                            className="mod-article-single mod-article-single__"
                                                            id="module_312"
                                                        >
                                                            <div className="item__module" id="item_219">
                                                                {/* Intro Text */}
                                                                <div className="item_introtext">
                                                                    Cube Shopping Mall has 12 theatres, with a total of
                                                                    8080 seats, has superb film projection, state of the
                                                                    art surround sound, spacious lobby area, comfortable
                                                                    upholstered seats, and carpeted floors perfect for
                                                                    everybody's movie-watching experience. IMAX is
                                                                    designed to fill one's field of vision and engulf
                                                                    one in cinematic surround sound so powerful it is
                                                                    almost tangible.
                                                                    <p>
                                                                        The screen is several times larger than a
                                                                        standard theater screen and is slightly curved
                                                                        with seats angled, allowing audience to have an
                                                                        unobstructed view of the movie screening.
                                                                    </p>{' '}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-2 wrap t3-sl t3-sl-2 ">
                <div className="container ">
                    <div className="row">
                        <div className="moduletable center  col-sm-12">
                            <div className="module_container">
                                <div className="page_header">
                                    <h2 className="moduleTitle type4">
                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                            MOVIES
                                        </span>{' '}
                                        <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                            WHAT’S
                                        </span>{' '}
                                        <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                            ON
                                        </span>{' '}
                                        <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                            THE
                                        </span>{' '}
                                        <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                            SCREEN
                                        </span>{' '}
                                        <span className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">
                                            TODAY
                                        </span>
                                    </h2>
                                </div>
                                <div
                                    className="mod-newsflash-adv gallery mod-newsflash-adv__center cols-4"
                                    id="module_314"
                                >
                                    <div className="row">
                                        {movies.map((movie, index) => (
                                            <article key={index} className="col-sm-3 item item_num0 item__module">
                                                <div className="item_content">
                                                    {/* Intro Image */}
                                                    <figure className="item_img img-intro img-intro__none">
                                                        <a
                                                            className="fancybox-thumb zoom articleGalleryZoom"
                                                            data-fancybox-group="portfolio"
                                                            data-fancybox-type="image"
                                                            data-fancybox="fancybox"
                                                            href={movie.movie_Image}
                                                        >
                                                            <img
                                                                style={{ width: 270, height: 400 }}
                                                                src={movie.movie_Image}
                                                                alt={movie.title}
                                                            />{' '}
                                                            {}
                                                        </a>
                                                    </figure>
                                                    {/* Item title */}
                                                    <h5 className="item_title item_title__center">
                                                        <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                                            {movie.title}
                                                        </span>{' '}
                                                        <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                                            Movie
                                                        </span>
                                                    </h5>
                                                    {/* Introtext */}
                                                    <div className="item_introtext">
                                                        <dl className="table">
                                                            <dd>17:00</dd>
                                                            <dd>19:50</dd>
                                                            <dd>23:05</dd>
                                                        </dl>
                                                    </div>
                                                    {/* Read More link */}
                                                </div>
                                                <div className="clearfix" />
                                            </article>
                                        ))}
                                    </div>

                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        <div className="moduletable   col-sm-12">
                            <div className="module_container">
                                <div className="mod-newsflash-adv custom mod-newsflash-adv__ cols-3" id="module_315">
                                    <div className="row">
                                        <article className="col-sm-4 item item_num0 item__module  " id="item_228">
                                            <div className="item_content">
                                                {/* Item title */}

                                                <h5 className="item_title item_title__" style={{ display: 'flex' }}>
                                                    <i
                                                        class="fa-regular fa-clock"
                                                        style={{ fontSize: 20, color: '#70cf97' }}
                                                    ></i>
                                                    <span
                                                        style={{ marginLeft: 20 }}
                                                        className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first"
                                                    >
                                                        WORKING
                                                    </span>{' '}
                                                    <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                                        HOURS
                                                    </span>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext">
                                                    <p>Daily, from 10:00 AM till 11:00 PM</p>{' '}
                                                </div>
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article className="col-sm-4 item item_num1 item__module  " id="item_229">
                                            <div className="item_content">
                                                {/* Item title */}
                                                <h5 className="item_title item_title__" style={{ display: 'flex' }}>
                                                    <i
                                                        class="fa-solid fa-phone"
                                                        style={{ fontSize: 20, color: '#70cf97' }}
                                                    ></i>
                                                    <span
                                                        style={{ marginLeft: 20 }}
                                                        className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first"
                                                    >
                                                        CONTACT
                                                    </span>{' '}
                                                    <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                                        PHONE
                                                    </span>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext">
                                                    <p>+ 1 (222) 333 4567</p>{' '}
                                                </div>
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                        <article
                                            className="col-sm-4 item item_num2 item__module  lastItem"
                                            id="item_230"
                                        >
                                            <div className="item_content">
                                                {/* Item title */}
                                                <h5 className="item_title item_title__" style={{ display: 'flex' }}>
                                                    <i
                                                        class="fa-solid fa-bars"
                                                        style={{ fontSize: 20, color: '#70cf97' }}
                                                    ></i>
                                                    <span
                                                        style={{ marginLeft: 20 }}
                                                        className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last"
                                                    >
                                                        PRICING
                                                    </span>
                                                </h5>
                                                {/* Introtext */}
                                                <div className="item_introtext">
                                                    <p>MON-FRI: 15$ per hour; WEEKENDS: 35$ per hour</p>{' '}
                                                </div>
                                                {/* Read More link */}
                                            </div>
                                            <div className="clearfix" />
                                        </article>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fixed-sidebar-left">
                <div className="moduletable  ">
                    <div className="module_container"></div>
                </div>
            </div>
            <div id="fixed-sidebar-right"></div>
        </>
    );
}

export default Cinema;
