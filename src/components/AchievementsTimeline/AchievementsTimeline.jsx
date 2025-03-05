import React from "react";
import { Card, Timeline } from "antd";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CarryOutOutlined } from "@ant-design/icons";

const TimelineCard = ({ title, id, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and move up
      whileInView={{ opacity: 1, y: 0 }} // Fade in when visible
      viewport={{ once: false, amount: 0.1 }} // Trigger when 5% is visible
      transition={{ duration: 0.8 }}
    >
      <Card
        id={id}
        title={title}
        styles={{
          header: {
            minHeight: 25,
            paddingBottom: "10px",
          },
          title: {
            textAlign: "left",
            color: "blueviolet"
          },
          body: {
            textAlign: "left",
          },
        }}
      >
        {children}
      </Card>
    </motion.div>
  );
};
const AchievementsTimeline = () => {
  return (
    <Card
      id="achivements"
      variant="borderless"
      title="Our Achievements"
      styles={{
        title: {
          textAlign: "left",
        },
        header: {
          background:
            "linear-gradient(114deg, rgb(120, 88, 248) 0%, rgb(88, 165, 254) 100%)",
          color: "#fff",
        },
      }}
    >
      <Timeline
        mode="left"
        reverse
        items={[
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title={"Year 2024"} id="achivements-2024">
                <ul>
                  <li>Distrubuted 17 sets of books to 2024 batch.</li>
                  <li>Paying Mess bill for 14 students </li>
                  <li>
                    Good will foundation - Telangana state wide GWF- Osmania
                    medical College Distributed book sets of 1st year MBBS BATCH
                    2024 to the needy students in Various Govt Medical Colleges
                    in Phase-1
                    <ol>
                      <li> Kakatiya - 06 sets </li>
                      <li> GMC karimnagar - 06 sets </li>
                      <li> GMC siddipet - 05 sets</li>
                      <li> GMC jagityal - 05 sets</li>
                      <li>SIMS Ramagundam - 05 sets </li>
                      <li>GMC Nagarkurnool - 05 sets</li>
                      <li>GMC Kamareddy - 03 sets </li>
                      <li>Manchirala medical College - 01 set</li>
                      <li>Surabhi Medical college - 01 set</li>
                      <li>Dr.Patnam Mahender reddy college - 01 set</li>
                    </ol>
                  </li>
                </ul>{" "}
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title="Year 2023" id="achivements-2023">
                <ul>
                  <li>Distrubuted 07 sets of books to 2023 batch</li>
                  <li>Paid Mess bill for 09 students</li>
                  <li>Paid exam fee for 07 students </li>
                </ul>{" "}
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title="Year 2022" id="achivements-2022">
                <ul>
                  <li>Distrubuted 10 sets of books to 2022 batch</li>
                  <li>Paid Mess bill for 12 students</li>
                  <li>Paid Exam fee for 09 students</li>
                </ul>
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title="Year 2021" id="achivements-2021">
                <ul>
                  <li>Distrubuted 10 sets of books to 2021 batch</li>
                  <li>Paid Mess bill for 03 students </li>
                  <li>Distribution of planks in Reading rooms</li>
                </ul>{" "}
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title={"Year 2020"} id="achivements-2020">
                <ul>
                  <li>Distrubuted 10 sets of books to 2020 batch</li>
                </ul>
              </TimelineCard>
            ),
          },
        ]}
      />
    </Card>
  );
};

export default AchievementsTimeline;
