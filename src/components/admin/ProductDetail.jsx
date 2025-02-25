import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";

const ProductDetail = () => {
  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-green-300 font-bold">Todo el producto </h1>
        {/* Add Product Button  */}
        <Link to={"/agregarproducto"}>
          <button className="px-5 py-2 bg-green-50 border border-green-100 rounded-lg">
            Agregar Producto
          </button>
        </Link>
      </div>

      {/* Loading  */}
      <div className="flex justify-center relative top-20">
        {loading && <Loader />}
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-green-100 text-green-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                Imagen
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100"
              >
                Titulo
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100"
              >
                Precio
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100"
              >
                Categoria
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100"
              >
                Fecha
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100"
              >
                Acciones
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100"
              >
                Acciones
              </th>
            </tr>
            {getAllProduct.map((item, index) => {
              const { id, title, price, category, date, productImageUrl } =
                item;
              return (
                <tr key={index} className="text-green-300">
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 ">
                    {index + 1}.
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    <div className="flex justify-center">
                      <img className="w-20 " src={productImageUrl} alt="" />
                    </div>
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    ${price}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {date}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer "></td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
