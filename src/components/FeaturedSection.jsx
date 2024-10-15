

function FeaturedSection() {
  return (
    <div className="container mx-auto px-4 mt-8 ">
      <h2 className="text-2xl font-bold">Featured</h2>
      <div className="grid grid-cols-4 gap-4">
        <img src alt="Featured Product" className="w-full" />
        <img src alt="Featured Product" className="w-full" />
        <img src alt="Featured Product" className="w-full" />
        <img src alt="Featured Product" className="w-full" />
      </div>
    </div>
  );
}

export default FeaturedSection;
