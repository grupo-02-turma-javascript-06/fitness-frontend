import { useState } from "react";
import Modal from "../../../modal/Modal"
import { useNavigate } from "react-router-dom";


function DeletarCategoria() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function retornar() {
        navigate("")
        setIsOpen(false);
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={retornar}>
                <div className="container w-full mx-auto">
                    <h1 className="py-4 text-3xl text-center">Deletar Categoria</h1>
                    <p className="mb-4 font-semibold text-center">
                        Você tem certeza de que deseja apagar essa Categoria?
                    </p>
                    <div className="flex flex-col justify-between overflow-hidden">
                        <p className="h-full p-8 text-3xl text-center bg-white">
                            Nome da Categoria
                        </p>
                        <div className="flex justify-center gap-5">
                            <button
                                className="w-30 rounded-xl py-2 bg-[#FD6101] text-white hover:bg-[#B63700] duration-500 "
                                onClick={retornar}
                            >
                                Não
                            </button>
                            <button
                                className="w-30 rounded-xl border-2 text-[#FD6101] px-4 py-2 hover:bg-[#FD6101] hover:text-white hover:border-[#FD6101] duration-500"
                                onClick={DeletarCategoria}
                            >
                                {/* {isLoading ? (
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    />
                                ) : (
                                    <span>Sim</span>
                                )} */}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>

    )
}

export default DeletarCategoria