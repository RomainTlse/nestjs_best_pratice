import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(PostEntity) private readonly repo: Repository<PostEntity>) {}

  public async getAllPosts() {
    return await this.repo.find();
  }

  public getPostById(id: string) {
    return this.repo.findOneOrFail(id);
  }

  public async replacePost(id: string, postDto: UpdatePostDto) {
    return await this.repo.update({ id: id }, { content: postDto.content, title: postDto.title });
  }

  public async createPost(post: CreatePostDto) {
    return await this.repo.save(post);
  }

  public async deletePost(id: string) {
    await this.repo.findOneOrFail(id);
    return this.repo.delete(id);
  }
}
