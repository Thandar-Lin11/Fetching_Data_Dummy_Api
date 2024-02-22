import React, { useContext } from "react";
import { AppContext } from "../App";

const ProductList = () => {
  const { state } = useContext(AppContext);

  return (
    <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-md text-center">
          <h2 class="font-serif text-2xl font-bold sm:text-3xl">
            Fetching Data from Dummy Api
          </h2>
          <p class="mt-4 text-base text-gray-700">Product List</p>
          {state.loading && <p>Loading...</p>}
          {state.error && <p className="text-red-500">Error: {state.error}</p>}
        </div>

        <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
          {state.products.map((product) => (
            <article class="relative">
              <div key={product.id} class="aspect-square overflow-hidden">
                <img
                  class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
              <div class="absolute top-0 m-1 rounded-full bg-white">
                <p class="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                  {product.discountPercentage}% OFF
                </p>
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="cursor-pointer">
                      {product.title}
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg
                      class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        class=""
                      ></path>
                    </svg>
                    <svg
                      class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        class=""
                      ></path>
                    </svg>
                    <svg
                      class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        class=""
                      ></path>
                    </svg>
                    <svg
                      class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        class=""
                      ></path>
                    </svg>
                    <svg
                      class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        class=""
                      ></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                    {" "}
                    ${product.price}{" "}
                  </del>
                  <p class="text-xs font-normal sm:text-sm md:text-base">
                    $99.00
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductList;
