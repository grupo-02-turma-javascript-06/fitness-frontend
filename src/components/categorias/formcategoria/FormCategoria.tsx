function FormCategoria() {
    return (
        <div className="h-auto min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Cadastro de Categoria</h2>
            <form className="my-5 ">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome:</label>
                    <input
                        type="text"
                        placeholder="Insira o nome da Categoria"
                        className="bg-[#d9d9d9] mt-1 mb-3 block w-full px-3 py-2 focus:outline-none"
                        value=""
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descrição:</label>
                    <input
                        placeholder="Insira a descrição da Categoria"
                        className="bg-[#d9d9d9] mt-1 mb-3 block w-full px-3 py-2 focus:outline-none"
                        value=""
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Ícone:</label>
                    <input
                        type="text"
                        placeholder="Insira o ícone da Categoria"
                        className="bg-[#d9d9d9] mt-1 mb-3 block w-full px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="flex w-full gap-3 mt-5">
                    <button
                        type="button"
                        className="w-1/2 font-medium uppercase items-center justify-center gap-2 border-[#FD6101] text-white px-4 py-2 rounded-lg bg-[#FD6101] hover:text-white hover:bg-[#B63700] hover:border-[#B63700] duration-500"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="w-1/2 font-medium uppercase items-center justify-center gap-2 border-2 text-[#FD6101] px-4 py-2 rounded-lg hover:bg-[#FD6101] hover:text-white hover:border-[#FD6101] duration-500"
                    >
                        Salvar
                    </button>
                </div>
            </form>
            </div>
            
        </div>
    );
}

export default FormCategoria