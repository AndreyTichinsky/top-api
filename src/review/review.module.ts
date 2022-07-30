import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  controllers: [ReviewController],
  imports: [
    TelegramModule,
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: { collection: 'Review' },
      },
    ]),
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
