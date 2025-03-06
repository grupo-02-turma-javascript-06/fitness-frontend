import { MagnifyingGlass } from "@phosphor-icons/react";
import CardAluno from "../cardaluno/CardAluno";


function ListaAluno() {

    
    return (
        <>
        
            <div className="flex justify-center items-center bg-[#1E2729] flex-col "> 

                <img
                src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/Banner.svg?updatedAt=1741281939958"
                alt="Mulher Fitness"
                className="lg:h-full object-cover"
                />
                
            </div>


            <div className="flex flex-col justify-center items-center h-20 text-lg mx-5 md:mx-0">
                <div className="container flex justify-center flex-col md:flex-row gap-5 mt-15 md:mt-0">
                    
                    <div className="flex flex-col gap-2 md:w-[80vw] ">
                        <form className="flex justify-center items-center mx-auto w-full gap-4 ">
                        
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="flex gap-4 items-center bg-white w-full rounded-lg drop-shadow-lg">
                                <div className="flex justify-center items-center bg-[#dbdada] w-15 h-11 rounded-l-lg"><MagnifyingGlass size={25} className="text-white" /></div>
                                
                                <input
                                type="text"
                                id="simple-search"
                                className="w-full border-0 focus:ring-0 focus:outline-none py-2 px-4"
                                placeholder="Pesquisar Aluno"
                                />
                            </div>
                        </form>
                    </div>

                    
                    
                </div>
            </div>
            
            <div className="flex justify-center w-full my-4 mt-15 md:mt-0">
                <div className="container flex flex-col mx-2"> 
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    >
                        <CardAluno />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaAluno;