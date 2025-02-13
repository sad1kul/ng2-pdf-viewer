declare interface SetIterator<T> extends Iterator<T> {
  next(value?: any): IteratorResult<T>;
}

declare module 'pdfjs-dist/types/web/pdf_viewer' {
  interface PDFViewer {
      [Symbol.iterator](): SetIterator<any>;
  }
}
