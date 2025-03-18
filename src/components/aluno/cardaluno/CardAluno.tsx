import { PencilSimpleLine, Trash } from "@phosphor-icons/react"

function CardAluno(){
    return(
        <>
            <div className="drop-shadow-lg flex flex-col rounded-2xl overflow-hidden justify-between bg-white text-[#1E2729]">
                <div>
                    <div className="flex w-full  items-center gap-4">
                        <img src="https://ik.imagekit.io/q5tv5x3k8/default-image.jpg?updatedAt=1737306155751" alt="Imagem relacionada ao exercício"/>
                    </div>
                    <div className="flex flex-col py-6 gap-6 px-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-xl font-semibold">Nome do Aluno</h2>
                            <div className="flex justify-between gap-6">
                                <div className="flex gap-3 items-center">
                                    <img src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/peso.png?updatedAt=1741278660045" alt="" className="w-7 h-7"/>
                                    <p>52kg</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/altura.png?updatedAt=1741278660056" alt="" className="w-7 h-7"/>
                                    <p>1.70</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/imc.png?updatedAt=1741278660207" alt="" className="w-7 h-7"/>
                                    <p>imc</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <p>Email: <span>Email@email.com.br</span></p>
                                <p>Classificação: <span>No peso ideal</span></p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="rounded-lg disabled:bg-slate-200 border-3 border-[#FD6101] hover:bg-[#FD6101]
                                    text-[#FD6101] hover:text-white font-bold  py-1 px-4 flex uppercase text-sm">Ver Mais</button>
                            <div className="flex justify-end gap-6 text-[#1E2729]">
                                <PencilSimpleLine size={25} className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"/>
                                <Trash size={25} className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardAluno