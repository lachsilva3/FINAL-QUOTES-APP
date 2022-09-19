import { Repository } from 'typeorm';
import { Quotes } from './quotes.entity';
export declare class QuotesService {
    private quotesRepository;
    findOne(id: any): Quotes | PromiseLike<Quotes>;
    quotes: any;
    constructor(quotesRepository: Repository<Quotes>);
    getAllQuotes(): Promise<Array<Quotes>>;
    create(quotes: Quotes): Promise<Quotes>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
    findById(id: number): Promise<Quotes>;
}
