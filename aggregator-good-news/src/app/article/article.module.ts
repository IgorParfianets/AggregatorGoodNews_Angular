import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './components/article/article.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  {
    path: 'article',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ArticleComponent, CommentComponent],
  exports: [],
  providers: [],
})
export class ArticleModule {}
