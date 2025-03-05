import Categoria from "./Categoria";

export default interface Exercicio{
    id:	number;
    nome:	string;
    descricao:	string;
    carga:	number;
    repeticao:	number;
    tempo:	string;
    categoria: Categoria | null;
    foto: string;
}