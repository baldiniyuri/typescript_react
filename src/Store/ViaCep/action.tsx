import { CepDTO } from 'DTO/cepDTO';
import { Action } from 'Store/store_classes';

export const getCepAction = (cepData: CepDTO): Action<CepDTO> => ({
    type: "@cep/GET",
    data: cepData
});