import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import StatisticCard from "../../components/Cards/StatisticCard"
import FeaturedCard from "../../components/Cards/FeaturedCard"
import SummaryCard from "../../components/Cards/SummaryCard"
import SubscribeNow from "../../components/SubscribeNow"
import AffiliateManagementDashboard from "../../components/AffiliateManagementDashboard"
import AdminSidebar from "../../components/AdminSidebar";

export default function Home() {
  return (
    <>
      <AdminSidebar />
      <Container className="mt-5 pt-5">
        <AffiliateManagementDashboard />
      </Container>

      {/* <Container>
        <SubscribeNow />
      </Container> */}

    </>
  )
}