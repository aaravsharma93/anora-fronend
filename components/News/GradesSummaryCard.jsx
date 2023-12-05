import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const GradesSummaryCard = ({ title, content, imageURL }) => {
  return (
    <Box display="flex" sx={{ mb: 2 }}>
      <Image
        alt="Mountains"
        src={imageURL}
        width={75}
        height={75}
        objectFit="cover"
        quality={100}
      />
      <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
        <Typography variant="body1">{title.toUpperCase()}</Typography>
        <Typography variant="body2">{content}</Typography>
      </Box>
    </Box>
  );
};

export default GradesSummaryCard;
