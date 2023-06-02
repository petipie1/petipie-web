import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ProductCard = () => {

  return (
    <Grid className="w-96 m-3 border-2 shadow-lg rounded-xl items-center">

      {/* Image */}
      <div className="bg-black rounded-xl items-center justify-center p-3" >
        <Image src={'https://freepngimg.com/thumb/categories/956.png'} width={120} height={120} alt="somth" />
      </div>

    </Grid>
    // <div className="w-96 m-3 border-2 shadow-lg rounded-xl items-center ">
    //   {/* Image */}

    //   <div className="bg-black rounded-xl items-center justify-center p-3" >
    //     <img src={'https://freepngimg.com/thumb/categories/956.png'} width={120} height={120} alt="somth" />
    //   </div>

    //   {/* Description */}
    //   <div className="p-2 border-b-2">
    //     <h6>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    //       beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    //       beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
    //     </h6>
    //   </div>

    //   {/* Tech stack used */}
    //   <div className="flex flex-wrap items-center m-2">
    //     <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
    //       #React
    //     </span>
    //     <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
    //       #Redux
    //     </span>
    //     <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
    //       #Javascript
    //     </span>
    //   </div>

    //   {/* Links */}
    //   <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
    //     <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 px-2 m-2">
    //       Go to Project
    //     </button>
    //     <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
    //       Github
    //     </button>
    //   </div>
    // </div>
  );
};

export default ProductCard;