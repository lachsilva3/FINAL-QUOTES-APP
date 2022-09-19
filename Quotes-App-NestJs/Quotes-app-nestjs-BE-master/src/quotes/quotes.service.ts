import {
  Delete,
  Get,
  HttpException,
  Injectable,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quotes } from './quotes.entity';

@Injectable()
export class QuotesService {
  findOne(id: any): Quotes | PromiseLike<Quotes> {
    throw new Error('Method not implemented.');
  }
  quotes: any;
  constructor(
    @InjectRepository(Quotes) private quotesRepository: Repository<Quotes>,
  ) {}
  //  GET
  @Get()
  async getAllQuotes(): Promise<Array<Quotes>> {
    return this.quotesRepository.find({});
  }

  // POST
  @Post()
  async create(quotes: Quotes): Promise<Quotes> {
    return this.quotesRepository.save(this.quotesRepository.create(quotes));
  }
  // PUT
  @Put()
  async update(id: number, data: any): Promise<any> {
    return this.quotesRepository
      .createQueryBuilder()
      .update()
      .set({
        author: data.author,
        quote: data.quote,
        tags: data.tags,
      })
      .where('id = :id', { id })
      .execute();
  }
  // DELETE
  @Delete()
  async delete(id: number): Promise<any> {
    return this.quotesRepository
      .createQueryBuilder()
      .delete()
      .from(Quotes)
      .where('id = :id', { id })
      .execute();
  }

  // get by id(test)
  async findById(id: number): Promise<Quotes> {
    const author = await this.quotesRepository.findOneBy({ id: id });
    if (!author) {
      const errors = { author: 'not found' };
      throw new HttpException({ errors }, 404);
    }
    return author;
  }
}
