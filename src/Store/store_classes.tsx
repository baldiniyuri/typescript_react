export class Action<T> {
    constructor(
        public readonly type: string,
        public readonly data: T
    ) { }
}