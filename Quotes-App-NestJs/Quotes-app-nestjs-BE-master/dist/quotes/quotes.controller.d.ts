import { Quotes } from './quotes.entity';
import { QuotesService } from './quotes.service';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getAllQuotes(): Promise<Array<Quotes>>;
    create(createQuotes: Quotes): Promise<"error in creating quotes" | "quotes created">;
    update(id: number, body: any): Promise<void>;
    remove(id: number): Promise<string>;
    findById(id: number): Promise<Quotes>;
}
