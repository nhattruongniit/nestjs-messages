// handle data access & business logic
import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // messagesRepository: Repository;
  // constructor(repo: Repository) {
  //   // services is creating its own dependencies
  //   this.messagesRepository = repo;
  // }

  // DI
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
