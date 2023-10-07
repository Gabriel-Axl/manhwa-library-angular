export interface page<T> {
    content: T[];  
    totalPages: number;  
    totalElements: number; 
    size: number;  
    number: number;  
    first: boolean;  
    last: boolean;  
    numberOfElements: number; 
  }