"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const chains_1 = require("langchain/chains");
const prompts_1 = require("langchain/prompts");
const openai_1 = require("langchain/chat_models/openai");
let AiService = class AiService {
    constructor() {
        const chatModel = new openai_1.ChatOpenAI({
            openAIApiKey: process.env.OPENAI_API_KEY,
            temperature: 0.7,
            modelName: 'gpt-4'
        });
        const prompt = prompts_1.PromptTemplate.fromTemplate(`
      You are an AI teaching assistant. Respond to the student's question:
      {question}
    `);
        this.chain = new chains_1.LLMChain({
            llm: chatModel,
            prompt
        });
    }
    async askQuestion(question) {
        const response = await this.chain.run(question);
        return response;
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AiService);
//# sourceMappingURL=ai.service.js.map