import {  Controller, Post, Body, Res, HttpStatus, Get  } from '@nestjs/common';
import {CreateUserDto} from '../dto/create-user.dto'
import {LoginUserDto} from '../dto/login-user.dto'
import {TokenService} from '../helpers/token_creator'

import { AuthJwtService } from '../auth-jwt/auth-jwt.service';
import * as bcrypt from 'bcrypt';

@Controller('auth-jwt')
export class AuthJwtController {
    constructor(private AuthUserService: AuthJwtService,
        private tokenService: TokenService,
        ){
        
    }
   

    @Post('/register')
    async register(@Body() registerDto: CreateUserDto, @Res() res) {
        try {
            
          const { name, surname, username, email, password } = registerDto;
          if (!name || !surname || !username || !email) {
            console.log(res.sendStatus(HttpStatus.BAD_REQUEST))
            return res.sendStatus(HttpStatus.BAD_REQUEST);

          }
      
          const registeredUser = await this.AuthUserService.getUserByEmail(email);
          if (registeredUser) {
            return res
              .status(HttpStatus.BAD_REQUEST)
              .json({ message: 'EMAIL YA REGISTRADO' });
          }
      
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);
      
          const user = await this.AuthUserService.createUser({
            name,
            surname,
            username,
            email,
            password: hashedPassword,
          });
      
          const { password: omitPassword, ...userWithoutPassword } = user;
          return res.status(HttpStatus.OK).json(userWithoutPassword);
        } catch (err) {
          return res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    @Post('/login')
    async login(@Body() loginDto: LoginUserDto, @Res() res) {
        try {
          const { email, password } = loginDto;
    
          const user = await this.AuthUserService.getUserByEmail(email);
          if (!user) {
            return res
              .status(HttpStatus.NOT_FOUND)
              .json({ message: 'USUARIO NO ENCONTRADO' });
          }
    
          const validatedPassword = await bcrypt.compare(password, user.password);
          if (!validatedPassword) {
            return res
              .status(HttpStatus.BAD_REQUEST)
              .json({ message: 'USUARIO O CONTRASEÑA INCORRECTA' });
          }
    
          const token = this.tokenService.createToken(user);
    
          const { id, username } = user;
    
          return res.status(HttpStatus.OK).json({ id, username, token });
        } catch (err) {
          console.log(err.message);
          return res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    }
    




