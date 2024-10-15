/* eslint-disable react/no-unescaped-entities */

function Banner() {
  return (
    <div className="relative mt-[4rem]  h-[calc(100vh-3rem)] text-white ">
      <div className="inset-0 absolute">
        <img className="w-full h-full object-center  top-0 left-0 -z-10" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1728654689/e-commerce/bg_1_efdzap.jpg" alt="" />
      </div>
      <div className="absolute top-[19rem] left-[2rem]  h-full flex ">
        <div className="text-white text-start w-[24rem]">
          <h1 className="text-[2rem] font-bold">
            More than just a game <span className="text-[3rem]"> It's a lifestyle.</span>
          </h1>
          <p className="mt-4">
            Whether you're just starting out, have played your whole life or
            you're a Tour pro.
          </p>
          <button>Shop Now</button>
        </div>
        </div>
      
    </div>
  );
}

export default Banner;
