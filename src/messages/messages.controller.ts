// using to route the request to a function - handling incomming request

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesSerive: MessagesService;

  constructor() {
    // DONT DO THIS ON REAL APP
    // USE DEPENDECY INJECTION
    this.messagesSerive = new MessagesService();
  }

  @Get()
  getListMessages() {
    return this.messagesSerive.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesSerive.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesSerive.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
