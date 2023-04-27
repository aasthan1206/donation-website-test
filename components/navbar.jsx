import Link from "next/link";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "/homePage",
    },
    {
      id: 2,
      title: "Donate",
      link: "/donate",
    },
    {
      id: 3,
      title: "About Us",
      link: "/",
    },
    {
      id: 4,
      title: "Contact Us",
      link: "/",
    },
  ];

  return (
    <div className="bg-black sticky top-0 z-10">
      <div className="bg-white flex justify-around">
        {menuItems.map((item) => (
          <Link href={item.link}>
            <div
              key={item.id}
              className="text-black text-xl font-semibold py-6 hover:text-primary cursor-pointer"
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
