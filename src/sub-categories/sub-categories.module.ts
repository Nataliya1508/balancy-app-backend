import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubCategory } from '@/sub-categories/entities/sub-category.entity';
import { User } from '@/users/entities/user.entity';

import { SubCategoriesController } from './sub-categories.controller';
import { SubCategoriesService } from './sub-categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory, User])],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
  exports: [SubCategoriesService],
})
export class SubCategoriesModule {}
