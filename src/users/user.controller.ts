import { ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common'
import { User } from './user.entity'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async createUser(): Promise<User> {
    return this.userService.createUser()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async listUsers(): Promise<User[]> {
    return this.userService.findAll()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id)
  }
}
