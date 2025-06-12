// pages/_app.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import "keen-slider/keen-slider.min.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
