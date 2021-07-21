import React, { useState } from "react";

export const Pairs = ({ pairs }) => {
  const [menu, openMenu] = useState(false);
  const toggleMenu = () => openMenu(!menu);

  console.log("pairs", pairs);
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo-box">
          <button
            onClick={toggleMenu}
            className={
              menu ? "header__burger-btn active" : "header__burger-btn"
            }
          ></button>
          <a className="header__logo" href="#">
            <img
              className="big-logo"
              src="images/main/logo-black.png"
              alt="logo"
            />
            <img
              className="small-logo"
              src="images/main/small-logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="header__button">
          <button className="header__wallet-btn">Connect wallet</button>
          <button className="header__wallet-btn small">Connect</button>
        </div>
      </header>

      <div className="main__inner">
        <aside className={menu ? "aside active" : "aside"}>
          <div className="aside__top">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <div className="menu__item-wprapper">
                    <img src="images/main/home-black.svg" alt="home" />
                    <a className="menu__list-link" href="#">
                      Home
                    </a>
                  </div>
                </li>
                <li className="menu__list-item trade-item">
                  <div className="menu__item-wprapper">
                    <img src="images/main/trade-black.svg" alt="trade" />
                    <a className="menu__list-link" href="#">
                      Trade
                    </a>
                    <img
                      className="menu__arrow"
                      src="images/main/menu-open-black.svg"
                      alt="trade"
                    />
                  </div>
                </li>
                <li className="menu__drop">
                  <ul className="menu__list-drop">
                    <li className="menu__list-item ">
                      <a className="menu__list-link" href="#">
                        Exchange
                      </a>
                    </li>
                    <li className="menu__list-item">
                      <a className="menu__list-link" href="#">
                        Liquidity
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu__list-item">
                  <div className="menu__item-wprapper">
                    <img src="images/main/token-black.svg" alt="tokens" />
                    <a className="menu__list-link" href="#">
                      Tokens
                    </a>
                  </div>
                </li>
                <li className="menu__list-item">
                  <div className="menu__item-wprapper">
                    <img src="images/main/starking-black.svg" alt="staking" />
                    <a className="menu__list-link" href="#">
                      Staking
                    </a>
                  </div>
                </li>
                <li className="menu__list-item active">
                  <div className="menu__item-wprapper">
                    <img src="images/main/pairs-black.svg" alt="pairs" />
                    <a className="menu__list-link" href="#">
                      Pairs
                    </a>
                  </div>
                </li>
                <li className="menu__list-item">
                  <div className="menu__item-wprapper">
                    <img src="images/main/buysdb-black.svg" alt="buy" />
                    <a className="menu__list-link" href="#">
                      Buy Cardax
                    </a>
                  </div>
                </li>
                <li className="menu__list-item">
                  <div className="menu__item-wprapper">
                    <img
                      src="images/main/governance-black.svg"
                      alt="governance"
                    />
                    <a className="menu__list-link" href="#">
                      Governance
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="aside__bottom">
            <div className="bottom-price">$15.78</div>

            <div className="bottom-wrapper">
              <div className="bottom-theme">
                <button className="theme-btn theme-ligth">
                  <img src="images/main/light-black.svg" alt="" />
                </button>

                <button className="theme-btn theme-dark">
                  <img src="images/main/dark-black.svg" alt="" />
                </button>
              </div>
              <div className="bottom-social">
                <a className="bottom-social__link" href="#">
                  <img
                    className="bottom-social__twiter"
                    src="images/main/twitter-black.svg"
                    alt=""
                  />
                </a>
                <a className="bottom-social__link" href="#">
                  <img
                    className="bottom-social__telegram"
                    src="images/main/telegram-black.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </aside>

        <div className="main pair">
          <div className="pair__top">
            <h3 className="pair__top-title title">
              Pairs
              <span className="pair__top-number">45</span>
            </h3>

            <form className="pair__top-form">
              <div className="pair__top-search search">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search Token"
                />
                <button className="search__btn"></button>
              </div>
            </form>
          </div>

          <div className="pair__table">
            <ul className="pair__list head-list">
              <li className="pair__list-item">Name</li>
              <li className="pair__list-item">
                Liquidity
                <span className="item-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12.6667L8 3.33335"
                      stroke="#1444F0"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33268 8L7.99935 3.33333L12.666 8"
                      stroke="#1444F0"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li className="pair__list-item">Volume (24hrs)</li>
              <li className="pair__list-item">Volume (7d)</li>
              <li className="pair__list-item">Fees (24hrs)</li>
              <li className="pair__list-item">
                1y Fees / Liquidity
                <span className="item-question">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00065 14.6666C11.6825 14.6666 14.6673 11.6819 14.6673 7.99998C14.6673 4.31808 11.6825 1.33331 8.00065 1.33331C4.31875 1.33331 1.33398 4.31808 1.33398 7.99998C1.33398 11.6819 4.31875 14.6666 8.00065 14.6666Z"
                      stroke="#1444F0"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 11.3333H8.00667"
                      stroke="#1444F0"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.06055 5.99995C6.21728 5.5544 6.52665 5.17869 6.93385 4.93937C7.34105 4.70006 7.81981 4.61258 8.28533 4.69243C8.75085 4.77228 9.17309 5.0143 9.47726 5.37564C9.78144 5.73697 9.94792 6.1943 9.94721 6.66662C9.94721 7.99995 7.94721 8.66662 7.94721 8.66662"
                      stroke="#1444F0"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>
            </ul>

            <div className="pair__box">
              {pairs &&
                pairs.map((pair) => {
                  return (
                    <ul className="pair__list">
                      <li className="pair__list-item">
                        <img
                          className="item-img-1"
                          src="images/pairs/item-11.png"
                          alt=""
                        />
                        <img
                          className="item-img-2"
                          src="images/pairs/item-12.png"
                          alt=""
                        />
                        <span className="item-text">
                          {pair.asset_from}
                          {pair.asset_to}
                        </span>
                      </li>
                      <li className="pair__list-item">{pair.liquidity}</li>
                      <li className="pair__list-item">{pair.volume_24h}</li>
                      <li className="pair__list-item">{pair.volume_7d}</li>
                      <li className="pair__list-item">{pair.fees_24h}</li>
                      <li className="pair__list-item">{pair.fees_1y}</li>
                    </ul>
                  );
                })}

              {/* <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-21.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">ALPA-ANKR</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$540,385,226</li>
                <li className="pair__list-item">$126.90</li>
                <li className="pair__list-item">+63.51%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-31.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">APYS-ANKR</span>
                </li>
                <li className="pair__list-item">$21,459,470,707</li>
                <li className="pair__list-item">$262,394,579</li>
                <li className="pair__list-item">$219,696,273</li>
                <li className="pair__list-item">$10.91</li>
                <li className="pair__list-item">+9.62%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-41.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-42.png"
                    alt=""
                  />
                  <span className="item-text">ATM-ATOM</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$248 129</li>
                <li className="pair__list-item">$159 397</li>
                <li className="pair__list-item">$1.00</li>
                <li className="pair__list-item">+16.56%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-11.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-12.png"
                    alt=""
                  />
                  <span className="item-text">BNB-SDB</span>
                </li>
                <li className="pair__list-item">$2,459,470,707</li>
                <li className="pair__list-item">$2,459,470,707</li>
                <li className="pair__list-item">$1,540,385,226</li>
                <li className="pair__list-item">$264.90</li>
                <li className="pair__list-item">+2.63%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-21.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">ALPA-ANKR</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$540,385,226</li>
                <li className="pair__list-item">$126.90</li>
                <li className="pair__list-item">+63.51%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-31.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">APYS-ANKR</span>
                </li>
                <li className="pair__list-item">$21,459,470,707</li>
                <li className="pair__list-item">$262,394,579</li>
                <li className="pair__list-item">$219,696,273</li>
                <li className="pair__list-item">$10.91</li>
                <li className="pair__list-item">+9.62%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-41.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-42.png"
                    alt=""
                  />
                  <span className="item-text">ATM-ATOM</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$248 129</li>
                <li className="pair__list-item">$159 397</li>
                <li className="pair__list-item">$1.00</li>
                <li className="pair__list-item">+16.56%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-11.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-12.png"
                    alt=""
                  />
                  <span className="item-text">BNB-SDB</span>
                </li>
                <li className="pair__list-item">$2,459,470,707</li>
                <li className="pair__list-item">$2,459,470,707</li>
                <li className="pair__list-item">$1,540,385,226</li>
                <li className="pair__list-item">$264.90</li>
                <li className="pair__list-item">+2.63%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-21.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">ALPA-ANKR</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$540,385,226</li>
                <li className="pair__list-item">$126.90</li>
                <li className="pair__list-item">+63.51%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-31.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">APYS-ANKR</span>
                </li>
                <li className="pair__list-item">$21,459,470,707</li>
                <li className="pair__list-item">$262,394,579</li>
                <li className="pair__list-item">$219,696,273</li>
                <li className="pair__list-item">$10.91</li>
                <li className="pair__list-item">+9.62%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-41.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-42.png"
                    alt=""
                  />
                  <span className="item-text">ATM-ATOM</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$248 129</li>
                <li className="pair__list-item">$159 397</li>
                <li className="pair__list-item">$1.00</li>
                <li className="pair__list-item">+16.56%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-11.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-12.png"
                    alt=""
                  />
                  <span className="item-text">BNB-SDB</span>
                </li>
                <li className="pair__list-item">$2,459,470,707</li>
                <li className="pair__list-item">$2,459,470,707</li>
                <li className="pair__list-item">$1,540,385,226</li>
                <li className="pair__list-item">$264.90</li>
                <li className="pair__list-item">+2.63%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-21.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">ALPA-ANKR</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$540,385,226</li>
                <li className="pair__list-item">$126.90</li>
                <li className="pair__list-item">+63.51%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-31.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">APYS-ANKR</span>
                </li>
                <li className="pair__list-item">$21,459,470,707</li>
                <li className="pair__list-item">$262,394,579</li>
                <li className="pair__list-item">$219,696,273</li>
                <li className="pair__list-item">$10.91</li>
                <li className="pair__list-item">+9.62%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-41.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-42.png"
                    alt=""
                  />
                  <span className="item-text">ATM-ATOM</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$248 129</li>
                <li className="pair__list-item">$159 397</li>
                <li className="pair__list-item">$1.00</li>
                <li className="pair__list-item">+16.56%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-31.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-22.png"
                    alt=""
                  />
                  <span className="item-text">APYS-ANKR</span>
                </li>
                <li className="pair__list-item">$21,459,470,707</li>
                <li className="pair__list-item">$262,394,579</li>
                <li className="pair__list-item">$219,696,273</li>
                <li className="pair__list-item">$10.91</li>
                <li className="pair__list-item">+9.62%</li>
              </ul>
              <ul className="pair__list">
                <li className="pair__list-item">
                  <img
                    className="item-img-1"
                    src="images/pairs/item-41.png"
                    alt=""
                  />
                  <img
                    className="item-img-2"
                    src="images/pairs/item-42.png"
                    alt=""
                  />
                  <span className="item-text">ATM-ATOM</span>
                </li>
                <li className="pair__list-item">$1,459,470,707</li>
                <li className="pair__list-item">$248 129</li>
                <li className="pair__list-item">$159 397</li>
                <li className="pair__list-item">$1.00</li>
                <li className="pair__list-item">+16.56%</li>
              </ul> */}
              <div className="pagination">
                <a className="pagination__prev" href="#"></a>
                <ul className="pagination__list">
                  <li className="pagination__item active">
                    <a className="pagination__link" href="#">
                      1
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      2
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      3
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      4
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      5
                    </a>
                  </li>
                </ul>
                <a className="pagination__next" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
