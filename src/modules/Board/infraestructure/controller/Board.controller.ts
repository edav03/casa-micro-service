// import { BaseHttpController } from '@ndcmsl/core-nest-module';
import { Body, Controller, Get } from '@nestjs/common';
import { BoardService } from '../../application/Board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  public async all(): Promise<any> {
    const result = await this.boardService.all();
    return result;
  }

  @Get('actions')
  public async actions(): Promise<any> {
    const TodoResult = await this.boardService.actions();
    return TodoResult;
  }
}
