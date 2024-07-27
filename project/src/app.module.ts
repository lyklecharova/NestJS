import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UesersModule } from './uesers/uesers.module';

@Module({
  imports: [UesersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
