export const API_PATHS = {
   articles:{
       create: "/articles/create",
       list: "/articles",
       detail:(id: string)=>`/articles/${id}`
   }
} as const

