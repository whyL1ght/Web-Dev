import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

export interface Album {
  id: number;
  title: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private albumsCache: Album[] = [];

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    if (this.albumsCache.length > 0) {
      return of(this.albumsCache);
    } else {
      return this.http
        .get<Album[]>(`${this.baseUrl}/albums`)
        .pipe(tap((albums) => (this.albumsCache = albums)));
    }
  }

  getAlbum(id: number): Observable<Album> {
    const cachedAlbum = this.albumsCache.find((album) => album.id === id);
    if (cachedAlbum) {
      return of(cachedAlbum);
    } else {
      return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
    }
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        this.albumsCache = this.albumsCache.filter((album) => album.id !== id);
      })
    );
  }

  updateAlbum(id: number, title: string): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${id}`, { title }).pipe(
      tap((updatedAlbum) => {
        const index = this.albumsCache.findIndex((a) => a.id === id);
        if (index !== -1) {
          this.albumsCache[index] = updatedAlbum;
        }
      })
    );
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }
}
