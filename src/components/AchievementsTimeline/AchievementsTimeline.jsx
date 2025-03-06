import React from "react";
import { Card, Timeline, Typography } from "antd";
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
            color: "blueviolet",
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
      variant="borderless"
      title={<span id="achivements">Our Achievements</span>}
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
                  <li>Distributed 17 sets of books to the MBBS 2024 Batch.</li>
                  <li>Paying Mess bill for 14 students.</li>
                  <li>Distributed 06 & half Bone sets.</li>
                  <li>
                    <Typography.Title level={4} style={{ margin: 0 }}>
                      Good Will Foundation – Telangana is a Statewide Initiative
                    </Typography.Title>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      Good Will Foundation (GWF) – Osmania Medical College .
                    </Typography.Title>
                    <Typography.Text>
                      We have successfully distributed 1st-year MBBS book sets
                      to needy students across various medical colleges in
                      Telangana for the 2024 batch.
                    </Typography.Text>
                    <ol>
                      <li> Kakatiya Medical College - 06 sets.</li>
                      <li> GMC karimnagar - 06 sets. </li>
                      <li> GMC siddipet - 05 sets.</li>
                      <li> GMC jagityal - 05 sets.</li>
                      <li>SIMS Ramagundam - 05 sets.</li>
                      <li>GMC Nagarkurnool - 05 sets.</li>
                      <li>GMC Kamareddy - 03 sets.</li>
                      <li>GMC Mancherial - 01 set.</li>
                      <li>Surabhi Institute of Medical Sciences - 01 set.</li>
                      <li>
                        Dr.Patnam Mahender Reddy institute of Medical Sciences -
                        01 set.{" "}
                      </li>
                    </ol>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      Good will foundation OMC served as an inspiration to many
                      other medical colleges.
                    </Typography.Title>
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
                  <li>Distributed 07 sets of books to the MBBS 2023 Batch.</li>
                  <li>Paid Mess bill for 09 students.</li>
                  <li>Paid exam fee for 07 students.</li>
                  <li>Distributed 06 Bone Sets.</li>
                </ul>{" "}
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title="Year 2022" id="achivements-2022">
                <ul>
                  <li>Distributed 10 sets of books to the MBBS 2022 Batch.</li>
                  <li>Paid Mess bill for 12 students.</li>
                  <li>Paid Exam fee for 09 students.</li>
                  <li>Distributed 05 Bone Sets.</li>
                </ul>
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title="Year 2021" id="achivements-2021">
                <ul>
                  <li>Distrubuted 10 sets of books to 2021 batch.</li>
                  <li>Paid Mess bill for 03 students.</li>
                  <li>Distributed 04 Bone Sets. </li>
                  <li>Distribution of planks in Reading rooms.</li>
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
                  <li>Paid Mess fees for 06 Students.</li>
                  <li>Distributed 04 Bone sets.</li>
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
