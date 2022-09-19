import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Quotes } from './quotes.entity';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}
  // GET
  @Get()
  async getAllQuotes(): Promise<Array<Quotes>> {
    return this.quotesService.getAllQuotes();
  }

  // GET BY ID
  // @Get(':id')
  // async find(@Param('id') id: any): Promise<Quotes> {
  //   return this.quotesService.find(id);
  // }

  // POST
  @Post()
  async create(@Body() createQuotes: Quotes) {
    const quote = await this.quotesService.create(createQuotes);
    if (!quote) {
      return 'error in creating quotes';
    }
    return 'quotes created';
  }
  // PUT
  @Put(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    const newQuotes = await this.quotesService.update(id, body);
  }
  // DELETE
  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.quotesService.delete(id);
    return 'quote deleted';
  }

  // get by id(test)
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.quotesService.findById(id);
  }
}
