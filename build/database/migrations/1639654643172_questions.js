"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Questions extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'questions';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('test_id').notNullable();
            table.string('title', 255).notNullable();
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Questions;
//# sourceMappingURL=1639654643172_questions.js.map