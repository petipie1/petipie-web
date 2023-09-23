import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductCard = () => {

  return (
    <Grid className="w-96 m-3 border-2 shadow-lg rounded-xl items-center">
      {/* Image */}
      <div className="bg-black rounded-xl items-center justify-center p-3" >
        <Image src={"https://freepngimg.com/thumb/categories/956.png"} width={120} height={120} alt="somth" />
      </div>

    </Grid>
  );
};

export default ProductCard;