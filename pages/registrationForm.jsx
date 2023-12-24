import React, { useState } from "react";
import Layout from "@/components/layout";
import {BsCheckCircleFill} from "react-icons/bs"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import cx from "classnames";
import self from "../public/images/self.jpg"
import pickUp from "../public/images/pickUp.png"
import Image from "next/image";

const RegistrationForm = () => {
  const orgData = [
    {
      id: 1,
      name: "Haven of Hope",
    },
    {
      id: 2,
      name: "Pratishtha Govt School",
    },
    {
      id: 3,
      name: "St. Ryald's Library",
    },
    {
      id: 4,
      name: "Wisdom's Oasis Library",
    },
    {
      id: 5,
      name: "Orphdonate",
    },
    {
      id: 6,
      name: "Horizon Academy",
    },
    {
      id: 7,
      name: "Serenity House",
    },
    {
      id: 8,
      name: "Navchetna Old Age Home",
    },
    {
      id: 9,
      name: "Bright Beginnings Orphanage",
    },
    {
      id: 10,
      name: "Shelter from the Storm",
    },
  ];
  const itemsList = [
    {
      id: 1,
      name: "Cloths",
    },
    {
      id: 2,
      name: "Books",
    },
    {
      id: 3,
      name: "Toys",
    },
    {
      id: 4,
      name: "Electonics",
    },
  ];
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    org: "",
    item1: "",
    quantity1: 0,
    quality1: "",
    item2: "",
    quantity2: 0,
    quality2: "",
    item3: "",
    quantity3: 0,
    quality3: "",
    pick: "",
  });

  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleQuantityChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleQualityChange = (value, name) => {
    console.log(value, name);
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    try {
      const body = { formData };
      const response = await fetch("http://localhost:5000/registerDonation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          org: formData.org,
          item1: formData.item1,
          quantity1: formData.quantity1,
          quality1: formData.quality1,
          item2: formData.item2,
          quantity2: formData.quantity2,
          quality2: formData.quality2,
          item3: formData.item3,
          quantity3: formData.quantity3,
          quality3: formData.quality3,
          pick: formData.pick,
        }),
      });
      setIsSuccess(true);

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Layout>
      <div className="bg-form h-[90vh] bg-cover flex flex-col justify-center">
        <div className="self-center text-9xl text-primary opacity-80 font-main font-bold">
          Register
        </div>
        <div className="self-center text-4xl text-white opacity-80 font-secondary font-semibold py-4">
          your donation now.
        </div>
      </div>
      <form action="" onSubmit={onFormSubmit} className="m-8">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem marginBottom={4}>
            <h2>
              <AccordionButton className="bg-orange-100">
                <Box
                  as="span"
                  flex="1"
                  textAlign="center"
                  className="font-main text-3xl font-semibold"
                >
                  Personal Information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="mx-28">
              <div className="flex gap-8 ">
                <label
                  htmlFor=""
                  className="text-lg font-secondary font-medium w-32"
                >
                  First Name <span className="text-red-500 font-semibold">*</span>
                </label>
                <Input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  width={300}
                  required
                  focusBorderColor="orange.400"
                />
                <label
                  htmlFor=""
                  className="text-lg font-secondary font-medium w-32"
                >
                  Last Name
                </label>
                <Input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  width={300}
                  focusBorderColor="orange.400"
                />
              </div>
              <div className="flex gap-8 py-4">
                <label
                  htmlFor=""
                  className="text-lg font-secondary font-medium w-32"
                >
                  Email <span className="text-red-500 font-semibold">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  width={300}
                  required
                  focusBorderColor="orange.400"
                />
                <label
                  htmlFor=""
                  className="text-lg font-secondary font-medium w-32"
                >
                  Mobile Number <span className="text-red-500 font-semibold">*</span>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  width={300}
                  required
                  focusBorderColor="orange.400"
                />
              </div>
              <div className="flex gap-8">
                <label
                  htmlFor=""
                  className="text-lg font-secondary font-medium w-32"
                >
                  Address
                </label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  width={300}
                  focusBorderColor="orange.400"
                />
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem marginBottom={4}>
            <h2>
              <AccordionButton className="bg-orange-100">
                <Box
                  as="span"
                  flex="1"
                  textAlign="center"
                  className="font-main text-3xl font-semibold"
                >
                  Donation Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="mx-28">
              <div className="flex gap-8">
                <label
                  htmlFor=""
                  className="text-lg font-secondary font-medium w-32"
                >
                  Organization
                </label>
                <Select
                  placeholder="Organization"
                  onChange={handleChange}
                  name="org"
                  focusBorderColor="orange.400"
                >
                  {orgData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="flex gap-8 py-4">
                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Item 1
                  </label>
                  <Select
                    placeholder="Item 1"
                    onChange={handleChange}
                    name="item1"
                    focusBorderColor="orange.400"
                  >
                    {itemsList.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Quantity
                  </label>
                  <NumberInput
                    defaultValue={0}
                    min={0}
                    max={10}
                    name={"quantity1"}
                    value={formData.quantity1}
                    focusBorderColor="orange.400"
                    onChange={(value) =>
                      handleQuantityChange(value, "quantity1")
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className="flex">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Quality
                  </label>

                  <RadioGroup
                    onChange={(value) => handleQualityChange(value, "quality1")}
                    name={"quality1"}
                    value={formData.quality1}
                    className="self-center"
                  >
                    <Stack direction="row">
                      <Radio value="good" colorScheme="orange">
                        <div className=" h-4 w-6 bg-green-500"></div>
                      </Radio>
                      <Radio value="moderate" colorScheme="orange">
                        <div className=" h-4 w-6 bg-yellow-500"></div>
                      </Radio>
                      <Radio value="bad" colorScheme="orange">
                        <div className=" h-4 w-6 bg-red-500"></div>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex gap-8 py-4">
                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Item 2
                  </label>
                  <Select
                    placeholder="Item 2"
                    onChange={handleChange}
                    name="item2"
                    focusBorderColor="orange.400"
                  >
                    {itemsList.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Quantity
                  </label>
                  <NumberInput
                    defaultValue={0}
                    min={0}
                    max={10}
                    name={"quantity2"}
                    value={formData.quantity2}
                    focusBorderColor="orange.400"
                    onChange={(value) =>
                      handleQuantityChange(value, "quantity2")
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className="flex">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Quality
                  </label>

                  <RadioGroup
                    onChange={(value) => handleQualityChange(value, "quality2")}
                    name={"quality2"}
                    value={formData.quality2}
                    className="self-center"
                  >
                    <Stack direction="row">
                      <Radio value="good" colorScheme="orange">
                        <div className=" h-4 w-6 bg-green-500"></div>
                      </Radio>
                      <Radio value="moderate" colorScheme="orange">
                        <div className=" h-4 w-6 bg-yellow-500"></div>
                      </Radio>
                      <Radio value="bad" colorScheme="orange">
                        <div className=" h-4 w-6 bg-red-500"></div>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex gap-8 py-4">
                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Item 3
                  </label>
                  <Select
                    placeholder="Item 3"
                    onChange={handleChange}
                    name="item3"
                    focusBorderColor="orange.400"
                  >
                    {itemsList.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Quantity
                  </label>
                  <NumberInput
                    defaultValue={0}
                    min={0}
                    max={10}
                    name={"quantity3"}
                    value={formData.quantity3}
                    focusBorderColor="orange.400"
                    onChange={(value) =>
                      handleQuantityChange(value, "quantity3")
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className="flex">
                  <label
                    htmlFor=""
                    className="text-lg font-secondary font-medium w-32 self-center"
                  >
                    Quality
                  </label>

                  <RadioGroup
                    onChange={(value) => handleQualityChange(value, "quality3")}
                    name={"quality3"}
                    value={formData.quality3}
                    className="self-center"
                  >
                    <Stack direction="row">
                      <Radio value="good" colorScheme="orange">
                        <div className=" h-4 w-6 bg-green-500"></div>
                      </Radio>
                      <Radio value="moderate" colorScheme="orange">
                        <div className=" h-4 w-6 bg-yellow-500"></div>
                      </Radio>
                      <Radio value="bad" colorScheme="orange">
                        <div className=" h-4 w-6 bg-red-500"></div>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem marginBottom={4}>
            <h2>
              <AccordionButton className="bg-orange-100">
                <Box
                  as="span"
                  flex="1"
                  textAlign="center"
                  className="font-main text-3xl font-semibold"
                >
                  Pick Up Method 
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="flex justify-center">
              <RadioGroup
                onChange={(value) => handleQualityChange(value, "pick")}
                name={"pick"}
                value={formData.pick}
                className="self-center"
              >
                <Stack direction="row">
                  <Radio value="self" colorScheme="orange">
                    <div className=" ">
                      <Image src={self} alt="self" height={200} />
                      <div className="font-secondary text-primary text-xl font-semibold text-center">Self</div>
                    </div>
                  </Radio>
                  <Radio value="pickup" colorScheme="orange">
                    <div className=" ">
                      <Image src={pickUp} alt="pickUp" height={200} />
                      <div className="font-secondary text-primary text-xl font-semibold text-center">PickUp</div>
                    </div>
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div className="text-center">
          <button className="bg-primary text-white font-semibold font-secondary py-2 px-4 hover:bg-secondary mt-2 rounded-full">
            <div className="flex gap-2">Submit</div>
          </button>
        </div>
      </form>
      <div className={cx("text-3xl text-center font-main font-semibold mt-4 mb-8 justify-center gap-8 hidden", {'!flex bg-background mx-8 py-4': isSuccess === true})}><BsCheckCircleFill className="h-11 w-11 text-green-500" />You have successfully registered!</div>
    </Layout>
  );
};

export default RegistrationForm;

// export async function getServerSideProps({ req }) {
//   const session = await getSession({req})
//   if(!session) {
//     return{
//       redirect:'/signIn',
//       permanent:false
//     }
//   }
//   return {
//     props: {session}
//   }
// }