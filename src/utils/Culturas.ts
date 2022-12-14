import { ImageSourcePropType } from "react-native";

import { Colors } from "../theme/Theme";

export type CulturaProps = {
    id: string,
    title: string,
    color: string,
    imgUrl: ImageSourcePropType,
    params: {
        iniPlantio: string,
        fimPlantio?: string,
        pH: Array<number>,
        fosforo?: Array<number>,
        potassio?: Array<number>,
        calcio?: Array<number>,
        magnesio?: Array<number>,
        enxofre?: Array<number>,
        MO?: Array<number>,
        ferro?: Array<number>,
        manganes?: Array<number>,
        boro?: Array<number>,
        cobre?: Array<number>,
    }
}


export const CULTURAS: Array<CulturaProps> = [
    {
        id: "0",
        title: "Cacau",
        color: Colors.laranja_cacau,
        imgUrl: require("../assets/cacau.jpg"),
        params: {
            iniPlantio: "01/12",
            fimPlantio: "01/04",
            pH: [5.5, 6],
            fosforo: [1800, 2500],
            potassio: [13000, 23000],
            calcio: [1.60, 2.40],
            magnesio: [0.36, 0.85],
            enxofre: [1600, 2000],
            MO: [3, 3],
            ferro: [150, 200],
            manganes: [150, 200],
            boro: [30, 40],
            cobre: [10, 15]
        }
    },
    {
        id: "1",
        title: "Café",
        color: Colors.marrom_cafe,
        imgUrl: require("../assets/cafe.jpg"),
        params: {
            iniPlantio: "01/01",
            fimPlantio: "31/03",
            pH: [5.2, 6.3],
            fosforo: [1200, 2000],
            potassio: [18000, 25000],
            calcio: [2.00, 3.00],
            magnesio: [0.36, 0.60],
            enxofre: [1500, 2000],
            MO: [3, 5],
            ferro: [50, 200],
            manganes: [50, 200],
            boro: [50, 80],
            cobre: [10, 20]
        }
    },
    {
        id: "2",
        title: "Caju",
        color: Colors.vermelho_caju,
        imgUrl: require("../assets/caju.jpg"),
        params: {
            iniPlantio: "01/12",
            fimPlantio: "01/04",
            pH: [4.5, 6.5],
            fosforo: [2100, 2100],
            potassio: [17000, 17000],
            calcio: [0.40, 0.40],
            magnesio: [0.12, 0.12],
            enxofre: [1500, 1500],
            MO: [3, 3],
            ferro: [0, 0],
            manganes: [0, 0],
            boro: [0, 0],
            cobre: [0, 0]
        }
    },
    {
        id: "3",
        title: "Cana de Açucar",
        color: Colors.verde_cana,
        imgUrl: require("../assets/cana.jpg"),
        params: {
            iniPlantio: "01/01",
            fimPlantio: "31/03",
            pH: [6, 6],
            fosforo: [1300, 3000],
            potassio: [10000, 16000],
            calcio: [0.40, 1.60],
            magnesio: [0.12, 0.36],
            enxofre: [1500, 3000],
            MO: [3, 5],
            ferro: [200, 500],
            manganes: [100, 250],
            boro: [15, 50],
            cobre: [8, 10]
        }
    },
    {
        id: "4",
        title: "Cenoura",
        color: Colors.laranja_cenoura,
        imgUrl: require("../assets/cenoura.jpg"),
        params: {
            iniPlantio: "01/01",
            fimPlantio: "31/12",
            pH: [6, 6.5],
            fosforo: [2000, 4000],
            potassio: [40000, 60000],
            calcio: [5.01, 7.01],
            magnesio: [0.48, 0.85],
            enxofre: [4000, 8000],
            MO: [3, 3],
            ferro: [60, 300],
            manganes: [60, 200],
            boro: [30, 80],
            cobre: [5, 15]
        }
    },
]