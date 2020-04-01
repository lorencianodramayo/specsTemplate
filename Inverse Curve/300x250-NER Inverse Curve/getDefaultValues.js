class initDefault {
    constructor(_defaulValues) {
        this._defaulValues = _defaulValues;
    }
}

class newDynamic extends initDefault {
    constructor(_defaulValues) {
        super(_defaulValues);
    }
    populate() {
        for (const property in this._defaulValues) {
            if (this._defaulValues.hasOwnProperty(property)) {
                if ((property).toLowerCase().match(/headline|cta/g) && this._defaulValues[property] !== "n/a") {
                    console.log(property);
                    _querySelector(property + "_text").innerHTML = this._defaulValues[property];
                } else {
                    _querySelector("image").setAttribute("source", this._defaulValues.productImg);
                }
            }
        }
        return true;
    }
}

const _querySelector = (id) => {
    return document.querySelector(id)
}