import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);
  let content;
  if (loading) {
    content = <h2 className="text-center text-2xl font-bold">Loading...</h2>;
  } else {
    content = (
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-64 bg-white rounded-xl shadow-md hover:shadow-xl duration-300 flex flex-col justify-between items-center"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-52 object-cover bg-amber-100 rounded-t-xl p-3"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold text-orange-600">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2 h-14 overflow-hidden">
                {item.description}
              </p>

              <p className="mt-3 text-red-500 text-2xl font-bold">
                ${item.price}
              </p>

              <p className="mt-2 text-sm bg-orange-200 w-fit px-3 py-1 rounded-full">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-orange-50 min-h-screen py-5">
      <nav className="bg-orange-500 h-20 flex justify-between items-center px-15 fixed w-full top-0">
        <h1 className="text-3xl font-bold text-white">DummyShop</h1>
      </nav>

      <div className="pt-28 px-8">{content}</div>
    </div>
  );
}

export default App;
