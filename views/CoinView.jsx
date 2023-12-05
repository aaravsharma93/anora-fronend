import React from "react";
import CoinHeader from "../components/Coins/CoinHeader";
import CoinPageTabs from "../components/Coins/CoinPageTabs";
import { Container, Card } from "@mui/material";
const CoinView = () => {
  return (
    <Container maxWidth="xl">
      <Card className="px-5 py-4" sx={{ mt: 2, bgcolor: 'background.default' }}>
        <CoinHeader />
        <CoinPageTabs />
      </Card>
    </Container>
  );
};

export default CoinView;
