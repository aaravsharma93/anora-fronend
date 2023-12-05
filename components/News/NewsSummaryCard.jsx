import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const NewsSummaryCard = ({ author, title, content, imageURL }) => {
  return (
    <Box display="flex">
      <Image
        alt="Mountains"
        src={imageURL}
        width={100}
        height={100}
        objectFit="cover"
        quality={100}
      />

      <Box
        display="flex"
        flexDirection="column"
        sx={{ mt: 1, ml: 3 }}
        style={{ maxWidth: "215px" }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>{author}</Typography>
          <Typography> Oct 25, 2021</Typography>
        </Box>
        <Typography sx={{ mt: 2 }}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default NewsSummaryCard;
