import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function User() {
    return (
        <div>
            <title>TokenTrove</title>
            <meta charSet="utf-8" />
            {/*[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]*/}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="description" content />
            {/* Css */}
            <link rel="stylesheet" href="https://deothemes.com/envato/xhibiter/html/css/style.css" />
            {/* Dark Mode JS */}
            {/* Header */}
            <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <div className="flex items-center px-6 py-6 xl:px-24">
                    {/* Logo */}
                    <Link to="/" className="shrink-0">
                        <img src="https://deothemes.com/envato/xhibiter/html/img/logo.png" className="max-h-7 dark:hidden" alt="TokenTrove" />
                        <img src="https://deothemes.com/envato/xhibiter/html/img/logo_white.png" className="hidden max-h-7 dark:block" alt="TokenTrove" />
                    </Link>
                    {/* Search */}
                    <form action="search" className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]">
                        <input type="search" className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                            </svg>
                        </span>
                    </form>
                    {/* Menu / Actions */}
                    <div className="js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
                        {/* Mobile Logo / Menu Close */}
                        <div className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden">
                            {/* Mobile Logo */}
                            <Link to="/" className="shrink-0">
                                <img src="https://deothemes.com/envato/xhibiter/html/img/logo.png" className="max-h-7 dark:hidden" alt="TokenTrove" />
                                <img src="https://deothemes.com/envato/xhibiter/html/img/logo_white.png" className="hidden max-h-7 dark:block" alt="TokenTrove" />
                            </Link>
                            {/* Mobile Menu Close */}
                            <button className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent" aria-label="close mobile menu">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </div>
                        {/* Mobile Search */}
                        <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
                            <input type="search" className="w-full rounded-2xl border border-jacarta-100 py-3 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                </svg>
                            </span>
                        </form>
                        {/* Primary Nav */}
                        <nav className="navbar w-full">
                            <ul className="flex flex-col lg:flex-row">
                                <li className="js-nav-dropdown group relative">
                                    <Link to="/" className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5" id="navDropdown-1" aria-expanded="false" role="button" data-bs-toggle="dropdown">Home
                                        <i className="lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </Link>
                                </li>
                                <li className="js-nav-dropdown group relative">
                                    <Link to="/about" className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5" id="navDropdown-2" aria-expanded="false" role="button" data-bs-toggle="dropdown">About
                                        <i className="lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </Link>
                                </li>
                                <li className="js-nav-dropdown nav-item dropdown group relative">
                                    <Link to="/collections" className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5" id="navDropdown-3" aria-expanded="false" role="button" data-bs-toggle="dropdown">Explore
                                        <i className="lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </Link>
                                    <ul className="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2" aria-labelledby="navDropdown-1">
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-light-base p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">All NFTs</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#E4FCF4] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#10B981]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Art</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#FDF7EE] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#FEB240]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Collectibles</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#F2EEFF] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#8358FF]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Domain Names</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#FFEEFA] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#F35BC7]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Music</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#EAF2FE] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#428AF8]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Photography</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#EBEDFF] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#737EF2]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Sports</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#F5FFED] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#8DD059]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Trading Cards</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#FFEEEE] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#EF3D3D]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Utility</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="mr-3 rounded-xl bg-[#EEFCFF] p-[0.375rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#46C7E3]">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Virtual Worlds</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="js-nav-dropdown group relative">
                                    <a href="#" className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5" id="navDropdown-4" aria-expanded="false" role="button" data-bs-toggle="dropdown">Resources
                                        <i className="lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2" aria-labelledby="navDropdown-4">
                                        <li>
                                            <Link to="/help-center" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Help Center</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/partners" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Partners</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Blog</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/single-post" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Single Post</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/newsletter" className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">Newsletter</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="group">
                                    <Link to="/create" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Create</Link>
                                </li>
                            </ul>
                        </nav>
                        {/* Mobile Connect Wallet / Socials */}
                        <div className="mt-10 w-full lg:hidden">
                            <a href="#" className="js-wallet block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark" data-bs-toggle="modal" data-bs-target="#walletModal">
                                Connect Wallet
                            </a>
                            <hr className="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                            {/* Socials */}
                            <div className="flex items-center justify-center space-x-5">
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* Actions */}
                        <div className="ml-8 hidden lg:flex xl:ml-12">
                            {/* Wallet */}
                            <a href="#" className="js-wallet group flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent" data-bs-toggle="modal" data-bs-target="#walletModal" aria-label="wallet">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                                </svg>
                            </a>
                            {/* Profile */}
                            <div className="js-nav-dropdown group-dropdown relative">
                                <button className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent" id="profileDropdown" aria-expanded="false" data-bs-toggle="dropdown" aria-label="profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                                    </svg>
                                </button>
                                <div className="dropdown-menu group-dropdown-hover:visible lg:invisible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl" aria-labelledby="profileDropdown">
                                    <button className="js-copy-clipboard my-4 flex select-none items-center whitespace-nowrap px-5 font-display leading-none text-jacarta-700 dark:text-white" data-tippy-content="Copy">
                                        <span className="max-w-[10rem] overflow-hidden text-ellipsis">0x7a86c0b064171007716bbd6af96676935799a63e</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="ml-1 mb-px h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
                                        </svg>
                                    </button>
                                    <div className="mx-5 mb-6 rounded-lg border border-jacarta-100 p-4 dark:border-jacarta-600">
                                        <span className="text-sm font-medium tracking-tight dark:text-jacarta-200">Balance</span>
                                        <div className="flex items-center">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                            <span className="text-lg font-bold text-green">10 ETH</span>
                                        </div>
                                    </div>
                                    <Link to="/user" className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">My Profile</span>
                                    </Link>
                                    <Link to="/edit-profile" className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">Edit Profile</span>
                                    </Link>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle flex w-full items-center justify-between space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600" data-bs-toggle="dropdown" id="languageSelect" aria-expanded="false">
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                                </svg>
                                                <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">Language</span>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </button>
                                        <div className="dropdown-menu z-10 hidden w-full min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-900" aria-labelledby="languageSelect">
                                            <a href="#" className="dropdown-item flex items-center justify-between rounded-xl px-5 py-2 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span>English</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="dropdown-item flex items-center justify-between rounded-xl px-5 py-2 font-display text-sm font-semibold transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span>Español</span>
                                            </a>
                                            <a href="#" className="dropdown-item flex items-center justify-between rounded-xl px-5 py-2 font-display text-sm font-semibold transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span>Deutsch</span>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">Sign out</span>
                                    </a>
                                </div>
                            </div>
                            {/* Dark Mode */}
                            <a href="#" className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Mobile Menu Actions */}
                    <div className="ml-auto flex lg:hidden">
                        {/* Profile */}
                        <Link to="/edit-profile" className="group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent" aria-label="profile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                            </svg>
                        </Link>
                        {/* Dark Mode */}
                        <a href="#" className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                            </svg>
                        </a>
                        {/* Mobile Menu Toggle */}
                        <button className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent" aria-label="open mobile menu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Banner */}
                <div className="relative">
                    <img src="https://deothemes.com/envato/xhibiter/html/img/user/banner.jpg" alt="banner" className="h-[18.75rem] object-cover" />
                </div>
                {/* end banner */}
                {/* Profile */}
                <section className="relative bg-light-base pb-12 pt-28 dark:bg-jacarta-800">
                    {/* Avatar */}
                    <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                        <figure className="relative">
                            <img src="https://deothemes.com/envato/xhibiter/html/img/user/user_avatar.gif" alt="collection avatar" className="rounded-xl border-[5px] border-white dark:border-jacarta-600" />
                            <div className="absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600" data-tippy-content="Verified Collection">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                </svg>
                            </div>
                        </figure>
                    </div>
                    <div className="container">
                        <div className="text-center">
                            <h2 className="mb-2 font-display text-4xl font-medium text-jacarta-700 dark:text-white">Sad Ducks</h2>
                            <div className="mb-8 inline-flex items-center justify-center rounded-full border border-jacarta-100 bg-white py-1.5 px-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                <span data-tippy-content="ETH">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="mr-1 h-4 w-4">
                                        <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                        <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                        <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                        <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                        <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                    </svg>
                                </span>
                                <button className="js-copy-clipboard max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap dark:text-jacarta-200" data-tippy-content="Copy">
                                    <span>0x7a86c0b064171007716bbd6af96676935799a63e</span>
                                </button>
                            </div>
                            <p className="mx-auto mb-2 max-w-xl text-lg dark:text-jacarta-300">
                                I make art with the simple goal of giving you something pleasing to look at for a few seconds.
                            </p>
                            <span className="text-jacarta-400">Joined December 2019</span>
                            <div className="mt-6 flex items-center justify-center space-x-2.5">
                                <div className="rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                                    <div className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" role="button" data-tippy-content="Favorite">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200">
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                                    <a href="#" className="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm" role="button" id="collectionShare" data-bs-toggle="dropdown" aria-expanded="false" data-tippy-content="Share">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z" />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="collectionShare">
                                        <a href="#" className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                            </svg>
                                            <span className="mt-1 inline-block">Facebook</span>
                                        </a>
                                        <a href="#" className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg>
                                            <span className="mt-1 inline-block">Twitter</span>
                                        </a>
                                        <a href="#" className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                            </svg>
                                            <span className="mt-1 inline-block">Discord</span>
                                        </a>
                                        <a href="#" className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
                                            </svg>
                                            <span className="mt-1 inline-block">Email</span>
                                        </a>
                                        <a href="#" className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
                                            </svg>
                                            <span className="mt-1 inline-block">Copy</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                                    <a href="#" className="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm" role="button" id="collectionActions" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                            <circle cx={2} cy={2} r={2} />
                                            <circle cx={8} cy={2} r={2} />
                                            <circle cx={14} cy={2} r={2} />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="collectionActions">
                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            New bid
                                        </button>
                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            Refresh Metadata
                                        </button>
                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            Share
                                        </button>
                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end profile */}
                {/* Collection */}
                <section className="relative py-24 pt-20">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="https://deothemes.com/envato/xhibiter/html/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        {/* Tabs Nav */}
                        <ul className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white" id="on-sale-tab" data-bs-toggle="tab" data-bs-target="#on-sale" type="button" role="tab" aria-controls="on-sale" aria-selected="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-5 w-5 fill-current">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                                    </svg>
                                    <span className="font-display text-base font-medium">On Sale</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white" id="owned-tab" data-bs-toggle="tab" data-bs-target="#owned" type="button" role="tab" aria-controls="owned" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-5 w-5 fill-current">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm9 8h3l-4 4-4-4h3V9h2v4z" />
                                    </svg>
                                    <span className="font-display text-base font-medium">Owned</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white" id="created-tab" data-bs-toggle="tab" data-bs-target="#created" type="button" role="tab" aria-controls="created" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-5 w-5 fill-current">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
                                    </svg>
                                    <span className="font-display text-base font-medium">Created (20)</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white" id="collections-tab" data-bs-toggle="tab" data-bs-target="#collections" type="button" role="tab" aria-controls="collections" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-5 w-5 fill-current">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                                    </svg>
                                    <span className="font-display text-base font-medium">Collections</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white" id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity" type="button" role="tab" aria-controls="activity" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-5 w-5 fill-current">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z" />
                                    </svg>
                                    <span className="font-display text-base font-medium">Activity</span>
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            {/* On Sale Tab */}
                            <div className="tab-pane fade show active" id="on-sale" role="tabpanel" aria-labelledby="on-sale-tab">
                                {/* Filters */}
                                <div className="mb-8 flex flex-wrap items-center justify-between">
                                    <div className="flex flex-wrap items-center">
                                        {/* Collections */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="onSaleCollectionsFilter" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z" />
                                                </svg>
                                                <span>Collections</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[280px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="onSaleCollectionsFilter">
                                                {/* Search */}
                                                <div className="p-4">
                                                    <form action="search" className="relative block">
                                                        <input type="search" className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                                                        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                                            </svg>
                                                        </span>
                                                    </form>
                                                </div>
                                                {/* Collections List */}
                                                <ul className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto">
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_1.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">CryptoKitties</span>
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_2.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">KaijuKings</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_3.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Kumo x World</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_4.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Irene DAO</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_5.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">GenerativeDungeon</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_6.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">ENS Domains</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_7.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Cozy Penguin</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* Clear / Apply */}
                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button type="button" className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                                                        Clear
                                                    </button>
                                                    <button type="button" className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Category */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="onSaleCategoriesFilter" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" />
                                                </svg>
                                                <span>Category</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="onSaleCategoriesFilter">
                                                <ul className="flex flex-col flex-wrap">
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="text-jacarta-700 dark:text-white">All</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Art
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Collectibles
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Domain
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Music
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Photography
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Virtual World
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Price Range */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="onSalePriceRangeFilter" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z" />
                                                </svg>
                                                <span>Price Range</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="onSalePriceRangeFilter">
                                                {/* Blockchain */}
                                                <div className="dropdown mb-4 cursor-pointer px-5 pt-2">
                                                    <div className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 py-3.5 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white" role="button" id="onSaleFilterPriceBlockchain" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="flex items-center font-display">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/chains/ETH.png" alt="eth" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                            ETH
                                                        </span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                                        </svg>
                                                    </div>
                                                    <div className="dropdown-menu z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="onSaleFilterPriceBlockchain">
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/ETH.png" alt="eth" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                ETH
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/FLOW.png" alt="flow" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                FLOW
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/FUSD.png" alt="fusd" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                FUSD
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/XTZ.png" alt="xtz" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                XTZ
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/DAI.png" alt="dai" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                DAI
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/RARI.png" alt="rari" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                RARI
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* From / To */}
                                                <div className="flex items-center space-x-3 px-5 pb-2">
                                                    <input type="number" placeholder="From" className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                                                    <input type="number" placeholder="To" className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                                                </div>
                                                {/* Clear / Apply */}
                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button type="button" className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                                                        Clear
                                                    </button>
                                                    <button type="button" className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sort */}
                                    <div className="dropdown my-1 cursor-pointer">
                                        <div className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white" role="button" id="onSaleSort" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="font-display">Recently Added</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </div>
                                        <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="onSaleSort">
                                            <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">Sort By</span>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Recently Added
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Price: Low to High
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Price: High to Low
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Auction ending soon
                                            </button>
                                            <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">Options</span>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>Verified Only</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" defaultChecked className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>NFSW Only</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>Show Lazy Minted</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end filters */}
                                {/* Grid */}
                                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 5" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">15</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_1.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_1.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Flourishing Cat #180</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 8.49 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">2/8</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_4.jpg" alt="item 4" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">188</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_2.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_2.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Amazing NFT art</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions2">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5.9 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/7</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_7.jpg" alt="item 7" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">160</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_3.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_3.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">SwagFox#133</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions3" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions3">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.078 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/3</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_6.jpg" alt="item 6" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">159</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_4.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_4.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Splendid Girl</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions4" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions4">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">10 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">2/3</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_8.jpg" alt="item 8" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">32</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_3.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_5.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Monkeyme#155</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions5" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions5">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5 FLOW</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_9.jpg" alt="item 9" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">25</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_6.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_4.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Jedidia#149</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions6" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions6">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.16 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_10.jpg" alt="item 10" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">55</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_2.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_7.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Artof Eve</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions7" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions7">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.13 FLOW</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_11.gif" alt="item 11" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">70</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_8.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_5.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Asuna #1649</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions8" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions8">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.8 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* end grid */}
                            </div>
                            {/* end on sale tab */}
                            {/* Owned Tab */}
                            <div className="tab-pane fade" id="owned" role="tabpanel" aria-labelledby="owned-tab">
                                {/* Filters */}
                                <div className="mb-8 flex flex-wrap items-center justify-between">
                                    <div className="flex flex-wrap items-center">
                                        {/* Collections */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="ownedCollectionsFilter" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z" />
                                                </svg>
                                                <span>Collections</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[280px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="ownedCollectionsFilter">
                                                {/* Search */}
                                                <div className="p-4">
                                                    <form action="search" className="relative block">
                                                        <input type="search" className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                                                        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                                            </svg>
                                                        </span>
                                                    </form>
                                                </div>
                                                {/* Collections List */}
                                                <ul className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto">
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_1.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">CryptoKitties</span>
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_2.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">KaijuKings</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_3.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Kumo x World</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_4.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Irene DAO</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_5.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">GenerativeDungeon</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html//avatars/collection_ava_6.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">ENS Domains</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html//avatars/collection_ava_7.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Cozy Penguin</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* Clear / Apply */}
                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button type="button" className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                                                        Clear
                                                    </button>
                                                    <button type="button" className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Category */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="ownedCategoriesFilter" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" />
                                                </svg>
                                                <span>Category</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="ownedCategoriesFilter">
                                                <ul className="flex flex-col flex-wrap">
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="text-jacarta-700 dark:text-white">All</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Art
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Collectibles
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Domain
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Music
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Photography
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Virtual World
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Price Range */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="ownedPriceRangeFilter" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z" />
                                                </svg>
                                                <span>Price Range</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="ownedPriceRangeFilter">
                                                {/* Blockchain */}
                                                <div className="dropdown mb-4 cursor-pointer px-5 pt-2">
                                                    <div className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 py-3.5 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white" role="button" id="ownedFilterPriceBlockchain" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="flex items-center font-display">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/chains/ETH.png" alt="eth" className="mr-2 h-5 w-5" loading="lazy" />
                                                            ETH
                                                        </span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                                        </svg>
                                                    </div>
                                                    <div className="dropdown-menu z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="ownedFilterPriceBlockchain">
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/ETH.png" alt="eth" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                ETH
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/FLOW.png" alt="flow" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                FLOW
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/FUSD.png" alt="fusd" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                FUSD
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/XTZ.png" alt="xtz" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                XTZ
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/DAI.png" alt="dai" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                DAI
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/RARI.png" alt="rari" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                RARI
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* From / To */}
                                                <div className="flex items-center space-x-3 px-5 pb-2">
                                                    <input type="number" placeholder="From" className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                                                    <input type="number" placeholder="To" className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                                                </div>
                                                {/* Clear / Apply */}
                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button type="button" className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                                                        Clear
                                                    </button>
                                                    <button type="button" className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sort */}
                                    <div className="dropdown my-1 cursor-pointer">
                                        <div className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white" role="button" id="ownedSort" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="font-display">Recently Added</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </div>
                                        <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="ownedSort">
                                            <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">Sort By</span>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Recently Added
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Price: Low to High
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Price: High to Low
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Auction ending soon
                                            </button>
                                            <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">Options</span>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>Verified Only</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" defaultChecked className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>NFSW Only</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>Show Lazy Minted</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end filters */}
                                {/* Grid */}
                                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_11.gif" alt="item 11" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">70</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_8.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_5.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Asuna #1649</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions8" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions8">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.8 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_10.jpg" alt="item 10" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">55</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_2.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_7.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Artof Eve</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions7" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions7">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.13 FLOW</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_9.jpg" alt="item 9" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">25</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_6.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_4.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Jedidia#149</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions6" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions6">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.16 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_8.jpg" alt="item 8" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">32</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_3.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_5.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Monkeyme#155</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions5" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions5">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5 FLOW</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 5" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">15</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_1.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_1.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Flourishing Cat #180</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 8.49 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">2/8</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/simg/products/item_4.jpg" alt="item 4" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">188</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_2.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_2.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Amazing NFT art</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions2">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5.9 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/7</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_7.jpg" alt="item 7" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">160</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_3.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_3.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">SwagFox#133</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions3" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions3">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.078 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/3</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_6.jpg" alt="item 6" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">159</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_4.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_4.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Splendid Girl</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions4" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions4">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">10 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">2/3</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* end grid */}
                            </div>
                            {/* end owned tab */}
                            {/* Created Tab */}
                            <div className="tab-pane fade" id="created" role="tabpanel" aria-labelledby="created-tab">
                                {/* Filters */}
                                <div className="mb-8 flex flex-wrap items-center justify-between">
                                    <div className="flex flex-wrap items-center">
                                        {/* Collections */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="createdCollectionsFilter" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z" />
                                                </svg>
                                                <span>Collections</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[280px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="createdCollectionsFilter">
                                                {/* Search */}
                                                <div className="p-4">
                                                    <form action="search" className="relative block">
                                                        <input type="search" className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                                                        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                                            </svg>
                                                        </span>
                                                    </form>
                                                </div>
                                                {/* Collections List */}
                                                <ul className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto">
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_1.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">CryptoKitties</span>
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_2.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">KaijuKings</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_3.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Kumo x World</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_4.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Irene DAO</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_5.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">GenerativeDungeon</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_6.jpg" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">ENS Domains</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center space-x-3">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/collection_ava_7.png" className="h-8 w-8 rounded-full" loading="lazy" alt="avatar" />
                                                                <span className="text-jacarta-700 dark:text-white">Cozy Penguin</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* Clear / Apply */}
                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button type="button" className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                                                        Clear
                                                    </button>
                                                    <button type="button" className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Category */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="createdCategoriesFilter" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" />
                                                </svg>
                                                <span>Category</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="createdCategoriesFilter">
                                                <ul className="flex flex-col flex-wrap">
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="text-jacarta-700 dark:text-white">All</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                                <path fill="none" d="M0 0h24v24H0z" />
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Art
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Collectibles
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Domain
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Music
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Photography
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Virtual World
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Price Range */}
                                        <div className="my-1 mr-2.5">
                                            <button className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent" id="createdPriceRangeFilter" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z" />
                                                </svg>
                                                <span>Price Range</span>
                                            </button>
                                            <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="createdPriceRangeFilter">
                                                {/* Blockchain */}
                                                <div className="dropdown mb-4 cursor-pointer px-5 pt-2">
                                                    <div className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 py-3.5 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white" role="button" id="createdFilterPriceBlockchain" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="flex items-center font-display">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/chains/ETH.png" alt="eth" className="mr-2 h-5 w-5" loading="lazy" />
                                                            ETH
                                                        </span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                                        </svg>
                                                    </div>
                                                    <div className="dropdown-menu z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="createdFilterPriceBlockchain">
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/ETH.png" alt="eth" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                ETH
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/FLOW.png" alt="flow" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                FLOW
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/FUSD.png" alt="fusd" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                FUSD
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/XTZ.png" alt="xtz" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                XTZ
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/DAI.png" alt="dai" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                DAI
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img src="https://deothemes.com/envato/xhibiter/html/img/chains/RARI.png" alt="rari" className="mr-2 h-5 w-5 rounded-full" loading="lazy" />
                                                                RARI
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* From / To */}
                                                <div className="flex items-center space-x-3 px-5 pb-2">
                                                    <input type="number" placeholder="From" className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                                                    <input type="number" placeholder="To" className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                                                </div>
                                                {/* Clear / Apply */}
                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button type="button" className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                                                        Clear
                                                    </button>
                                                    <button type="button" className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sort */}
                                    <div className="dropdown my-1 cursor-pointer">
                                        <div className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white" role="button" id="createdSort" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="font-display">Recently Added</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </div>
                                        <div className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="createdSort">
                                            <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">Sort By</span>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Recently Added
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mb-[3px] h-4 w-4 fill-accent">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Price: Low to High
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Price: High to Low
                                            </button>
                                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Auction ending soon
                                            </button>
                                            <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">Options</span>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>Verified Only</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" defaultChecked className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>NFSW Only</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                            <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                <span className="flex items-center justify-between">
                                                    <span>Show Lazy Minted</span>
                                                    <input type="checkbox" defaultValue="checkbox" name="check" className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end filters */}
                                {/* Grid */}
                                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 5" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">15</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_1.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_1.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Flourishing Cat #180</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 8.49 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">2/8</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_6.jpg" alt="item 6" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">159</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_4.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_4.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Splendid Girl</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions4" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions4">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">10 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">2/3</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_11.gif" alt="item 11" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">70</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_8.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_5.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Asuna #1649</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions8" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions8">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.8 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_10.jpg" alt="item 10" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">55</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_2.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_7.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Artof Eve</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions7" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions7">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.13 FLOW</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_8.jpg" alt="item 8" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">32</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_3.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_5.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Monkeyme#155</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions5" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions5">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5 FLOW</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_9.jpg" alt="item 9" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">25</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_6.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_4.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Jedidia#149</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions6" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions6">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.16 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_4.jpg" alt="item 4" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">188</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_2.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_2.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">Amazing NFT art</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions2">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5.9 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/7</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <Link to="/item">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_7.jpg" alt="item 7" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                    </Link>
                                                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                    <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/html/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm dark:text-jacarta-200">160</span>
                                                </div>
                                                <div className="absolute left-3 -bottom-3">
                                                    <div className="flex -space-x-2">
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/creator_3.png" alt="creator" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_3.png" alt="owner" className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="mt-7 flex items-center justify-between">
                                                <Link to="/item">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">SwagFox#133</span>
                                                    </Link>
                                                <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                    <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions3" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                            <circle cx={2} cy={2} r={2} />
                                                            <circle cx={8} cy={2} r={2} />
                                                            <circle cx={14} cy={2} r={2} />
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions3">
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            New bid
                                                        </button>
                                                        <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Refresh Metadata
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Share
                                                        </button>
                                                        <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.078 ETH</span>
                                                <span className="text-jacarta-500 dark:text-jacarta-300">1/3</span>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                                    Buy now
                                                </button>
                                                <Link to="/item" className="group flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">View History</span>
                                                    </Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* end grid */}
                            </div>
                            {/* end created tab */}
                            {/* Collections Tab */}
                            <div className="tab-pane fade" id="collections" role="tabpanel" aria-labelledby="collections-tab">
                                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_1_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_1_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_1_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_1_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                            </a>
                                            <a href="collection.html" className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                                Art Me Outside
                                            </a>
                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_5.png" alt="owner" className="h-5 w-5 rounded-full" />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>Wow Frens</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">10K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_2_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_2_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_2_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_2_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                            </a>
                                            <a href="collection.html" className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                                PankySkal
                                            </a>
                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_9.png" alt="owner" className="h-5 w-5 rounded-full" />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>NFT stars</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">2.8K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_3_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_3_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_3_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_3_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                            </a>
                                            <a href="collection.html" className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                                VR Space_287
                                            </a>
                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/owner_4.png" alt="owner" className="h-5 w-5 rounded-full" />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>Origin Morish</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">8K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_4_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_4_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_4_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                    <img src="https://deothemes.com/envato/xhibiter/html/img/collections/collection_4_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                                                </span>
                                            </a>
                                            <a href="collection.html" className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                                Metasmorf
                                            </a>
                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img src="https://deothemes.com/envato/xhibiter/html//avatars/owner_10.png" alt="owner" className="h-5 w-5 rounded-full" />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>Lazy Panda</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">1.5K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            {/* end collections tab */}
                            {/* Activity Tab */}
                            <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                                {/* Records / Filter */}
                                <div className="lg:flex">
                                    {/* Records */}
                                    <div className="mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10">
                                        <Link to="/item" className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="mr-5 self-start">
                                                <img src="https://deothemes.com/envato/xhibiter/html//avatars/avatar_2.jpg" alt="avatar 2" className="rounded-2lg" loading="lazy" />
                                            </figure>
                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Lazyone Panda
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500">sold for 1.515 ETH</span>
                                                <span className="block text-xs text-jacarta-300">30 minutes 45 seconds ago</span>
                                            </div>
                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                                                </svg>
                                            </div>
                                            </Link>
                                        <Link to="/item" className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="mr-5 self-start">
                                                <img src="https://deothemes.com/envato/xhibiter/html//products/item_21_sm.jpg" alt="item 2" className="rounded-2lg" loading="lazy" />
                                            </figure>
                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    NFT Funny Cat
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500">listed by 051_Hart .08095 ETH</span>
                                                <span className="block text-xs text-jacarta-300">40 minutes 36 seconds ago</span>
                                            </div>
                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                                                </svg>
                                            </div>
                                            </Link>
                                        <Link to="/item" className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="mr-5 self-start">
                                                <img src="https://deothemes.com/envato/xhibiter/html//products/item_22_sm.jpg" alt="item 3" className="rounded-2lg" loading="lazy" />
                                            </figure>
                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Prince Ape Planet
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500">tranferred from 027ab52</span>
                                                <span className="block text-xs text-jacarta-300">1 hour 15 minutes ago</span>
                                            </div>
                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                                                </svg>
                                            </div>
                                            </Link>
                                        <Link to="/item" className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="mr-5 self-start">
                                                <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_23_sm.jpg" alt="item 3" className="rounded-2lg" loading="lazy" />
                                            </figure>
                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Origin Morish
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500">bid cancelled by 0397fd</span>
                                                <span className="block text-xs text-jacarta-300">1 hour 55 minutes ago</span>
                                            </div>
                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                                                </svg>
                                            </div>
                                            </Link>
                                        <Link to="/item" className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="mr-5 self-start">
                                                <img src="https://deothemes.com/envato/xhibiter/html//products/item_24_sm.jpg" alt="item 3" className="rounded-2lg" loading="lazy" />
                                            </figure>
                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Portrait Gallery#029
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500">liked by Trina_more</span>
                                                <span className="block text-xs text-jacarta-300">2 hours 24 minutes ago</span>
                                            </div>
                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                </svg>
                                            </div>
                                            </Link>
                                    </div>
                                    {/* Filters */}
                                    <aside className="basis-4/12 lg:pl-5">
                                        <form action="search" className="relative mb-12 block">
                                            <input type="search" className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                                            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                                </svg>
                                            </span>
                                        </form>
                                        <h3 className="mb-4 font-display font-semibold text-jacarta-500 dark:text-white">Filters</h3>
                                        <div className="flex flex-wrap">
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-2 h-4 w-4 group-hover:fill-white dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Listing</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-2 h-4 w-4 group-hover:fill-white dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Bids</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-2 h-4 w-4 group-hover:fill-white dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Transfer</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-2 h-4 w-4 group-hover:fill-white dark:fill-white">
                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Likes</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-2 h-4 w-4 group-hover:fill-white dark:fill-white">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Purchases</span>
                                            </button>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            {/* end activity tab */}
                        </div>
                    </div>
                </section>
                {/* end collection */}
            </main>
            {/* Wallet Modal */}
            <div className="modal fade" id="walletModal" tabIndex={-1} aria-labelledby="walletModalLabel" aria-hidden="true">
                <div className="modal-dialog max-w-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="walletModalLabel">Connect your wallet</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-6 w-6 fill-jacarta-700 dark:fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </div>
                        {/* Body */}
                        <div className="modal-body p-6 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 318.6 318.6" xmlSpace="preserve" className="mb-4 inline-block h-8 w-8">
                                <style dangerouslySetInnerHTML={{ __html: "\n                .st1,\n                .st6 {\n                  fill: #e4761b;\n                  stroke: #e4761b;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                }\n                .st6 {\n                  fill: #f6851b;\n                  stroke: #f6851b;\n                }\n              " }} />
                                <path fill="#e2761b" stroke="#e2761b" strokeLinecap="round" strokeLinejoin="round" d="M274.1 35.5l-99.5 73.9L193 65.8z" />
                                <path className="st1" d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z" />
                                <path className="st1" d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zm111.3 0l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z" />
                                <path d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z" fill="#d7c1b3" stroke="#d7c1b3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z" fill="#cd6116" stroke="#cd6116" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z" fill="#e4751f" stroke="#e4751f" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="st6" d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z" />
                                <path fill="#c0ad9e" stroke="#c0ad9e" strokeLinecap="round" strokeLinejoin="round" d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z" />
                                <path fill="#161616" stroke="#161616" strokeLinecap="round" strokeLinejoin="round" d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z" />
                                <path d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z" fill="#763d16" stroke="#763d16" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="st6" d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z" />
                            </svg>
                            <p className="text-center dark:text-white">
                                You don't have MetaMask in your browser, please download it from
                                <a href="https://metamask.io/" className="text-accent" target="_blank" rel="noreferrer noopener">MetaMask</a>
                            </p>
                        </div>
                        {/* end body */}
                        <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                                <a href="https://metamask.io/" target="_blank" rel="noreferrer noopener" className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                    Get Metamask
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Buy Now Modal */}
            <div className="modal fade" id="buyNowModal" tabIndex={-1} aria-labelledby="buyNowModalLabel" aria-hidden="true">
                <div className="modal-dialog max-w-2xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="buyNowModalLabel">Complete checkout</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-6 w-6 fill-jacarta-700 dark:fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </div>
                        {/* Body */}
                        <div className="modal-body p-6">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">Item</span>
                                <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">Subtotal</span>
                            </div>
                            <div className="relative flex items-center border-t border-b border-jacarta-100 py-4 dark:border-jacarta-600">
                                <figure className="mr-5 self-start">
                                    <img src="https://deothemes.com/envato/xhibiter/html/img/avatars/avatar_2.jpg" alt="avatar 2" className="rounded-2lg" loading="lazy" />
                                </figure>
                                <div>
                                    <a href="collection.html" className="text-sm text-accent">Elon Musk #709</a>
                                    <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                        Lazyone Panda
                                    </h3>
                                    <div className="flex flex-wrap items-center">
                                        <span className="mr-1 block text-sm text-jacarta-500 dark:text-jacarta-300">Creator Earnings: 5%</span>
                                        <span data-tippy-content="The creator of this collection will receive 5% of the sale total from future sales of this item.">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-700 dark:fill-jacarta-300">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <span className="mb-1 flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="h-4 w-4">
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium tracking-tight dark:text-jacarta-100">1.55 ETH</span>
                                    </span>
                                    <div className="text-right text-sm dark:text-jacarta-300">$130.82</div>
                                </div>
                            </div>
                            {/* Total */}
                            <div className="mb-2 flex items-center justify-between border-b border-jacarta-100 py-2.5 dark:border-jacarta-600">
                                <span className="font-display font-semibold text-jacarta-700 dark:text-white">Total</span>
                                <div className="ml-auto">
                                    <span className="flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="h-4 w-4">
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                        <span className="font-medium tracking-tight text-green">1.55 ETH</span>
                                    </span>
                                    <div className="text-right dark:text-jacarta-300">$130.82</div>
                                </div>
                            </div>
                            {/* Terms */}
                            <div className="mt-4 flex items-center space-x-2">
                                <input type="checkbox" id="buyNowTerms" className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600" />
                                <label htmlFor="buyNowTerms" className="text-sm dark:text-jacarta-200">By checking this box, I agree to TokenTrove's <a href="#" className="text-accent">Terms of Service</a></label>
                            </div>
                        </div>
                        {/* end body */}
                        <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                                <button type="button" className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                    Confirm Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="page-footer bg-white dark:bg-jacarta-900">
                <div className="container">
                    <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
                        <div className="col-span-full sm:col-span-3 md:col-span-4">
                            {/* Logo */}
                            <Link to="/" className="mb-6 inline-block">
                                <img src="https://deothemes.com/envato/xhibiter/html/img/logo.png" className="max-h-7 dark:hidden" alt="Xhibiter" />
                                <img src="https://deothemes.com/envato/xhibiter/html/img/logo_white.png" className="hidden max-h-7 dark:block" alt="TokenTrove" />
                            </Link>
                            <p className="mb-12 dark:text-jacarta-300">
                                Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
                            </p>
                            {/* Socials */}
                            <div className="flex space-x-5">
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
                            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">Marketplace</h3>
                            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">All NFTs</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">Art</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">Music</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">Domain Names</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">Collectibles</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">Virtual World</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">Company</h3>
                            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                                <li>
                                    <Link to="/collections" className="hover:text-accent dark:hover:text-white">Explore</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-accent dark:hover:text-white">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-accent dark:hover:text-white">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="hover:text-accent dark:hover:text-white">Our Blog</Link >
                                </li>
                                <li>
                                    <Link to="/help-center" className="hover:text-accent dark:hover:text-white">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">My Account</h3>
                            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">Authors</a>
                                </li>
                                <li>
                                    <Link to="/collections" className="hover:text-accent dark:hover:text-white">Collection</Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">Author Profile</a>
                                </li>
                                <li>
                                    <Link to="/create" className="hover:text-accent dark:hover:text-white">Create Item</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
                        <span className="text-sm dark:text-jacarta-400">©
                            TokenTrove
                        </span>
                        <ul className="flex flex-wrap space-x-4 text-sm dark:text-jacarta-400">
                            <li>
                                <Link to="/terms" className="hover:text-accent">Terms and conditions</Link>
                            </li>
                            <li><a href="#" className="hover:text-accent">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* JS Scripts */}
        </div>
    )
}

export default User;