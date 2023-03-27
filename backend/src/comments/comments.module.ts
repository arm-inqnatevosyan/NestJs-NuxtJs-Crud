import { Module } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Comments } from './comments/comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity/user.entity';

@Module({
  providers: [CommentService],
  controllers: [CommentsController],
  imports: [TypeOrmModule.forFeature([Comments, User])],
})
export class CommentsModule {}
