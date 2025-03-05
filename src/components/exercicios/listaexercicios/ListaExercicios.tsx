import { MagnifyingGlass } from "@phosphor-icons/react";
import CardExercicios from "../cardexercicios/CardExercicios";

function ListaExercicios() {

    
    return (
        <>
        
            <div className="flex justify-center items-center bg-[#1E2729] flex-col md:h-80">
                <div className="container flex flex-col justify-center items-center md:items-start md:absolute z-0 p-6 text-white">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h2 className="text-[2rem] lg:text-[4rem] xl:text-[6rem] font-bold">Lista de exercícios</h2>
                        <p className="text-lg lg:text-[2rem]">Comece agora a mudar de vida!</p>
                        <div className="w-full">
                            <button className="min-w-200px mt-4 border-2 border-[#FD6101] px-8 py-2 text-white">+ Exercicio</button>
                        </div>
                        
                    </div>                
                </div>

            
                <div className="container flex justify-center md:justify-end md:relative md:z-10 h-full">
                    <img
                    src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/woman-good-mood-raises-arm-with-muscles-has-strong-body-dressed-gym-outfit-listens-audio-via-modern-headphones-poses-indoor-removebg-preview%201.svg?updatedAt=1741198688950"
                    alt="Mulher Fitness"
                    className="lg:h-full object-cover"
                    />
                </div>
            </div>


            <div className="flex justify-center items-center h-20 text-lg">
                <div className="container flex justify-between gap-5">
                    <div className="flex flex-col gap-2 w-[20vw]">
                        <select id="category" value={""} className="drop-shadow-lg rounded-md px-4 py-2 bg-white text-[#6A6F75] border-0 focus:ring-0 focus:outline-none">
                            <option value="" disabled className="px-4">Categorias</option>
                            {/* {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                            ))} */}
                        </select>
                        {/* {category && <p className="text-white">Selecionado: {category}</p>} */}
                    </div>

                    <div className="flex flex-col gap-2 w-[80vw]">
                        <form className="flex justify-center items-center mx-auto w-full gap-4 ">
                        
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="bg-white py-2 px-4 w-full rounded-lg drop-shadow-lg">
                                <input
                                type="text"
                                id="simple-search"
                                className="w-full border-0 focus:ring-0 focus:outline-none"
                                placeholder="Pesquisar Exercício"
                                />
                            </div>
                        </form>
                    </div>

                    
                    
                </div>
            </div>
            
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2"> 
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    >
                        <CardExercicios />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaExercicios;