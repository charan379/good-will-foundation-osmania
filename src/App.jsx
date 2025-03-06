import "./App.css";
import { ConfigProvider, Layout } from "antd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import AchievementsTimeline from "./components/AchievementsTimeline";
import AboutSection from "./components/AboutSection";
import ImageGallery from "./components/ImageGallery";
import ContactInfo from "./components/ContactInfo";
import ForDonation from "./components/ForDonation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import BeneficiariesChart from "./components/BeneficiariesChart";
import NavMobileDrawer from "./components/NavMobileDrawer";
import NavMobileDrawerProvider from "./context/NavMobileDrawerProvider";
import Supporters from "./components/Supporters/Supporters";

const sections = [
  <HeroContent />,
  <AboutSection />,
  <Supporters />,
  <ImageGallery />,
  <AchievementsTimeline />,
  <ContactInfo />,
  <ForDonation />
];

function App() {
  return (
    <ErrorBoundary>
      <NavMobileDrawerProvider>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                headerBg: "#ffffff",
              },
            },
          }}
        >
          <Layout style={{ minHeight: "100vh" }}>
            <Layout
              style={{
                minHeight: "100%",
                minWidth: "100%",
              }}
            >
              <Header />
              <Layout.Content
                style={{
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  maxWidth: "100%",
                }}
              >
                {sections.map((section) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }} // Start invisible and move up
                      whileInView={{ opacity: 1, y: 0 }} // Fade in when visible
                      viewport={{ once: false, amount: 0.05 }} // Trigger when 5% is visible
                      transition={{ duration: 0.8 }}
                    >
                      {section}
                    </motion.div>
                  );
                })}
              </Layout.Content>
              <Footer />
            </Layout>
            <NavMobileDrawer />
          </Layout>
        </ConfigProvider>
      </NavMobileDrawerProvider>
    </ErrorBoundary>
  );
}

export default App;
