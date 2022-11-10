import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog1.jpg",
      links: "/blog/blog1",
    },
    {
      id: 2,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog2.jpg",
      links: "/blog/blog1",
    },
    {
      id: 3,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog3.jpg",
      links: "/blog/blog1",
    },
    {
      id: 4,
      title:
        " Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data purposes...................",
      heading: "How is ml related to block chain",
      image: "/blogimage/blog1.jpg",
      links: "/blog/blog1",
    },
    {
      id: 5,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog2.jpg",
      links: "/blog/blog2",
    },
    {
      id: 6,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog3.jpg",
      links: "/blog/blog3",
    },
  ];
  const blog = [
    {
      id: 1,
      name: "   how is ml related to block chain",
      logo: "/aiml2.jpg",
      desc: "  using AI and Big Data in Blockchain Technology: A step closer to the futureThere has been a number of changes in the IT world recently......",
    },
    {
      id: 2,
      name: "   how is ml related to block chain",
      logo: "/aiml2.jpg",
      desc: "  Building solutions using artificial intelligence, machine learning and blockchain technologies. Artificial intelligence and machine learning ....",
    },
    {
      id: 3,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data ........... ",
    },
    {
      id: 4,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis ...........",
    },
    {
      id: 5,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis ...........",
    },
    {
      id: 6,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis ...........",
    },
  ];

  return (
    <>
      <section className="text-black bg-coustom1 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col flex-wrap text-center w-full mb-20 ">
            <h1 className="sm:text-3xl text-2xl  title-font mb-4 text-black">
              Blogs
            </h1>
          </div>
          <div className="flex lg:grid lg:grid-cols-4 flex-wrap gap-1 ">
            {blog.map(({ name, logo, id, desc }) => {
              return (
                <div
                  key={id}
                  className="w-fit flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                >
                  <div>
                    <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                      <Image
                        className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                        src={logo}
                        width={400}
                        height={300}
                        alt=""
                      ></Image>
                    </div>

                    <h1 className="title-font sm:text-2xl text-xl text-left  text-gray-900 mb-3">
                      {name}
                    </h1>
                    <p className="leading-relaxed mt-10 text-left ">{desc}</p>
                  </div>
                  <div className="flex justify-center mt-6 ">
                    <Link href={"/blog/blogs"}>
                      <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
