import axios from "axios";
import { CepDTO } from 'DTO/cepDTO';
import { getCepAction } from "./action";
import { Dispatch } from 'redux';

const url_via_cep = 'https://viacep.com.br/ws';


export const getCepThunk = (cep: string, setLoading: (isLoading: boolean) => void, setError: (error: boolean) => void) => (dispatch: Dispatch) => {
    setLoading(true);

    axios.get(`${url_via_cep}/${cep}/json/`)
    .then(response => {
        console.log("AQUI FILHO DA PUTA",response.data)
        const cepData = new CepDTO(
            response.data.cep, 
            response.data.logradouro, 
            response.data.complemento,
            response.data.bairro,
            response.data.localidade,
            response.data.uf);
        dispatch(getCepAction(cepData));
    })
        .catch(error => {
            console.error(error);
            setError(true);
            setLoading(false);
        });
};
