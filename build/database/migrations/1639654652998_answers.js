"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Answers extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'answers';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('question_id').notNullable();
            table.string('title', 255).notNullable();
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Answers;
//# sourceMappingURL=1639654652998_answers.js.map