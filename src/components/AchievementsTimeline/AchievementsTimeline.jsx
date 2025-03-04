import React from "react";
import { Card, Timeline } from "antd";

const TimelineCard = ({ title, children }) => {
  return (
    <Card
      title={title}
      styles={{
        header: {
          minHeight: 25,
        },
        title: {
          textAlign: "left",
        },
        body: {
          textAlign: "left",
        },
      }}
    >
      {children}
    </Card>
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
      }}
    >
      <Timeline
        mode="left"
        items={[
          {
            children: (
              <TimelineCard title={"Year 2024"}>
                <ul id="achivements-2024">
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
            children: (
              <TimelineCard title="Year 2023">
                <ul id="achivements-2023">
                  <li>Distrubuted 07 sets of books to 2023 batch</li>
                  <li>Paid Mess bill for 09 students</li>
                  <li>Paid exam fee for 07 students </li>
                </ul>{" "}
              </TimelineCard>
            ),
          },
          {
            children: (
              <TimelineCard title="Year 2022">
                <ul id="achivements-2022">
                  <li>Distrubuted 10 sets of books to 2022 batch</li>
                  <li>Paid Mess bill for 12 students</li>
                  <li>Paid Exam fee for 09 students</li>
                </ul>
              </TimelineCard>
            ),
          },
          {
            children: (
              <TimelineCard title="Year 2021">
                <ul id="achivements-2021">
                  <li>Distrubuted 10 sets of books to 2021 batch</li>
                  <li>Paid Mess bill for 03 students </li>
                  <li>Distribution of planks in Reading rooms</li>
                </ul>{" "}
              </TimelineCard>
            ),
          },
          {
            children: (
              <TimelineCard title={"Year 2020"}>
                <ul id="achivements-2020">
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
