export function FetchCivil(fetchres) {

    return {
        type : 'CIVIL_LOAD',
        data : fetchres
    }
}

export function CivilDet(state) {
    return {
        type: 'CIVILDET_LOAD',
        data: state
    }
}

export function FetcTech(fetchres) {
    return {
        type: 'UNTEC_LOAD',
        data: fetchres
    }
};
    export function FetcUn(fetchres) {
        return {
            type: 'UNUN_LOAD',
            data: fetchres
        }
    }
