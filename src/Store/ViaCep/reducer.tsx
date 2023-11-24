import { CepDTO } from 'DTO/cepDTO';
import { AnyAction } from 'redux';

const initialState: CepDTO[] = []; 

export function getCepReducer(state = initialState, action: AnyAction) {
    switch(action.type) {
        case "@cep/GET":
            return [...state, action.data]; 
        default:
            return state;
    }
}