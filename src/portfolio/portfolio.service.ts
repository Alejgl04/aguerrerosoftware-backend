import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Portfolio } from './entities/portfolio.entity';
import { Model } from 'mongoose';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name)
    private readonly portFolioModel: Model<Portfolio>,
  ) {}

  async create(createPortfolioDto: CreatePortfolioDto) {
    try {
      const newPortfolio = await this.portFolioModel.create(createPortfolioDto);
      return newPortfolio;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return this.portFolioModel.find();
  }

  update(id: number, updatePortfolioDto: UpdatePortfolioDto) {
    return `This action updates a #${id} portfolio`;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `This pokemon already exists in our records ${JSON.stringify(
          error.keyValue,
        )}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(`Check Server logs`);
  }
}
