import React from "react";
import { Card, List, Typography } from "antd";

const { Paragraph } = Typography;

const supportersData = [
  "Dr. A. Narendra Kumar Sir\nMBBS, M.S(Gen.Surg), MCH (Ped.Surg),\nDirector of Medical Education (DME)",

  "Dr. P. Shashikala Reddy Ma’am (MBBS, MD – Microbiology), Former Principal of Osmania Medical College, played a key role in initiating the foundation and provided invaluable moral support and encouragement to strengthen its success.",

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
        Our organization thrives because of your invaluable support. Thank you
        for being a part of our journey! 🙏
        <br />
        We still seek your continued support to ensure the ongoing success and
        growth of our organisation
      </Paragraph>
    </Card>
  );
};

export default Supporters;
