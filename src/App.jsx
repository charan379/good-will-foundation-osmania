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

function App() {
  return (
    <ErrorBoundary>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: "#ffffff",
            },
          },
        }}
      >
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
            <HeroContent />
            <AchievementsTimeline />
            <ImageGallery />
            <AboutSection />
            <ContactInfo />
            <ForDonation />
          </Layout.Content>
          <Footer />
        </Layout>
      </ConfigProvider>
    </ErrorBoundary>
  );
}

export default App;
