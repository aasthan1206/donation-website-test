import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import cx from "classnames";
import { ImArrowDownRight } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FaMailBulk, FaMapMarkedAlt } from "react-icons/fa";

const Organizations = () => {
  const orgTags = [
    {
      id: 1,
      title: "#HelpingHandsForOrphans",
    },
    {
      id: 2,
      title: "#CareForElders",
    },
    {
      id: 3,
      title: "#SupportSeniorCitizens",
    },
    {
      id: 4,
      title: "#HomeForAll",
    },
    {
      id: 5,
      title: "#SupportHomeless",
    },
    {
      id: 6,
      title: "#BookForEveryHand",
    },
    {
      id: 7,
      title: "#SupportReadingCulture",
    },
    {
      id: 8,
      title: "#EducationForAll",
    },
    {
      id: 9,
      title: "#SupportPublicSchools",
    },
    {
      id: 10,
      title: "#PassTheKnowledge",
    },
    {
      id: 11,
      title: "#BooksForBrightMinds",
    },
    {
      id: 12,
      title: "#WarmthForAll",
    },
    {
      id: 13,
      title: "#ClothesThatMatter",
    },
    {
      id: 14,
      title: "#ToysForSmiles",
    },
  ];
  const [organizations, setOrganizations] = useState([]);
  const [orgId, setOrgId] = useState(0);
  const [tagName, setTagName] = useState("");
  const [tagId, setTagId] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const getOrganizations = async () => {
    try {
      const response = await fetch("http://localhost:5000/organizations");
      const jsonData = await response.json();

      setOrganizations(jsonData);

      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const searchResult = (orgData) => {
    let isTrue = false;
    const { tags } = orgData;
    tags.map((tag) => {
      if (tag === tagName) {
        isTrue = true;
      }
    });
    return isTrue;
  };
  useEffect(() => {
    getOrganizations();
    !!tagName
      ? setFilteredData(organizations.filter(searchResult))
      : setFilteredData(organizations);
  }, [tagName, organizations]);
  return (
    <Layout>
      <div>
        <div className="bg-organizations h-[80vh] bg-cover flex flex-col justify-center gap-8">
          <div className="self-center text-8xl text-center font-main font-bold text-primary opacity-80">
            Organizations
          </div>
          <div className="text-3xl text-white font-secondary self-center font-semibold opacity-80">
            We Support
          </div>
        </div>
        <div className="bg-secondary py-12 px-4">
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            {orgTags.map((item) => (
              <div
                key={item.id}
                className={cx(
                  "bg-white px-4 py-2 text-secondary text-lg font-semibold font-secondary rounded-3xl cursor-pointer",
                  { "!text-primary": tagId === item.id }
                )}
                onClick={() => {
                  setTagName(item.title);
                  setTagId(item.id);
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div
            className="bg-white mt-4 text-center mx-auto w-24 text-secondary rounded-3xl font-main py-2 text-lg cursor-pointer font-semibold flex justify-center gap-2"
            onClick={() => {
              setTagName("");
              setTagId(0);
            }}
          >
            Clear <ImCross className="text-red-500 self-center" />
          </div>
        </div>
        {filteredData.length !== 0 ? (
          <div className="mx-16 my-16 border-white">
            {filteredData.map((item) => (
              <div
                onMouseEnter={() => setOrgId(item.org_id)}
                onMouseLeave={() => setOrgId(0)}
                key={item.org_id}
                className="cursor-pointer"
              >
                <div className="flex shadow-2xl shadow-gray-400 my-8 relative">
                  <div className="">
                    <Image
                      src={item.logo}
                      width={250}
                      height={250}
                      alt={"organization image"}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-3xl font-main font-semibold">
                      {item.name}
                    </div>
                    <div className="py-2 text-xl font-secondary">
                      {item.description}
                    </div>
                    <Link href={"/registrationForm"}>
                      <div className="">
                        <button className="bg-primary text-white font-semibold font-secondary py-2 px-4 hover:bg-secondary mt-2 rounded-full">
                          <div className="flex gap-2">
                            Donate Now{" "}
                            <AiFillHeart className="self-center h-5 w-5" />
                          </div>
                        </button>
                      </div>
                    </Link>
                  </div>
                  {/* <div
                  onClick={() => setOrgId(item.org_id)}
                  className="absolute bottom-5 right-10 bg-secondary p-2 rounded-xl bg-opacity-50 cursor-pointer text-white hover:bg-opacity-100"
                >
                  <ImArrowDownRight className="h-12 w-12" />
                </div> */}
                </div>

                {/* On Hover Cards */}
                <AnimatePresence initial={false}>
                  <motion.div
                    initial={{ h: 0 }}
                    animate={{ h: "auto" }}
                    // exit={{  y: 200, opacity:0, scale:0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className={cx(
                      "hidden border-background rounded-xl border-2 py-4",
                      {
                        "!block": orgId === item.org_id,
                      }
                    )}
                  >
                    <Tabs
                      height={500}
                      align="center"
                      size={"lg"}
                      colorScheme="orange"
                      variant={"soft-rounded"}
                    >
                      <TabList>
                        <Tab>Description</Tab>
                        <Tab>Causes</Tab>
                        <Tab>Info</Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel>
                          <div className="flex p-4 gap-8">
                            <Image
                              src={item.images}
                              width={500}
                              height={500}
                              alt={"logo"}
                            />
                            <div className="self-center text-justify font-secondary font-medium text-lg">
                              {item.detail}
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="text-xl font-secondary font-medium">
                            <ul className="">
                              {item?.causes?.map((cause, index) => (
                                <li key={index} className="mb-2 bg-orange-100 text-black w-1/2 mx-auto px-4 py-2 text-center">
                                  {cause}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-6 justify-center mt-6">
                              {item?.tags?.map((tag, index) => (
                                <div
                                  key={index}
                                  className="bg-secondary rounded-3xl px-4 py-2 text-white font-secondary font-medium text-xl"
                                >
                                  {tag}
                                </div>
                              ))}
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="text-center pb-4">
                            <div className="flex justify-center">
                              <FaMapMarkedAlt className="text-primary h-24 w-24" />
                            </div>
                            <div className="my-4 text-xl font-main font-semibold text-secondary">
                              {item.location}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center">
                              <FaMailBulk className="text-primary h-24 w-24" />
                            </div>
                            <div className="my-4 text-xl font-main font-semibold text-secondary">
                              {item.email}
                            </div>
                          </div>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-5xl my-16 font-main font-semibold">No data found</div>
        )}
      </div>
    </Layout>
  );
};

export default Organizations;
