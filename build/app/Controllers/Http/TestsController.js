"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Test"));
class TestsController {
    async get({ response, params }) {
        const test = await Test_1.default.findBy('id', params.id);
        if (test) {
            await test.preload('questions');
            for (const question of test.questions) {
                await question.preload('answers');
                await question.preload('trueAnswers');
            }
            return response.ok(test);
        }
        return response.notFound();
    }
    async send({ request, response, params }) {
        const test = await Test_1.default.findBy('id', params.id);
        if (test) {
            const answers = request.input('answers');
            const trueAnswers = [];
            await test.preload('questions');
            for (const question of test.questions) {
                await question.preload('trueAnswers');
                const answer = answers.find((e) => e.question_id == question.id);
                if (answer && question.trueAnswers.find((tAns) => tAns.answerId == answer.id)) {
                    trueAnswers.push(answer);
                }
            }
            const persents = Math.round((trueAnswers.length / test.questions.length) * 100);
            let mark = 2;
            if (persents > 40 && persents <= 60)
                mark = 3;
            else if (persents > 60 && persents <= 70)
                mark = 4;
            else if (persents > 70)
                mark = 5;
            return response.ok({
                persents,
                mark,
                true_answers: trueAnswers,
                true_answers_count: trueAnswers.length,
                questions_count: test.questions.length
            });
        }
        return response.notFound();
    }
}
exports.default = TestsController;
//# sourceMappingURL=TestsController.js.map