import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EquipoModule } from './equipo/equipo.module';
import { PartidoModule } from './partido/partido.module';
import { TorneoModule } from './torneo/torneo.module';
import { AppService } from './app.service';
import { Equipo } from './equipo/entities/equipo.entity';
import { Partido } from './partido/entities/partido.entity';
import { Torneo } from './torneo/entities/torneo.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: 'ep-late-term-a5dfs4sf.us-east-2.aws.neon.tech',
        port: 5432,
        username: 'adiosdb_owner',
        password: 'lL17NdqQBgbJ',
        database: 'adiosdb',
        ssl: true, // Habilitar SSL
        extra: {
          ssl: {
            rejectUnauthorized: false, // Opcional: si se utiliza self-signed certificates
          },
        },
        //e
        //entities: [Equipo, Torneo, Partido],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    EquipoModule,
    PartidoModule,
    TorneoModule,

    //TypeOrmModule.forFeature([Equipo, Torneo, Partido]),
    // Importar módulos aquí (EquipoModule, TorneoModule, PartidoModule)
  ]
  ,providers: [AppService],

})
export class AppModule {}
