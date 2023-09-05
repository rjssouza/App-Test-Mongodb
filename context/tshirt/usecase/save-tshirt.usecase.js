const v8n = require("v8n");

const validation = v8n()
    .string()
    .minLength(3);

module.exports = (tshirt) => {
    const result = validation.check(tshirt.name);

    console.log("save-tshirt.usecase");
}