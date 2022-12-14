import { CulturaProps } from "../utils/Culturas";

export type DetailCultureProps = {
    cultureIndex: number,
    userInserData: {
        pH: number,
        fosforo?: number,
        potassio?: number,
        calcio?: number,
        magnesio?: number,
        enxofre?: number,
        MO?: number,
        ferro?: number,
        manganes?: number,
        boro?: number,
        cobre?: number,
    },
    disableChanges?: boolean,
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            About: undefined;
            // RankResult: Array<CulturaProps>;
            NewAnalyses: undefined;
            PreviousAnalyzes: undefined;
            DetailCulture: DetailCultureProps;
        }
    }
}