import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('AI')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @ApiOperation({ summary: 'Ask a question to the AI teacher' })
  @ApiResponse({ status: 200, description: 'Returns AI response' })
  @Post('ask')
  async askQuestion(@Body('question') question: string) {
    return this.aiService.askQuestion(question);
  }
}
