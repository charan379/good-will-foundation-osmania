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
                  <li>
                    Distributed <b>17</b> sets of books to the MBBS <b>2024</b>{" "}
                    Batch.
                  </li>
                  <li>
                    Paying Mess bill for <b>14</b> students.
                  </li>
                  <li>
                    Distributed <b>06 & half</b> Bone sets.
                  </li>
                  <li>
                    Good Will Foundation (GWF) – Osmania Medical College played
                    a pivotal role in expanding GWF into a statewide initiative
                    across Telangana.
                  </li>
                  <li>
                    We have successfully distributed 1st-year MBBS book sets to
                    the needy students across various medical colleges in
                    Telangana for the <b>MBBS 2024</b> batch.
                    <ol>
                      <li>
                        {" "}
                        Kakatiya Medical College - <b>06</b> sets.
                      </li>
                      <li>
                        {" "}
                        GMC karimnagar - <b>06</b> sets.{" "}
                      </li>
                      <li>
                        {" "}
                        GMC siddipet - <b>05</b> sets.
                      </li>
                      <li>
                        {" "}
                        GMC jagityal - <b>05</b> sets.
                      </li>
                      <li>
                        SIMS Ramagundam - <b>05</b> sets.
                      </li>
                      <li>
                        GMC Nagarkurnool - <b>05</b> sets.
                      </li>
                      <li>
                        GMC Kamareddy - <b>03</b> sets.
                      </li>
                      <li>
                        GMC Mancherial - <b>01</b> set.
                      </li>
                      <li>
                        Surabhi Institute of Medical Sciences - <b>01</b> set.
                      </li>
                      <li>
                        Dr.Patnam Mahender Reddy institute of Medical Sciences -
                        <b>01</b> set.{" "}
                      </li>
                    </ol>
                  </li>
                  <li>
                    {" "}
                    Good will foundation OMC served as an inspiration to many
                    other medical colleges.
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
                  <li>
                    Distributed <b>07</b> sets of books to the MBBS <b>2023</b>{" "}
                    Batch.
                  </li>
                  <li>
                    Paid Mess bill for <b>09</b> students.
                  </li>
                  <li>
                    Paid exam fee for <b>07</b> students.
                  </li>
                  <li>
                    Distributed <b>06</b> Bone Sets.
                  </li>
                </ul>{" "}
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title="Year 2022" id="achivements-2022">
                <ul>
                  <li>
                    Distributed <b>10</b> sets of books to the MBBS <b>2022</b>{" "}
                    Batch.
                  </li>
                  <li>
                    Paid Mess bill for <b>12</b> students.
                  </li>
                  <li>
                    Paid Exam fee for <b>09</b> students.
                  </li>
                  <li>
                    Distributed <b>05</b> Bone Sets.
                  </li>
                </ul>
              </TimelineCard>
            ),
          },
          {
            dot: <CarryOutOutlined style={{ fontSize: "28px" }} />,
            children: (
              <TimelineCard title="Year 2021" id="achivements-2021">
                <ul>
                  <li>
                    Distributed <b>10</b> sets of books to the MBBS <b>2021</b>{" "}
                    Batch.
                  </li>
                  <li>
                    Paid Mess bill for <b>03</b> students.
                  </li>
                  <li>
                    Distributed <b>04</b> Bone Sets.{" "}
                  </li>
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
                  <li>
                    Distributed <b>10</b> sets of books to the MBBS <b>2020</b>{" "}
                    Batch
                  </li>
                  <li>
                    Paid Mess fees for <b>06</b> Students.
                  </li>
                  <li>
                    Distributed <b>04</b> Bone sets.
                  </li>
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
