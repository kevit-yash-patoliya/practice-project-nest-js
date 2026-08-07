import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../../common/utils/enums/roles';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop()
    firstname!: string

    @Prop()
    lastname!: string

    @Prop({ default: Role.USER, required: false })
    role?: string

    @Prop({ default: false })
    isloggedin!: boolean

    @Prop()
    username!: string

    @Prop()
    email!: string

    @Prop({ required: true })
    password!: string

    @Prop({ default: false })
    isverified!: boolean

}


export const UserSchema = SchemaFactory.createForClass(User)