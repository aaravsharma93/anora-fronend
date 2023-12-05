import * as React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { Card } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useSettings from '../../hooks/useSettings'
export default function ArticleCard() {
  const classes = useStyles();
  const {themeMode} = useSettings();
  return (
    <Card
      sx={{ maxWidth: 300, bgcolor: "background.default" }}
      style={{
        borderRadius: 30,
        width: "100%",
        maxHeight: "2705px",
        background:themeMode==='dark'?'#000':'#fff'
      }}
    >
      <CardContent sx={{ bgcolor: "background.default" }} className={themeMode==='dark'?classes.lightcolor:classes.lightcolor}>
        <Typography style={{ color: "#989797" }}>
          Published November 5, 2021 .5 min to read by{" "}
          <a href="/" style={{ curser: "pointer", color: "blue" }}>
            Dave Johnson
          </a>
        </Typography>
        <arguments style={styles.headerText}>
          Green means go: 5 spectacular altcoin rallies with one thing in common
        </arguments>
        <Typography style={{color:themeMode==='dark'?'#fff !important':'#000 !important'}}>
          {`Serendipity is "a fortunate discovery or event when things come
          together just perfectly." You can't plan for it... or can you?`}
        </Typography>
        <Image alt="pic" width="1200%" height="582px" className='py-3' src={"/BTC.png"} />
        <Typography paragraph>
          In crypto trading we often see entire sectors move in tandem. DeFi
          coins may all curve upwards together, while metaverse tokens soared on
          news that Facebook’s getting a Facelift.
        </Typography>
      </CardContent>

      <CardContent  className={themeMode==='dark'?classes.lightcolor:classes.lightcolor}>
        <Typography paragraph>
          But this week’s group of top crypto performers have very little in
          common... except one trading indicator that lit up in pulsating green
          neon letters before their prices trended upward.
        </Typography>
        <Typography paragraph>We’re looking today at:</Typography>
        <ul>
          <li>
            {" "}
            <Typography paragraph>
              Polygon (MATIC) — a layer-2 scaling solution for Ethereum
            </Typography>
          </li>
          <li>
            {" "}
            <Typography paragraph>
              Aave (imaginatively, AAVE) — a decentralized finance (DeFi) asset
            </Typography>
          </li>
          <li>
            {" "}
            <Typography paragraph>
              Voyager (VGX) — a crypto trading platform
            </Typography>
          </li>
          <li>
            {" "}
            <Typography paragraph>
              Koinos (KOIN) — a feeless foundational blockchain built for
              scalability
            </Typography>
          </li>
          <li>
            {" "}
            <Typography paragraph>
              Linear (LINA) — a cross-chain asset protocol
            </Typography>
          </li>
        </ul>

        <Typography paragraph>
          All have delivered major gains over the last month, and despite their
          differences they have one thing in common.
        </Typography>
        <Typography paragraph>
          Each one achieved a VORTECS™ Score in excess of 90 before reaching
          their peak price levels.
        </Typography>

        <Typography paragraph>
          In fact, all these tokens exhibited patterns of trading and social
          behavior that were strikingly similar to conditions in the past that
          preceded rallies. And once these tremendously robust trading
          conditions were detected, most of these cryptos entered virtuous
          cycles wherein their price dynamics generated increased trading and
          tweet volumes, which, in turn, powered the next phase of a rally.
        </Typography>

        <Typography paragraph>
          Was there a chance for traders to hop on these moon-bound shuttles
          early?
        </Typography>
        <Typography paragraph>A sign of extreme confidence</Typography>
        <Typography paragraph>
          The indicator that screamed of the extremely bullish conditions is
          called the VORTECS™ Score, a tool available via Cointelegraph’s
          subscription-based data intelligence platform, Markets Pro.
        </Typography>
        <Typography paragraph>
          Its job is to compare the current trading and sentiment conditions to
          historically-similar situations, and to alert traders when bullish
          patterns are detected. Live testing of the VORTECS algorithm has been
          ongoing for over ten months.
        </Typography>
        <Typography paragraph>
          A VORTECS™ Score above 80 is considered confidently bullish. On
          average, there are from 30 to 50 weekly instances of assets crossing
          the 80-score threshold.
        </Typography>
        <Typography paragraph>
          Scores of 90 or above, however, are rare. In an average week, there
          are usually no more than 4-5 instances of such scores, and sometimes a
          full week can pass without a single 90.
        </Typography>
        <Typography paragraph>
          These ultra-high scores signify the algorithm’s strong confidence that
          the observed conditions are similar to those that preceded an asset’s
          stellar price performance in the past. As previously reported, scores
          above 90 sometimes precede price appreciation that can last for
          several days.
        </Typography>
        <Typography paragraph>
          Here is how it worked with some of the highest-VORTECS™ assets this
          past month.
        </Typography>
        <Typography paragraph>KOIN: +100% after peak score</Typography>
        <Typography paragraph>
          KOIN, an asset whose first VORTECS™ Score had been calculated on Nov.
          5, was off to a formidable start right out of the gate. The asset’s
          score touched the 90 mark several hours after its debut at the price
          of 22 cents.
        </Typography>
        <Typography paragraph>
          Within a day, it reached a high of $0.44, a 100% increase. The pump
          was accompanied by additional 432% of trading volume and 221% of the
          usual level of tweets.
        </Typography>
        <Typography>
          VGX: +3.7% after peak score
        </Typography>
        <Image alt="graph" width="1200%" height="406px" src="/graph 1.png" className='py-3' />
        <Typography>
          VORTECS™ Score (green) vs. VGX price, Oct. 5 – Nov. 5. Source:
          Fundamental Secrets
        </Typography>
        <Typography paragraph >
          The asset’s price continued to hover above $3 for the next four days,
          powered by a 42.89% increase in trading volume and a 10.19% more
          intense Twitter conversation in the aftermath of the historically
          bullish outlook. VGX’s momentum has somewhat faded in early November,
          yet the robust fundamentals could point to an impending resurgence.
        </Typography>
        <Typography paragraph >
          We may conclude from previous analysis that looking at tokens that hit
          the VORTECS™ Score of 80 proved to be an efficient strategy for
          traders seeking to identify a range of assets with a good chance of
          performing well within the next few days.
        </Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  headerText: {
    fontFamily: "Poppins",
    fontSize: 36,
    fontWeight: 700,
    textAlign: "left",
  },
};
const useStyles = makeStyles((theme) => ({
  box:{
    paddingLeft: 21,
    paddingRight: 20,
    paddingTop: 40,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 40
    }
  },
  lightcolor:{
    color:'#fff !important',
  },
  darkcolor:{
    color:'#000 !important'
  }

}))
