import { toNormalText } from '../../utils/ComboboxResponseMapper'

const universidades = [
    {
        id: 1, 
        name: 'Universidad A', 
        ubicaciones: [
            {id: 1, name:'Ubicación A'},
            {id: 2, name:'Ubicación B'},
        ],

    },
    {
        id: 2, 
        name: 'Universidad B', 
        ubicaciones: [
            {id: 1, name:'Ubicación C'},
            {id: 2, name:'Ubicación D'},
        ],
    }
];

export const getUniversidades = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(universidades);
          }, 1000);
    })
}

export const getUbicacionUniversidad = (name)=>{
    name = toNormalText(name)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(universidades.find(universidad=> universidad.name === name).ubicaciones)
          }, 1000);
    })
}