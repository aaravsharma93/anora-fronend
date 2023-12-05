import React from "react";
import "react-step-progress-bar/styles.css";
import 'react-circular-progressbar/dist/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "../style/style.scss";
import ThemeConfig from "../theme";
import Layout from "../components/Layout";
import { SettingsProvider } from "../contexts/SettingsContext";
import ThemePrimaryColor from "../components/ThemePrimaryColor";
import Axios from "axios";
import { SWRConfig } from "swr";

config.autoAddCss = false

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.anora.io";

const fetcher = async (url) => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SWRConfig value={{ fetcher }}>
        <SettingsProvider>
          <ThemeConfig>
            <ThemePrimaryColor>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemePrimaryColor>
          </ThemeConfig>
        </SettingsProvider>
      </SWRConfig>
    </div>
  );
}

export default MyApp;
