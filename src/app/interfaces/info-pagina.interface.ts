
export interface Equipo{
    nombre:string;
    frase:string;
    subtitulo:string;
    twitter:string;
    url:string;
}

export interface InfoPagina{
    titulo?:string;
    email?:string;
    nombreCorto?:string;
    faceBook?:string;
    equipoTrabajo?:Equipo[];
    paginaAutor?:string;
    instagram?:string;
    twitter:string;
    tublr?:string;
}