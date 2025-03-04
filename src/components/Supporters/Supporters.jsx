import React from "react";
import { Card, List, Typography } from "antd";

const { Paragraph } = Typography;

const supportersData = [
  "Dr. Shashikala Reddy Mam (Ex-Principal) – Provided moral assistance and encouragement.",
  "Dr. Narendra Kumar Are – MBBS, M.S(Gen.Surg), MCH (Ped.Surg), Director of Medical Education (DME).",
  "Dr. R Nagarjuna Chary – MBBS, MD Pathology (Current Principal).",
  "Our Vice Principals.",
  "Professors and PGs from Osmania Medical College.",
  "TG Medical Council Members.",
  "TG JUDA Members.",
  "Osmania JUDA Members.",
  "Alumni of OMC.",
  "K.Vaman Rao – CEO, Kapil Chit Funds.",
  "Ahmed Sir – Chairman, Universal Book Showroom.",
  "CVS Publishers.",
  "Dr. Bhatia Institute.",
];

const Supporters = () => {
  return (
    <Card variant="borderless" id="our-supporters" styles={{
        body: {
            padding: 0
        }
    }}>
      <List
        size="large"
        dataSource={supportersData}
        renderItem={(item) => <List.Item>🔹 {item}</List.Item>}
      />
      <Paragraph>
        Without their support, our organization wouldn't be the same as it is
        today. Thank you so much for all your support 🙏
      </Paragraph>
    </Card>
  );
};

export default Supporters;
