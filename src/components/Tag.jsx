import axios from "axios";
import react, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  // const [gif, setGif] = useState("");

  // const [loading, setLoading] = useState("false");

  const [tag, setTag] = useState('car');

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const output = await axios.get(url);
  //   const imageSource = output.data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  const { gif, loading, fetchData } = useGif(tag);

  // function clickHandler() {
  //   fetchData();
  // }



  return (
    <div className=" w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} GIF</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }

      <input
        className="w-10/12 text-lg bg-white py-2 rounded-lg mb-[3px] text-center font-bold"
        onChange={(event) => { setTag(event.target.value) }}
        value={tag}
      />

      <button className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] font-bold"
        onClick={() => fetchData(tag)}>
        Generate
      </button>

    </div>
  )
}

export default Tag;
