import { Controller, Get, Post, Body } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  create(@Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfolioService.create(createPortfolioDto);
  }

  @Get()
  findAll() {
    return this.portfolioService.findAll();
  }
}
