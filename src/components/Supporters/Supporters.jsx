import React from "react";
import { Card, List, Typography } from "antd";

const { Paragraph } = Typography;

const supportersData = [
  "Dr. P. Shashikala Reddy Ma'am\nMBBS, MD (Microbiology), Former Principal, Osmania Medical College - provided moral support and encouragement to strengthen the foundation's success.",

  "Dr. A. Narendra Kumar Sir\nMBBS, M.S(Gen.Surg), MCH (Ped.Surg),\nDirector of Medical Education (DME)",

  "Dr. R. Nagarjuna Chary Sir\nMBBS, MD (Pathology) - Principal of Osmania Medical College",

  "Our Vice Principals",

  "Department of Anatomy",

  "Dr. G. Kiranmayi Ma'am\nMBBS, MD (Social and Preventive Medicine)",

  "Dr. N. Jaya Ma'am\nMBBS, MD (Biochemistry),\nFormer Vice Principal, Osmania Medical College",

  "Department of Pharmacology",

  "We have also received support from Professors, Assistant Professors, Associate Professors, and Postgraduate students from all the departments of Osmania Medical College",

  "Dr. Surya Teja Chaturvedula Sir\nInterventional Cardiology Physician",

  "KAPIL CHIT FUNDS",

  "UNIVERSAL BOOK SHOWROOM",

  "TG JUDA",

  "OMC JUDA",

  "HRDA",

  "TGMC",

  "MBBS 2012 BATCH",

  "MBBS 2015 BATCH",

  "Dr. D.Narasimha swamy - MDS, Periodontics",

  "CBS Publications",

  "DR. BHATIA Medical Coaching Institute (DBMCI)",

  "Students of Osmania Medical College",
];

const Supporters = () => {
  return (
    <Card
      variant="borderless"
      title={<span id="our-supporters">Our Supporters</span>}
      styles={{
        body: {
          textAlign: "left",
        },
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
      <List
        size="large"
        dataSource={supportersData}
        renderItem={(item) => <List.Item>🔹 {item}</List.Item>}
      />
      <Paragraph>
        Without their support our organisation wouldn't be the same as it is
        today.
        <br />
        Thank you for all the support ! 🙏
      </Paragraph>
    </Card>
  );
};

export default Supporters;
