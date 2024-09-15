import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiCursosDataService {
    private cursos = [
        {
            cod_curso: 1,
            nom_curso: 'Comprensión Lectora',
            descripcion: 'Curso para mejorar la habilidad de lectura y comprensión en los estudiantes.',
            asignaciones: [
                { grado: '5to', seccion: 'A', profesores: ['juan.perez'] },
                { grado: '4to', seccion: 'B', profesores: ['luis.gomez'] }
            ]
        },
        {
            cod_curso: 2,
            nom_curso: 'Matemáticas Básicas',
            descripcion: 'Curso básico de matemáticas enfocadas en operaciones aritméticas.',
            asignaciones: [
                { grado: '6to', seccion: 'A', profesores: ['ana.torres'] }
            ]
        },
        {
            cod_curso: 3,
            nom_curso: 'Ciencias Naturales',
            descripcion: 'Curso introductorio a las ciencias naturales y su aplicación en la vida cotidiana.',
            asignaciones: [
                { grado: '5to', seccion: 'C', profesores: ['ana.torres'] },
                { grado: '6to', seccion: 'B', profesores: ['carlos.diaz'] }
            ]
        },
        {
            cod_curso: 4,
            nom_curso: 'Historia Universal',
            descripcion: 'Curso sobre la historia universal y eventos clave.',
            asignaciones: [
                { grado: '7mo', seccion: 'A', profesores: ['jose.martinez'] }
            ]
        }
    ];

    getApiCursos() {
        return this.cursos;
    }

    agregarCurso(nuevoCurso: { nom_curso: string; descripcion: string; asignaciones: { grado: string; seccion: string; profesores: string[] }[] }) {
        const nuevoCodCurso = this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.cod_curso)) + 1 : 1;
        const cursoConId = { ...nuevoCurso, cod_curso: nuevoCodCurso };
        this.cursos.push(cursoConId);
        return cursoConId;
    }
}

    