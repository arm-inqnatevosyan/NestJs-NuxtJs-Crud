import { Controller, Post, Body, Get } from '@nestjs/common';
import { CommentService } from './comments.service';
import { Comments } from './comments/comments.entity';

@Controller('comments')
export class CommentsController {
  constructor(private service2: CommentService) {}
  @Get()
  get() {
    return this.service2.getUsers();
  }

  @Post()
  create(@Body() user: Comments) {
    return this.service2.createUser(user);
  }


}
