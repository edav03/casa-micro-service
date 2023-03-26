// import {}
import { BoardService } from '../Board/application/Board.service';
import { BoardController } from '../Board/infraestructure/controller/Board.controller';
import { Global, Module } from '@nestjs/common';
// import { ConfigurationProvider } from '@ndcmsl/core-nest-module';

@Module({
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
