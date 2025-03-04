import { Menu, Typography } from "antd";
import useResponsive from "../../hooks/useResponsive";

const NavLabel = ({ name, isLink, href }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  };
  if (isLink && href) {
    return (
      <>
        <Typography.Link onClick={() => scrollToSection(href)}>
          {name}
        </Typography.Link>
      </>
    );
  } else {
    return name;
  }
};

const NavMenu = () => {
  const { isMobile } = useResponsive();
  return (
    <Menu
      mode={isMobile ? "inline" : "horizontal"}
      theme="light"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          title: "Home",
          label: <NavLabel name={"Home"} isLink={true} href={"home"} />,
        },
        {
          key: "2",
          title: "About us",
          label: <NavLabel name={"About Us"} isLink={true} href={"about-us"} />,
          children: [
            {
              key: "2.1",
              title: "Our Mission",
              label: (
                <NavLabel
                  name={"Our Mission"}
                  isLink={true}
                  href={"our-goals"}
                />
              ),
            },
            {
              key: "2.3",
              title: "Our Goals",
              label: (
                <NavLabel name={"Our Goals"} isLink={true} href={"our-goals"} />
              ),
            },
            {
              key: "2.4",
              title: "How the foundation started",
              label: (
                <NavLabel
                  name={"How the foundation started"}
                  isLink={true}
                  href={"how-the-foundation-started"}
                />
              ),
            },
            {
              key: "2.5",
              title: "Our Supporters",
              label: (
                <NavLabel
                  name={"Our Supporters"}
                  isLink={true}
                  href={"our-supporters"}
                />
              ),
            },
            {
              key: "2.6",
              title: "How we help",
              label: (
                <NavLabel
                  name={"How we help"}
                  isLink={true}
                  href={"how-we-help"}
                />
              ),
            },
            {
              key: "2.7",
              title: "Why We do it",
              label: (
                <NavLabel
                  name={"Why we do it"}
                  isLink={true}
                  href={"why-we-do-it"}
                />
              ),
            },
          ],
        },
        {
          key: "3",
          title: "Achivements",
          label: (
            <NavLabel name={"Achivements"} isLink={true} href={"achivements"} />
          ),
          children: [
            {
              key: "3.1",
              title: "2024",
              label: (
                <NavLabel
                  name={"Year 2024"}
                  isLink={true}
                  href={"achivements-2024"}
                />
              ),
            },
            {
              key: "3.2",
              title: "2023",
              label: (
                <NavLabel
                  name={"Year 2023"}
                  isLink={true}
                  href={"achivements-2023"}
                />
              ),
            },
            {
              key: "3.3",
              title: "2022",
              label: (
                <NavLabel
                  name={"Year 2022"}
                  isLink={true}
                  href={"achivements-2022"}
                />
              ),
            },
            {
              key: "3.4",
              title: "2021",
              label: (
                <NavLabel
                  name={"Year 2021"}
                  isLink={true}
                  href={"achivements-2021"}
                />
              ),
            },
            {
              key: "3.5",
              title: "2020",
              label: (
                <NavLabel
                  name={"Year 2020"}
                  isLink={true}
                  href={"achivements-2020"}
                />
              ),
            },
          ],
        },
        {
          key: "4",
          title: "Gallery",
          label: <NavLabel name={"Gallery"} isLink={true} href={"image-gallery"} />,
        },
        {
          key: "5",
          title: "Contact Us",
          label: (
            <NavLabel name={"Contact Us"} isLink={true} href={"contact-us"} />
          ),
        },
        {
          key: "6",
          title: "For Donations",
          label: (
            <NavLabel name={"For Donations"} isLink={true} href={"donations"} />
          ),
        },
      ]}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

export default NavMenu;
