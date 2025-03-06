import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      console.error("Erro ao buscar categoria:", error);
      alert("Você não tem permissão para acessar esta categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } catch (error: any) {
        console.error("Erro ao atualizar categoria:", error);
        alert("Erro ao atualizar categoria.");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      } catch (error: any) {
        console.error("Erro ao cadastrar categoria:", error);
        alert("Erro ao cadastrar categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="h-auto min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto p-6 sm:p-8 md:p-12 lg:p-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {id === undefined ? "Cadastro de Categoria" : "Editar Categoria"}
        </h2>
        <form className="my-5" onSubmit={gerarNovaCategoria}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome:</label>
            <input
              type="text"
              placeholder="Insira o nome da Categoria"
              name="nome"
              className="bg-[#d9d9d9] mt-1 mb-3 block w-full px-3 py-2 focus:outline-none"
              value={categoria.nome || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Descrição:</label>
            <input
              type="text"
              placeholder="Insira a descrição da Categoria"
              name="descricao"
              className="bg-[#d9d9d9] mt-1 mb-3 block w-full px-3 py-2 focus:outline-none"
              value={categoria.descricao || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ícone:</label>
            <input
              type="text"
              placeholder="Insira o ícone da Categoria"
              name="icone"
              className="bg-[#d9d9d9] mt-1 mb-3 block w-full px-3 py-2 focus:outline-none"
              value={categoria.icone || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div className="flex w-full gap-3 mt-5">
            <button
              type="button"
              onClick={retornar}
              className="w-1/2 font-medium uppercase items-center justify-center gap-2 border-[#FD6101] text-white px-4 py-2 rounded-lg bg-[#FD6101] hover:text-white hover:bg-[#B63700] hover:border-[#B63700] duration-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 font-medium uppercase items-center justify-center gap-2 border-2 text-[#FD6101] px-4 py-2 rounded-lg hover:bg-[#FD6101] hover:text-white hover:border-[#FD6101] duration-500"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;