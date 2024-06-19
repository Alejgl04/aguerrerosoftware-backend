import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Portfolio extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  title: string;

  @Prop({
    index: true,
  })
  imageUrl: string;

  @Prop({
    index: true,
  })
  urlProject: string;
  @Prop({
    type: Date,
    default: Date.now,
  })
  creationDateTime: Date;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
