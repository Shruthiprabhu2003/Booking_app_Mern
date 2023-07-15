import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../../components/header/Header"
import { MailList } from "../../components/mailList/MailList"
import { Footer } from "../../components/footer/Footer"
import { Navbar } from "../../components/navbar/Navbar"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }
    else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  }

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/45241900.jpg?k=2b8d40d437558704537ec8e695052c7521136c516d0438614f35a7fa0a1034ab&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428083612.jpg?k=3e5aa40ba59a1dc9c1637fb7898e74adfb89bd28c98700349dd8d53a3509e9bf&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/175742239.jpg?k=12c56d4fd5cb0e57f78cbee81ec9c6733902633c292a1334e6c36df7c28f88d7&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/175742221.jpg?k=6cf25318219b68a80ecdd03e86f44ca490cd57aac649c2439611d4b8f5dd01b0&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428082895.jpg?k=4f3e3bbe98af2845a9ebb767c54b0e7e23a0eeedfce8f20ad9041582e274dd3b&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/175742182.jpg?k=6849b7c14dd968254b4330c9bdf75373619952c421bd4e3e518b924ab119fc79&o=&hp=1"
    },
  ];
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹ 48,694 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImageWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                This Austin's Hotel is located in the Marais district of central Paris, 500 metres from Place de la Republique and 600 metres from the Pompidou Centre. The hotel has a 24-hour reception which provides computers with free internet access for all guests.

                All rooms at Austin's Arts Et Metiers Hotel offer soundproofing and air-conditioning, a flat-screen TV with satellite channels and free WiFi.

                The hotel serves a continental breakfast which guests can enjoy in the breakfast room or in the comfort of their room. A courtesy tray with tea, coffee and milk is available in the rooms.

                Austin's Arts Et Metiers Hotel is 30 metres from Arts & Metiers Metro Station. From here guests can access Hôtel de Ville and Opéra Metro Stations in 10 minutes.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>₹ 48,694</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  )
}
