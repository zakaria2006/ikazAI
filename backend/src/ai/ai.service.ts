import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';

@Injectable()
export class AiService {
  private chain: LLMChain;

  constructor() {
    const chatModel = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.7,
      modelName: 'gpt-4'
    });

    const prompt = PromptTemplate.fromTemplate(`
      You are an AI teaching assistant. Respond to the student's question:
      {question}
    `);

    this.chain = new LLMChain({
      llm: chatModel,
      prompt
    });
  }

  async askQuestion(question: string): Promise<string> {
    const response = await this.chain.run(question);
    return response;
  }
}
