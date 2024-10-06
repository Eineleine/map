export class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }
    addError(id, error) {
        this.errors.set(id, error);
    }
    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        } else {
            return 'Unknown error';
        }
    }
}
