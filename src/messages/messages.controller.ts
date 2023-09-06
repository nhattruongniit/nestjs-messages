import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getListMessages() {
    console.log('getListMessages');
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('createMessage; ', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('getMessage; ', id);
  }
}
