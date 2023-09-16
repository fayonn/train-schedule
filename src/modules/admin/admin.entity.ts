import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "../../common/entities/base.entity";
import { RefreshToken } from "../auth/refresh-token.entity";

@Entity({name: "admins"})
export class Admin extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({unique: true})
  email: string

  @Column()
  password: string

  @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.admin)
  refreshTokens: RefreshToken[]
}
