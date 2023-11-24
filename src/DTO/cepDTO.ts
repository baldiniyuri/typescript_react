export class CepDTO {
    constructor(
        public readonly cep: string,
        public readonly logradouro: string,
        public readonly complemento: string,
        public readonly bairro: string,
        public readonly localidade: string,
        public readonly uf: string,
    ) {}
}