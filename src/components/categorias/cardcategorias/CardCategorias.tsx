import { Pencil, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function CardCategorias() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-90 min-h-50 bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between">
                    <div className="flex flex-col text-start items-center gap-3 text-lg text-gray-700">
                        <div className="flex w-full items-center gap-3 font-semibold">
                            <img className="w-10 h-10" src="https://ik.imagekit.io/madsik/REACT/ICONS/icon-cardio.svg?updatedAt=1741205579259" alt="icon-categoria" />
                            <h2>Nome da Categoria</h2>
                        </div>

                        <p className="text-base text-gray-600">
                            Lorem ipsum dolor sit amet a minima unt veritatis incidunt, a sint iusto saepe cupiditate eius.
                        </p>
                    </div>

                    <div className="flex justify-end gap-3">
                        <Link to={""}>
                        <Trash className="text-gray-400 hover:text-[#FD6101] cursor-pointer" size={20} />
                        </Link>
                        <Link to={""}>
                        <Pencil className="text-gray-400 hover:text-[#1E2729] cursor-pointer" size={20} />
                        </Link>
                    </div>
                </div>

            </div>
        </>

    )
}

export default CardCategorias