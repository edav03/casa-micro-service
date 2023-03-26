import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { BoardModule } from './modules/Board/Board.module';

@Module({
  imports: [BoardModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
