import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Transfer extends Document {
    @Prop({ require: true })
    transferId: string;

    @Prop({ require: true })
    sender: string;

    @Prop({ require: true })
    receiver: string;

    @Prop({ require: true })
    amount: number;

    @Prop({ require: true })
    date: Date;

    createdAt?: Date;

    updatedAt?: Date;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);

