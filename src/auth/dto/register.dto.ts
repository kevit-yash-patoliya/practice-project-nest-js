import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsStrongPassword,
} from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty({ message: 'firstname must not be empty' })
    firstname!: string;

    @IsString()
    @IsNotEmpty({ message: 'lastname must not be empty' })
    lastname!: string;

    @IsString()
    @IsOptional()
    role?: string;

    @IsBoolean()
    @IsOptional()
    isloggedin?: boolean;

    @IsString()
    @IsNotEmpty({ message: 'username must not be empty' })
    username!: string;

    @IsEmail({}, { message: 'email must be a valid email address' })
    @IsNotEmpty({ message: 'email must not be empty' })
    email!: string;

    @IsStrongPassword(
        {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        },
        { message: 'password must be strong' },
    )
    @IsNotEmpty({ message: 'password must not be empty' })
    password!: string;

    @IsBoolean()
    @IsOptional()
    isverified?: boolean;
}
