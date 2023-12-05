import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import StatisticCard from "../components/Cards/StatisticCard";
import FeaturedCard from "../components/Cards/FeaturedCard";
import SummaryCard from "../components/Cards/SummaryCard";
import SubscribeNow from "../components/SubscribeNow";
import Currencies from "../components/Currencies";
import { Crud } from "../libraries/Crud";
import useSettings from "../hooks/useSettings";

export default function Home(props) {
  const { themeMode } = useSettings();

  return (
    <>
      <section className="SummaryCardWrap">
        <StatisticCard />
      </section>

      <Container className="my-5 py-5">
        <FeaturedCard />
      </Container>

      <Container>
        <SummaryCard />
      </Container>

      <Container className="mt-5 pt-5">
        <Currencies currencies={props.currencies} total={props.total} />
      </Container>

      <Container>
        <SubscribeNow />
      </Container>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const pageNo = query.page || 1;
  const limit = query.limit || 25;
  const {data: {total, data: currencies }} = await Crud.make().currency(`/get?page=${pageNo}&limit=${limit}`).get()
  return {
    props: {total, currencies },
  };
}
