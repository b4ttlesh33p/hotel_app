import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsController } from './hotels/hotels.controller';

@Module({
  imports: [],
  controllers: [AppController, HotelsController],
  providers: [AppService],
})
export class AppModule {}
