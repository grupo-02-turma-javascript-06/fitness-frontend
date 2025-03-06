import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { MagnifyingGlass, Plus, ArrowRight } from "@phosphor-icons/react";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      console.error("Erro ao buscar categorias:", error);
      alert("Você não tem permissão para acessar as categorias.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      {isLoading ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="w-full">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-center mb-4">
                Lista de Categorias
              </h2>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex justify-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Pesquisar..."
                      className="bg-white rounded-lg pl-10 pr-3 py-2 text-gray-700 focus:outline-white"
                    />
                    <MagnifyingGlass
                      className="absolute left-3 top-2.5 text-gray-400"
                      size={20}
                    />
                  </div>
                  <button className="ml-2 flex text-center items-center bg-[#FD6101] text-white px-3 py-2 rounded-lg hover:bg-[#B63700] duration-500">
                    <ArrowRight size={20} />
                  </button>
                </div>
                <button className="flex items-center justify-center gap-2 border-2 text-[#FD6101] px-4 py-2 rounded-lg hover:bg-[#FD6101] hover:text-white hover:border-[#FD6101] duration-500">
                  <Plus size={20} />
                  Categoria
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categorias.map((categoria) => (
                <CardCategorias key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;